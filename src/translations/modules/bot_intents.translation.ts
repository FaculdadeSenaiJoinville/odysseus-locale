import { Locale } from '../../core/locale';

export class BotIntent extends Locale {

	constructor() {

		super();

		this.fields = {
			contents: 'Conteúdos',

			message: 'Mensagem',

			messages: 'Mensagens',

			training_phrases: 'Frases de Treinamento'
		};

		this.messages = {
			successfully_created: 'Intenção cadastrada com sucesso!',

			successfully_updated: 'Dados da intenção atualizados com sucesso!',

			confirm_delete: 'Deseja mesmo excluir a intenção "{{intent_name}}"?'
		};

		this.labels = {
			create_new_intent: 'Cadastrar uma nova intenção',

			list_page_description: 'Listagem de intenções do chatbot'
		}
	}

}