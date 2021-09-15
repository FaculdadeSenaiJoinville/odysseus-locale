import { JoiContextProperties, JoiDetail, JoiErrorType } from '../../types/joi.type';
import { TranslationObject } from '../../types/locale.type';
import * as Modules from '..';

export class Joi {

	constructor() {

		this.messages = {
			[JoiErrorType.STRING]: 'O campo {{key}} só aceita valores do tipo texto.',
        
			[JoiErrorType.STRING_MIN]: 'O valor do campo {{key}} deve ter no mínimo {{limit}} caracteres.',
        
			[JoiErrorType.STRING_MAX]: 'O valor do campo {{key}} deve ter no máximo {{limit}} caracteres.',
        
			[JoiErrorType.STRING_EMPTY]: 'O campo {{key}} é obrigatório.',
        
			[JoiErrorType.EMAIL]: 'O valor "{{value}}" não é um E-mail válido.',
        
			[JoiErrorType.REGEX]: 'O valor "{{value}}" está mal formatado.',
        
			[JoiErrorType.NUMBER]: 'O campo {{key}} só aceita valores do tipo numérico.',
        
			[JoiErrorType.NUMBER_MIN]: 'O valor do campo {{key}} deve ser maior ou igual à {{limit}}.',
        
			[JoiErrorType.NUMBER_MAX]: 'O valor do campo {{key}} deve ser menor ou igual à {{limit}}.',
        
			[JoiErrorType.INTEGER]: 'O campo {{key}} só aceita números inteiros.',
        
			[JoiErrorType.DATE]: 'O valor do campo {{key}} deve ser do tipo data.',
        
			[JoiErrorType.ARRAY]: 'O valor do campo {{key}} deve ser uma lista.',
        
			[JoiErrorType.BOOLEAN]: 'O campo {{key}} só aceita valores do tipo booleano.',
        
			[JoiErrorType.ANY_EMPTY]: 'O campo {{key}} é obrigatório.',
        
			[JoiErrorType.REQUIRED]: 'O campo {{key}} é obrigatório.',
        
			[JoiErrorType.ARRAY_MIN]: 'O valor do campo {{key}} deve ser uma lista de no mínimo {{limit}} item(s).',
        
			[JoiErrorType.ARRAY_MAX]: 'O valor do campo {{key}} deve ser uma lista de no máximo {{limit}} item(s).',

			[JoiErrorType.OBJECT_UNKNOWN]: 'O campo {{key}} não é um campo válido.',

			[JoiErrorType.ANY_UNKNOWN]: 'O campo {{key}} não é um campo válido.'
		};
	}

    private messages: TranslationObject;

    public translate(module: string, detail: JoiDetail) {
		
    	const moduleName = this.toPascalCase(module);
		
    	if (!Modules[moduleName]) {

    		return `ERRO DE TRADUÇÃO (JOI): O módulo ${moduleName} (${module}) não existe.`;
    	}
    	
    	const moduleTranslations = new Modules[moduleName]();

    	let message = this.messages[detail.type];

    	if (!message) {

    		return `ERRO DE TRADUÇÃO (JOI): Não foi encontrada uma tradução para o tipo de erro "${detail.type}".`;
    	}
    
    	if (message.includes(JoiContextProperties.KEY)) {
    
    		if (detail.context.key) {
                
    			const field = moduleTranslations.getFieldTranslation(detail.context.key)
    
    			message = message.replace(JoiContextProperties.KEY, field);
    		} else {
    
    			return 'ERRO DE TRADUÇÃO (JOI): Campo "key" não encontrado nos detalhes.';
    		}
    	}
    
    	if (message.includes(JoiContextProperties.LIMIT)) {
    
    		if (detail.context.limit) {

    			message = message.replace(JoiContextProperties.LIMIT, detail.context.limit.toString());
    		}
    		else {

    			return 'ERRO DE TRADUÇÃO (JOI): Campo "limit" não encontrado nos detalhes.';
    		}
    	}
    
    	if (message.includes(JoiContextProperties.VALUE)) {
    
    		message = message.replace(JoiContextProperties.VALUE, detail.context.value);
    	}
    
    	return message;
    }

    private capitalizeFirstLetter(value: string) {
        
    	return value.charAt(0).toUpperCase() + value.slice(1);
    }

    private toPascalCase(input: string){
      
    	return input.split('-').map(this.capitalizeFirstLetter).join('')
    }

}
