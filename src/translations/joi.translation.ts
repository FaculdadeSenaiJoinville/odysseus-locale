import { JoiContextProperties, JoiDetail, JoiErrorType } from '../types/joi.type';
import { TranslationObject } from '../types/locale.type';
import * as Modules from './';

export class Joi {

	constructor() {

		this.messages = {
			[JoiErrorType.STRING]: 'O campo {{key}} só aceita valores do tipo texto.',
        
			[JoiErrorType.STRING_MIN]: 'O valor do campo {{key}} deve ter no mínimo {{limit}} caracteres.',
        
			[JoiErrorType.STRING_MAX]: 'O valor do campo {{key}} deve ter no máximo {{limit}} caracteres.',
        
			[JoiErrorType.STRING_EMPTY]: 'O campo {{key}} é obrigatório.',
        
			[JoiErrorType.EMAIL]: 'O valor {{value}} não é um E-mail válido.',
        
			[JoiErrorType.REGEX]: 'O valor {{value}} está mal formatado.',
        
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
        
			[JoiErrorType.ARRAY_MAX]: 'O valor do campo {{key}} deve ser uma lista de no máximo {{limit}} item(s).'
		};
	}

    private messages: TranslationObject;

    public translate(module: string, detail: JoiDetail) {
		
    	const moduleName = this.toPascalCase(module);
    	console.log(moduleName);

    	const moduleTranslations = new Modules[moduleName]();

    	let message = this.messages[detail.type];
    
    	if (message.includes(JoiContextProperties.KEY)) {
    
    		if (detail.context.key) {
                
    			const field = moduleTranslations.getFieldTranslation(detail.context.key)
    
    			message = message.replace(JoiContextProperties.KEY, field);
    		} else {
    
    			message = message.replace(JoiContextProperties.KEY, '{FALHA AO IDENTIFICAR O CAMPO}');
    		}
    	}
    
    	if (message.includes(JoiContextProperties.LIMIT)) {
    
    		const limit = detail.context.limit ? detail.context.limit.toString() : '{VALOR NÃO ENCONTRADO}';
    
    		message = message.replace(JoiContextProperties.LIMIT, limit);
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
