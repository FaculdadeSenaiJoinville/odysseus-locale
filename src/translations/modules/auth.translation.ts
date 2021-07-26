import { Locale } from '../../core/locale';

export class Auth extends Locale {
	
	constructor() {

		super();

		this.name = 'Autenticação';

		this.fields = {
			email: 'E-mail',

			password: 'Senha',

			expiresIn: 'Expira em'
		};

		this.messages = {
			successfully_logged_in: 'Login realizado com sucesso!',

			successfully_logged_out: 'Logout realizado com sucesso!',

			unauthorized: 'Ei! Você não tem permissão para fazer isso.',

			user_not_found: 'Usuário não encontrado.'
		};
	}

}
