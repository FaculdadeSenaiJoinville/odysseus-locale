import { Properties } from "../types/properties.type";
import { DataTypes } from "../common/DataTypes";
import { JoiContextProperties, JoiDetail, JoiErrorType } from "../types/joi.type";

export class Locale {

	constructor() {

		this.base_fields = {
			id: 'Código de Identificação',

			name: 'Nome',

			active: 'Ativo',

			created_by: 'Criado por',

			created_at: 'Criado em',

			updated_by: 'Atualizado por',

			updated_at: 'Atualizado em'
		};

		this.base_messages = {
			invalid_type: 'O valor para o campo "{{field}}" deve ser do tipo "{{type}}"',

			required_field: 'Campo "{{field}}" é obrigatório.',

			characters_min: 'O campo "{{field}}" deve ter no mínimo {{value}} caracteres.'
		};

		this.joi_messages = {
			[JoiErrorType.STRING]: 'O campo {{key}} só aceita valores do tipo texto.',

			[JoiErrorType.STRING_MIN]: 'O valor do campo {{key}} deve ter no mínimo {{limit}} caracteres.',

			[JoiErrorType.STRING_MAX]: 'O valor do campo {{key}} deve ter no máximo {{limit}} caracteres.',

			[JoiErrorType.STRING_EMPTY]: 'O campo {{key}} é obrigatório.',

			[JoiErrorType.EMAIL]: 'O valor {{value}} não é um E-mail válido.',

			[JoiErrorType.REGEX]: 'O valor {{value}} está mal formatado.',

			[JoiErrorType.NUMBER]: 'O campo {{key}} só aceita valores do tipo numérico.',

			[JoiErrorType.NUMBER_MIN]: 'O valor do campo {{key}} deve ser maior ou igual à {{limit}}.',

			[JoiErrorType.NUMBER_MAX]: 'O valor do campo {{key}} deve ser menor ou igual à {{limit}}.',

			[JoiErrorType.INTEGER]: 'O campo {{key}} só aceita números inteiros.',

			[JoiErrorType.DATE]: 'O valor do campo {{key}} deve ser do tipo data.',

			[JoiErrorType.ARRAY]: 'O valor do campo {{key}} deve ser uma lista.',

			[JoiErrorType.BOOLEAN]: 'O campo {{key}} só aceita valores do tipo booleano.',

			[JoiErrorType.ANY_EMPTY]: 'O campo {{key}} é obrigatório.',

			[JoiErrorType.REQUIRED]: 'O campo {{key}} é obrigatório.',

			[JoiErrorType.ARRAY_MIN]: 'O valor do campo {{key}} deve ser uma lista de no mínimo {{limit}} item(s).',

			[JoiErrorType.ARRAY_MAX]: 'O valor do campo {{key}} deve ser uma lista de no máximo {{limit}} item(s).',
		}
	}

	private joi_messages: Object;

	protected name: string;

	protected base_fields: Object;

	protected fields: Object;

	protected base_messages: Object;

	protected messages: Object;

	protected enums: Object;

	protected getFieldTranslation(field_name: string) {

		const fields = {
			...this.base_fields,
			...this.fields
		};

		return fields[field_name];
	}

	public getName() {

		return this.name;
	};

	public getField(field_name: string) {

		const field = this.getFieldTranslation(field_name);

		return field ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o campo "${field_name}".`;
	};

	public getMessage(message_name: string, config?: Object) {

		const messages = {
			...this.base_messages,
			...this.messages
		};

		if (!messages[message_name]) {

			return `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a mensagem "${message_name}".`;
		}

		if (config) {

			let message = messages[message_name];

			for (const property of Object.keys(config)) {

				if (!message.includes(`{{${property}}}`)) {

					return `ERRO DE TRADUÇÃO: Propriedade "${property}" não encontrada na mensagem "${message_name}".`;
				}

				if (property === Properties.TYPE) {

					if (!DataTypes[config[property]]) {

						return `ERRO DE TRADUÇÃO: Tradução para o tipo "${config[property]}" não encontrada.`;
					}

					message = message.replace(`{{${property}}}`, DataTypes[config[property]]);
				}
				else if (property === Properties.FIELD) {

					const field = this.getFieldTranslation(config[property]);

					if (!field) {

						return `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o campo "${config[property]}".`;
					}

					message = message.replace(`{{${property}}}`, field);
				}
				else {

					message = message.replace(`{{${property}}}`, config[property]);
				}
			}

			return message;
		}

		return messages[message_name];
	}

	public getEnum(enum_name: string) {

		const fetchedEnum = this.enums[enum_name];

		return fetchedEnum ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o enum "${enum_name}".`;
	}

	public joiTranslate(detail: JoiDetail) {

		let message = this.joi_messages[detail.type];

		if (message.includes(JoiContextProperties.KEY)) {

			if (detail.context.key) {
				
				const field = this.getFieldTranslation(detail.context.key)
	
				message = message.replace(JoiContextProperties.KEY, field);
			} else {

				message = message.replace(JoiContextProperties.KEY, '{FALHA AO IDENTIFICAR O CAMPO}');
			}
		}

		if (message.includes(JoiContextProperties.LIMIT)) {

			message = message.replace(JoiContextProperties.LIMIT, detail.context.limit);
		}

		if (message.includes(JoiContextProperties.VALUE)) {

			message = message.replace(JoiContextProperties.VALUE, detail.context.value);
		}

		return message;
	}
}
