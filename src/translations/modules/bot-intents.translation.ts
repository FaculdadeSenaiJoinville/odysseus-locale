import { Locale } from '../../core/locale';

export class BotIntent extends Locale {

	constructor() {

		super();

		this.fields = {
			message: 'Mensagem',

			messages: 'Mensagens'
		};

		this.messages = {
			successfully_created: 'Intenção cadastrada com sucesso!',

			successfully_updated: 'Dados da intenção atualizados com sucesso!'
		};

		this.labels = {
			create_new_intent: 'Cadastrar uma nova intenção'
		}
	}

}