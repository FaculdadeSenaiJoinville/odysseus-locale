import { Locale } from '../../core/locale';

export class Trails extends Locale {

	constructor() {

		super();

		this.fields = {
			description: 'Descrição',

			status: 'Status',

			icon: 'Ícone',

			active: 'Ativo',

			type: 'Tipo',

			color: 'Cor'
		};

		this.enums = {
			ONEDIT: 'Em Edição',

			ONTEST: 'Em Teste',

			PUBLISHED: 'Publicado'
		};

		this.messages = {
			welcome: 'Seja bem vindo, {{user_name}}!',

			successfully_created: 'Usuário cadastrado com sucesso!',

			password_successfully_updated: 'Senha atualizada com sucesso!',

			successfully_updated: 'Dados do usuário atualizados com sucesso!',

			confirm_status_change: 'Deseja mesmo alterar o status do usuário para "{{next_status}}"?',
			
			status_successfully_updated: 'Status atualizado com sucesso!',

			visualize_all_trails: 'Visualizar todas as trilhas',

			must_have_last_name: 'Preencha com o nome completo'
		};

		this.labels = {
			create_new_user: 'Cadastrar um novo usuário',

			inactive: 'Inativo',

			active: 'Ativo',
			
			save_password: 'Salvar Senha',

			list_page_description: 'Listagem de trilhas do sistema',

			users_per_page: 'Membros por página',

			no_users_associated: 'Nenhum usuário associado',

			assign_user: 'Associar usuário...'
		}
	}

}
