import { JoiMessages } from '../src';

describe('JoiMessages Test', () => {

	describe('Translate', () => {

		it('should receive a valid module name and a valid detail object (with limit property) and return a message', () => {
			
			const module = 'users';
			const detail = {
				type: 'string.min',
				context: {
					key: 'password',
					limit: 8
				}
			};
			const expected = 'O valor do campo Senha deve ter no mínimo 8 caracteres.';

			expect(JoiMessages.translate(module, detail)).toBe(expected);
		});

		it('should receive a valid module name and a valid detail object (with value property) and return a message', () => {
			
			const module = 'users';
			const detail = {
				type: 'string.email',
				context: {
					value: 'invalid_email'
				}
			};
			const expected = 'O valor "invalid_email" não é um E-mail válido.';

			expect(JoiMessages.translate(module, detail)).toBe(expected);
		});

		it('should receive an invalid module name and return an error message', () => {
			
			const module = 'invalid-module-name-for-test';
			const detail = {
				type: 'string.base',
				context: {
					key: 'email',
					value: null
				}
			};
			const expected = `ERRO DE TRADUÇÃO (JOI): O módulo InvalidModuleNameForTest (${module}) não existe.`;

			expect(JoiMessages.translate(module, detail)).toBe(expected);
		});

		it('should receive an invalid type of error and return an error message', () => {
			
			const module = 'users';
			const detail = {
				type: 'invalid_type_name_for_test',
				context: {
					key: 'email',
					value: null
				}
			};
			const expected = `ERRO DE TRADUÇÃO (JOI): Não foi encontrada uma tradução para o tipo de erro "${detail.type}".`;

			expect(JoiMessages.translate(module, detail)).toBe(expected);
		});

		it('should receive a detail object without "key" property and return an error message', () => {
			
			const module = 'users';
			const detail = {
				type: 'string.base',
				context: {
					value: null
				}
			};
			const expected = 'ERRO DE TRADUÇÃO (JOI): Campo "key" não encontrado nos detalhes.';

			expect(JoiMessages.translate(module, detail)).toBe(expected);
		});

		it('should receive a detail object without "key" property and return an error message', () => {
			
			const module = 'users';
			const detail = {
				type: 'string.min',
				context: {
					key: 'password',
					value: null
				}
			};
			const expected = 'ERRO DE TRADUÇÃO (JOI): Campo "limit" não encontrado nos detalhes.';

			expect(JoiMessages.translate(module, detail)).toBe(expected);
		});
	});
});