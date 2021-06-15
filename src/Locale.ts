export class Locale {

    constructor() {

        this.base_fields = {
            id: 'Código de Identificação',
    
            name: 'Nome',
    
            created_by: 'Criado por',
    
            created_at: 'Criado em',
    
            updated_by: 'Atualizado por',
    
            updated_at: 'Atualizado em'
        };
    }

    protected base_fields: Object;

    protected name: string;

    protected fields: Object;

    public field(field_name: string) {

        return this.fields[field_name];
    };

    public table() {

        return this.name;
    };
}
