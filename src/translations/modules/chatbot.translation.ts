import { Locale } from '../../core/locale';

export class Chatbot extends Locale {

    constructor() {

        super();

        this.fields = {
            link: 'Link',

            explanation: 'Resumo',

            contents: 'Conteúdos',

            message: 'Mensagem',

            messages: 'Mensagens'
        };

        this.messages = {
            content_successfully_created: 'Conteúdo cadastrado com sucesso!',

            content_successfully_updated: 'Dados dos conteúdos atualizados com sucesso!',

			intent_successfully_created: 'Intenção cadastrada com sucesso!',

            intent_successfully_updated: 'Dados da intenção atualizados com sucesso!',

			chatbot_failed: 'Ooops! Deu um um problema nos meus circuitos...'
        };

        this.labels = {
            create_new_content: 'Cadastrar um novo conteúdo',

			create_new_intent: 'Cadastrar uma nova intenção'
        }

        this.enums = {
            
        }
    }

}