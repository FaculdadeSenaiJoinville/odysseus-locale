import { Locale } from "../core/Locale";

export class Users extends Locale {

	constructor() {

		super();

		this.name = 'Usuários';

		this.fields = {
			email: 'E-mail',

			password: 'Senha',

			active: 'Ativo'
		};

		this.messages = {
			invalid_email: 'E-mail inválido.',

    		invalid_password: 'Senha inválida.'
		};
	}

}
