import { Locale } from "../core/Locale";

export class Users extends Locale {

	constructor() {

		super();

		this.name = 'Usuários';

		this.fields = {
			email: 'E-mail',

			password: 'Senha',

			active: 'Ativo',

			type: 'Tipo'
		};
		
		this.enums = {
			ADMIN: 'Administrador',

			PROFESSOR: 'Professor',

			STUDENT: 'Estudante',
		};

		this.messages = {
			invalid_email: 'E-mail inválido.',

    		invalid_password: 'Senha inválida.'
		};
	}
}
