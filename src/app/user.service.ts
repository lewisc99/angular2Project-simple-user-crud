import { Injectable,EventEmitter } from "@angular/core";
import { User } from "./User";
import { LoggingService } from "./logging.service";
import { FormBuilder } from "@angular/forms";


@Injectable()
export class UserService {

         
   // usersChanged = new EventEmitter<User[]>();

    user!:User;
    id!:number;
    users:User[] = [
        new User(1,"John","March","494939449"),
        new User(2,"Maria","Carl","949393334"),
        new User(3,"Reinod","Souza","034943494"),
        new User(4,"Francis","Albert","943498229"),
    ]


    constructor(private loggingService:LoggingService)
    {

    }

    getUsers()
    {
       return  this.users.slice();
    }

    getUserById(id:number):User
    {
         let user:any = this.users.filter(userId => userId.id == id);
       this.user  = {
            id:user[0].id,
            name:user[0].name,
            lastName:user[0].lastName,
            cpf:user[0].cpf
        }
        this.loggingService.logStatusChange("getUserById()")
       return this.user;
    }

    UpdateUser(myForm:any):boolean
    { 
        let findIndexOf:number = this.users.findIndex(x => x.id == myForm.id);

        if (findIndexOf != null)
        {
            this.users[findIndexOf].name = myForm.name;
            this.users[findIndexOf].lastName = myForm.lastName;
            this.users[findIndexOf].cpf = myForm.cpf;
            this.loggingService.logStatusChange("UpdateUser()")
        }
      
        return true;
    }

    addNewUser(form:any)
    {
        this.id = ( this.users[this.users.length -1 ].id ) + 1
       

        this.user = {
          id: this.id,
          name:form.name,
          lastName:form.lastName,
          cpf:form.cpf
        }
        this.users.push(this.user);
        this.loggingService.logStatusChange("addNewUser()")

    }

    deleteUser(id:number)
    {
        let findIndexOf:number = this.users.findIndex(x => x.id == id);

        this.users.splice(findIndexOf,1);
        this.loggingService.logStatusChange("deleteUser()")


    }
  
   
}