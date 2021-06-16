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

			greeting_user: 'Olá {{user_name}}! Como vai?',

			greeting_two_users: 'Olá {{first_user_name}} e {{second_user_name}}! Como vão?'
		};
	}
}
