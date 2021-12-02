import { Locale } from '../../core/locale';

export class Auth extends Locale {
	
	constructor() {

		super();

		this.fields = {
			email: 'E-mail',

			password: 'Senha',

			expiresIn: 'Expira em'
		};

		this.messages = {
			successfully_logged_in: 'Login realizado com sucesso!',

			successfully_logged_out: 'Logout realizado com sucesso!',

			unauthorized: 'Ei! Você não tem permissão para fazer isso.',

			user_not_found: 'Usuário não encontrado.',

			reset_password_email_sent: 'E-mail de recuperação de senha enviado.'
		};

		this.labels = {
			return_to_login: 'Voltar para o login',

			forgot_password: 'Esqueci minha senha',

			reset_password_orientation: 'Digite o seu email logo abaixo e clique no botão "ENVIAR" para receber um link para trocar sua senha.'
		}
	}

}
