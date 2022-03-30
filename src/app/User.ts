export class User {
    id:number;
    name:string;
    lastName:string;
    cpf:string;


    constructor(id:number,name:string,lastName:string,cpf:string)
    {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.cpf = cpf;
        
    }
}