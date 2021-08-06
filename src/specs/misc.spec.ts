import { Dictionary } from '..';

describe('Misc Test', () => {

	describe('GetLabel', () => {

		it('should call the method and return the label translation', () => {

			const input = 'create'
			const expected = 'Cadastrar';
			
			expect(Dictionary.misc.getLabel(input)).toBe(expected);
		});

		it('should call the method and return an error message', () => {

			const input = 'invalid_label_name_for_test'
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a label "${input}".`;
			
			expect(Dictionary.misc.getLabel(input)).toBe(expected);
		});
	});

	describe('GetModule', () => {

		it('should call the method and return the module translation', () => {

			const input = 'users'
			const expected = 'Usuários';
			
			expect(Dictionary.misc.getModule(input)).toBe(expected);
		});

		it('should call the method and return an error message', () => {

			const input = 'invalid_module_name_for_test'
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o módulo "${input}".`;
			
			expect(Dictionary.misc.getModule(input)).toBe(expected);
		});
	});
});
