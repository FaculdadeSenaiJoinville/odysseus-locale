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

			successfully_updated: 'Dados dos conteúdos atualizados com sucesso!'
		};

		this.labels = {
			create_new_content: 'Cadastrar um novo conteúdo'
		}
	}

}