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

			successfully_created: 'Trilha cadastrada com sucesso!',

			password_successfully_updated: 'Senha atualizada com sucesso!',

			successfully_updated: 'Dados da trilha atualizados com sucesso!',

			confirm_status_change: 'Deseja mesmo alterar o status do usuário para "{{next_status}}"?',
			
			status_successfully_updated: 'Status atualizado com sucesso!',

			visualize_all_trails: 'Visualizar todas as trilhas',

			must_have_last_name: 'Preencha com o nome completo',

			confirm_test: 'Deseja mesmo enviar a trilha para teste?',

			confirm_publish: 'Deseja mesmo enviar publicar esta trilha?'
		};

		this.labels = {
			create_new_user: 'Cadastrar um novo usuário',

			inactive: 'Inativo',

			active: 'Ativo',
			
			save_password: 'Salvar Senha',

			list_page_description: 'Listagem de trilhas do sistema',

			users_per_page: 'Membros por página',

			no_users_associated: 'Nenhum usuário associado',

			assign_user: 'Associar usuário...',

			trails_per_page : 'Trilhas por página',

			assign_trails: 'Associar trilha...',

			no_trails_associated: 'Nenhuma trilha associada'
		}
	}

}
