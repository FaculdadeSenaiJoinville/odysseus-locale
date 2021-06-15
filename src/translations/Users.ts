import { Locale } from "../Locale";

export class Users extends Locale {

    constructor() {

        super();
        this.name = 'Usuários';
    
        this.fields = {
            ...this.base_fields,

            email: 'E-mail',

            password: 'Senha',

            active: 'Ativo'
        };
    }
}
