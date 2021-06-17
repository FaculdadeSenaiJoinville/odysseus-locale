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
	}
}
