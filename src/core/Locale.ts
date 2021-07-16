import { Properties } from '../types/properties.type';
import { DataTypes } from '../common/data-types';
import { ConfigObject, TranslationObject } from '../types/locale.type';

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
	}

	protected name: string;

	protected base_fields: TranslationObject;

	protected fields: TranslationObject;

	protected base_messages: TranslationObject;

	protected messages: TranslationObject;

	protected enums: TranslationObject;

	protected getFieldTranslation(field_name: string) {

		const fields = {
			...this.base_fields,
			...this.fields
		};

		return fields[field_name];
	}

	public getTableName() {

		return this.name;
	}

	public getFieldName(field_name: string) {

		const field = this.getFieldTranslation(field_name);

		return field ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o campo "${field_name}".`;
	}

	public getMessage(message_name: string, config?: ConfigObject) {

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

						return `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o tipo "${config[property]}".`;
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
}
