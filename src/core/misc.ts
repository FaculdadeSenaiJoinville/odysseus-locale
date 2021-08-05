import { TranslationObject } from '../types/locale.type';

export class Misc {

	constructor() {

		this.modules = {
			auth: 'Autenticação',

			users: 'Usuários',

			groups: 'Grupos'
		};

		this.labels = {
			create: 'Cadastrar',

			edit: 'Editar',

			delete: 'Excluir',

			exit: 'Sair',

			open: 'Abrir',

			close: 'Fechar'
		};
	}

	private modules: TranslationObject;

	private labels: TranslationObject;

	public getLabel(label: string): string {

		const labelText = this.labels[label];

		return labelText ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a label "${label}".`;
	}

	public getModule(module: string) {

		const moduleText = this.modules[module];

		return moduleText ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o módulo "${module}".`;
	}

}
