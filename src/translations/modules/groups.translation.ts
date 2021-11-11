import { Locale } from '../../core/locale';

export class Groups extends Locale {

	constructor() {

		super();

		this.fields = {
			description: 'Descrição',

			users: 'Membros',

			name: 'Nome'
		};

		this.messages = {
			update_payload_must_have_diferences: 'Os dados não podem ser os mesmos que os atuais.',

			successfully_created: 'Grupo cadastrado com sucesso!',

			successfully_updated: 'Dados do grupo atualizados com sucesso!',

			successfully_deleted: 'Grupo excluído com sucesso!',

			users_per_page: 'Membros por página'
		};

		this.labels = {
			create_new_group: 'Criar um novo grupo'
		}
	}

}
