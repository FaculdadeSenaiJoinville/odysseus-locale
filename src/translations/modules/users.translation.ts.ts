import { Locale } from '../../core/locale';

export class Users extends Locale {

	constructor() {

		super();

		this.fields = {
			email: 'E-mail',

			password: 'Senha',

			confirm_password: 'Confirmar Senha',

			active: 'Ativo',

			type: 'Tipo'
		};

		this.enums = {
			ADMIN: 'Administrador',

			PROFESSOR: 'Professor',

			STUDENT: 'Estudante'
		};

		this.messages = {
			welcome: 'Seja bem vindo, {{user_name}}!',

			invalid_email: 'E-mail inválido.',

			invalid_password: 'Senha inválida.',

			password_not_equal: 'As senhas devem ser iguais.',

			update_payload_must_have_diferences: 'Os dados não podem ser os mesmos que os atuais.',

			successfully_created: 'Usuário cadastrado com sucesso!',

			password_successfully_updated: 'Senha atualizada com sucesso!',

			successfully_updated: 'Dados do usuário atualizados com sucesso!',

			status_successfully_updated: 'Status atualizado com sucesso!'
		};

		this.labels = {
			create_new_user: 'Cadastrar um novo usuário'
		}
	}

}
