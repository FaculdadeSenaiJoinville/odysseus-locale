export class Locale {

	constructor() {

		this.base_fields = {
			id: 'Código de Identificação',

			name: 'Nome',

			created_by: 'Criado por',

			created_at: 'Criado em',

			updated_by: 'Atualizado por',

			updated_at: 'Atualizado em'
		};
	}

	protected name: string;

	protected base_fields: Object;

	protected fields: Object;

	protected messages: Object;

	public table() {

		return this.name;
	};

	public field(field_name: string) {

		const fields = {
			...this.base_fields,
			...this.fields
		};

		return fields[field_name]
			? fields[field_name]
			: `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o campo "${field_name}".`;
	};

	public message(message_name: string, config?: Object) {

		if (!this.messages[message_name]) {

			return `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a mensagem "${message_name}".`;
		}

		if (config) {

			let message = this.messages[message_name];

			for (const property of Object.keys(config)) {

				if (!message.includes(`{{${property}}}`)) {

					return `ERRO DE TRADUÇÃO: Propriedade "${property}" não encontrada na mensagem "${message_name}"`;
				}

				message = message.replace(`{{${property}}}`, config[property]);
			}

			return message;
		}

		return this.messages[message_name];
	}
}
