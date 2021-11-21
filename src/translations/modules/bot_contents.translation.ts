import { Locale } from '../../core/locale';

export class BotContent extends Locale {

	constructor() {

		super();

		this.fields = {
			link: 'Link',

			explanation: 'Resumo'
		};

		this.messages = {
			successfully_created: 'Conteúdo cadastrado com sucesso!',

			successfully_updated: 'Dados dos conteúdos atualizados com sucesso!',

			confirm_delete: 'Deseja mesmo excluir o conteúdo "{{content_name}}"?'
		};

		this.labels = {
			create_new_content: 'Cadastrar um novo conteúdo',

			list_page_description: 'Listagem de conteúdos do chatbot',

			bot_contents_per_page: 'Conteúdos por página',

			no_bot_contents_associated: 'Nenhum conteúdo associado',

			assign_bot_content: 'Associar conteúdo...'
		}
	}

}