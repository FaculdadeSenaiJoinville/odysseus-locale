import { TranslationObject } from '../types/locale.type';

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
