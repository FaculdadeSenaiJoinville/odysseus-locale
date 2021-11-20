import { Locale } from '../../core/locale';

export class Contents extends Locale {

	constructor() {

		super();

		this.fields = {
			name: 'Nome',

			link: 'Link',

			explanation: 'Resumo'
		};

		this.messages = {
			update_payload_must_have_diferences: 'Os dados não podem ser os mesmos que os atuais.',

			successfully_created: 'Conteúdo cadastrado com sucesso!',

			successfully_updated: 'Dados do conteúdo atualizados com sucesso'
		};

		this.labels = {
			create_new_content: 'Cadastrar um novo conteúdo'
		}
	}

}
