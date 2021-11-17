import { Locale } from '../../core/locale';

export class SystemErrors extends Locale {

	constructor() {

		super();

		this.messages = {
			internal_server_error: 'Ocorreu um erro interno!',

			duplicate_entry: '{{value}} já está em uso!',

			not_found: 'Não encontrado!'
		}
	}

}
