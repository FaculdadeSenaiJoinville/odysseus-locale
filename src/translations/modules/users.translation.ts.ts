import { Locale } from '../../core/locale';

export class Users extends Locale {

	constructor() {

		super();

		this.name = 'Usuários';

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

			update_payload_must_have_diferences: 'Os dados não podem ser os mesmos que os atuais.'
		};
	}

}
