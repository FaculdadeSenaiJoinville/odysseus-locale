import { JoiContextProperties, JoiDetail, JoiErrorType } from "../types/joi.type";

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

			[JoiErrorType.ARRAY_MAX]: 'O valor do campo {{key}} deve ser uma lista de no máximo {{limit}} item(s).',
		}
	}

	private messages: Object;

	public translate(detail: JoiDetail) {

		let message = this.messages[detail.type];

		if (message.includes(JoiContextProperties.KEY)) {

			message = message.replace(JoiContextProperties.KEY, detail.context.key);
		}

		if (message.includes(JoiContextProperties.LIMIT)) {

			message = message.replace(JoiContextProperties.LIMIT, detail.context.limit);
		}

		if (message.includes(JoiContextProperties.VALUE)) {

			message = message.replace(JoiContextProperties.VALUE, detail.context.value);
		}

		return message;
	}

}
