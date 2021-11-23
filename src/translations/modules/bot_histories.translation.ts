import { Locale } from '../../core/locale';

export class BotHistory extends Locale {

	constructor() {

		super();

		this.fields = {
			user_name: 'Nome usuário',

			user_message: 'Mensagem usuário',

			bot_response: 'Resposta do bot',

			chat_id: 'Id do chat'
		};

		this.labels = {
			create_new_content: 'Cadastrar um novo conteúdo',

			list_page_description: 'Listagem de histórico do chatbot'
		}
	}

}