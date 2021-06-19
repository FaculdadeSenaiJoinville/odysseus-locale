import { Properties } from "./Properties";
import { Types } from "./Types";

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

	protected base_fields: Object;

	protected fields: Object;

	protected base_messages: Object;

	protected messages: Object;

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

					if (!Types[config[property]]) {

						return `ERRO DE TRADUÇÃO: Tradução para o tipo "${config[property]}" não encontrada.`;
					}

					message = message.replace(`{{${property}}}`, Types[config[property]]);
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
}
