import { Locale } from '../../core/locale';

export class Users extends Locale {

	constructor() {

		super();

		this.fields = {
			email: 'E-mail',

			password: 'Senha',

			confirm_password: 'Confirmar Senha',

			new_password: 'Nova Senha',

			confirm_new_password: 'Confirmar Nova Senha',

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

			confirm_status_change: 'Deseja mesmo alterar o status do usuário para "{{next_status}}"?',
			
			status_successfully_updated: 'Status atualizado com sucesso!',

			visualize_all_trails: 'Visualizar todas as trilhas',

			must_have_last_name: 'Preencha com o nome completo',

			userTrails: 'Suas trilhas'
		};

		this.labels = {
			create_new_user: 'Cadastrar um novo usuário',

			inactive: 'Inativo',

			active: 'Ativo',
			
			save_password: 'Salvar Senha',

			list_page_description: 'Listagem de usuarios do sistema',

			users_per_page: 'Membros por página',

			no_users_associated: 'Nenhum usuário associado',

			assign_user: 'Associar usuário...'
		}
	}

}
