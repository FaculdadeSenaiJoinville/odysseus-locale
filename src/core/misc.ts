import { TranslationObject } from '../types/locale.type';

const modules: TranslationObject = {
	auth: 'Autenticação',
	
	users: 'Usuários',

	groups: 'Grupos'
}

const labels: TranslationObject = {
	create: 'Cadastrar',

	edit: 'Editar',

	delete: 'Excluir',

	exit: 'Sair',

	open: 'Abrir',

	close: 'Fechar'
};

export function getLabel(label: string): string {

	const labelText = labels[label];

	return labelText ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a label "${label}".`;
}

export function getModule(module: string) {

	const moduleText = modules[module];

	return moduleText ?? `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o módulo "${module}".`;
}
