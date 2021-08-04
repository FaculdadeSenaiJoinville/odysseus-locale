import { Dictionary } from '..';

describe('Misc Test', () => {

	describe('GetLabel', () => {

		it('should call the method and return the label translation', () => {

			const input = 'create'
			const expected = 'Cadastrar';
			
			expect(Dictionary.getLabel(input)).toBe(expected);
		});

		it('should call the method and return the label translation', () => {

			const input = 'invalid_label_name_for_test'
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a label "${input}".`;
			
			expect(Dictionary.getLabel(input)).toBe(expected);
		});
	});
});
