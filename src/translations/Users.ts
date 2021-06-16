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
			hello_world: 'Olá Mundo',

			greeting_user: 'Olá {{user_name}}! Como vai?'
		};
	}
}
