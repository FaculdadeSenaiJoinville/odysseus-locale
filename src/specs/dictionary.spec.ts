import { Dictionary } from '..';

describe('Dictionary Test', () => {

	describe('GetTableName', () => {

		it('should call the method and return the scope name', () => {

			const expected = 'Usuários';
			
			expect(Dictionary.users.getTableName()).toBe(expected);
		});
	});

	describe('GetFieldName', () => {

		it('should receive a valid field name and return its translation', () => {

			const input = 'name';
			const expected = 'Nome';
			
			expect(Dictionary.users.getFieldName(input)).toBe(expected);
		});

		it('should receive an invalid field name and return an error message', () => {

			const input = 'invalid_field_name_for_test';
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o campo "${input}".`;

			expect(Dictionary.users.getFieldName(input)).toBe(expected);
		});
	});

	describe('GetMessage', () => {

		it('should receive a valid message name and return its translation', () => {

			const input = 'required_field';
			const field = 'email';
			const expected = 'Campo "E-mail" é obrigatório.';
			
			expect(Dictionary.users.getMessage(input, { field })).toBe(expected);
		});

		it('should receive a valid message name and return its translation (no properties)', () => {

			const input = 'successfully_logged_in';
			const expected = 'Login realizado com sucesso!';
			
			expect(Dictionary.auth.getMessage(input)).toBe(expected);
		});

		it('should receive a valid message name and return its translation (no properties)', () => {

			const input = 'successfully_logged_in';
			const expected = 'Login realizado com sucesso!';
			
			expect(Dictionary.auth.getMessage(input)).toBe(expected);
		});

		it('should receive a valid message name and return its translation (with type property)', () => {

			const input = 'invalid_type';
			const field = 'name';
			const type = 'string';
			const expected = 'O valor para o campo "Nome" deve ser do tipo "Texto"';
			
			expect(Dictionary.users.getMessage(input, { field, type })).toBe(expected);
		});

		it('should receive a valid message name and return its translation (with custom property)', () => {

			const input = 'welcome';
			const user_name = 'Gabriel';
			const expected = 'Seja bem vindo, Gabriel!';
			
			expect(Dictionary.users.getMessage(input, { user_name })).toBe(expected);
		});

		it('should receive an invalid message name and return an error message', () => {

			const input = 'invalid_message_name_for_test';
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para a mensagem "${input}".`;

			expect(Dictionary.users.getMessage(input)).toBe(expected);
		});

		it('should receive a valid message name and a config object with an invalid property name and return an error message', () => {

			const input = 'required_field';
			const invalidProperty = 'teste';
			const expected = `ERRO DE TRADUÇÃO: Propriedade "${invalidProperty}" não encontrada na mensagem "${input}".`;
			
			expect(Dictionary.users.getMessage(input, { teste: 'teste' })).toBe(expected);
		});

		it('should receive a valid message name and a config object with an invalid field name and return an error message', () => {

			const input = 'required_field';
			const field = 'invalid_field';
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o campo "${field}".`;
			
			expect(Dictionary.users.getMessage(input, { field })).toBe(expected);
		});

		it('should receive a valid message name and a config object with an invalid type name and return an error message', () => {

			const input = 'invalid_type';
			const field = 'name';
			const type = 'invalid_type_name_for_test';
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o tipo "${type}".`;
			
			expect(Dictionary.users.getMessage(input, { field, type })).toBe(expected);
		});
	});

	describe('GetEnum', () => {

		it('should receive a valid enum name and return its translation', () => {

			const input = 'ADMIN';
			const expected = 'Administrador';
			
			expect(Dictionary.users.getEnum(input)).toBe(expected);
		});

		it('should receive an invalid enum name and return an error message', () => {

			const input = 'invalid_enum_name_for_test';
			const expected = `ERRO DE TRADUÇÃO: Não foi encontrada uma tradução para o enum "${input}".`;
			
			expect(Dictionary.users.getEnum(input)).toBe(expected);
		});
	});
});
