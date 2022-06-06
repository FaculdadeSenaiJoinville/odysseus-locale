import { ConfigObject, TranslationObject } from '../types/locale.type';

export class Misc {

	constructor() {

		this.modules = {
			auth: 'Autenticação',

			users: 'Usuários',

			groups: 'Grupos',

			chatbot: 'Chatbot',

			bot_contents: 'Conteúdos',

			bot_intents: 'Intenções',

			bot_histories: 'Histórico',

			trails: 'Trilhas'
		};

		this.labels = {
			create: 'Cadastrar',

			new: 'Novo',

			save: 'Salvar',

			save_and_new: 'Salvar e Criar Novo',
			
			edit: 'Editar',

			publish: 'Publicar',

			delete: 'Excluir',

			sendToTest: 'Enviar para teste',

			exit: 'Sair',

			open: 'Abrir',

			close: 'Fechar',

			enter: 'Entrar',

			go_back: 'Voltar',

			find: 'Buscar',

			write_here: 'Digite aqui',

			update_status: 'Atualizar Status',

			confirm: 'Confirmar',

			cancel: 'Cancelar',
			
			details: 'Detalhes',

			profile: 'Perfil',

			search_by_name: 'Buscar por nome',

			required: 'Obrigatório',

			add: 'Adicionar',

			remove: 'Remover',

			send: 'Enviar'
		};

		this.messages = {
			no_data_found: 'Nenhum dado encontrado.',

			loading: 'Carregando...'
		}
	}

	private modules: TranslationObject;

	private labels: TranslationObject;

	private messages: TranslationObject;

	public getLabel(label: string): string {

		const labelText = this.labels[label];

		return labelText ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a label "${label}".`;
	}

	public getModule(module: string) {

		const moduleText = this.modules[module];

		return moduleText ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o módulo "${module}".`;
	}

	public getMessage(message_name: string, config?: ConfigObject) {

		const { messages } = this;

		if (!messages[message_name]) {

			return `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a mensagem "${message_name}".`;
		}

		if (config) {

			let message = messages[message_name];

			for (const property of Object.keys(config)) {

				if (!message.includes(`{{${property}}}`)) {

					return `ERRO DE TRADUÇÃO: Propriedade "${property}" não encontrada na mensagem "${message_name}".`;
				}

				message = message.replace(`{{${property}}}`, config[property]);
			}

			return message;
		}

		return messages[message_name];
	}

}
