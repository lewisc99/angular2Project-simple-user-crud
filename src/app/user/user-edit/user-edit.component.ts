import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {User} from 'src/app/User';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!:User;
  myForm!:FormGroup;
  userUpdated!:boolean;
 

  constructor(private userService:UserService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router) { 
  }

  ngOnInit(): void {
    let id:number = Number(this.route.snapshot.params['id']);

    this.user = this.userService.getUserById(id);

    this.myForm = this.fb.group({
      'id':[this.user.id],
      'name':[this.user.name,[Validators.required,Validators.minLength(3)]],
      'lastName':[this.user.lastName,[Validators.required,Validators.minLength(4)]],
      'cpf':[this.user.cpf,[Validators.required,Validators.minLength(6),Validators.maxLength(9)]],

    })
  
  }

  UpdateUser(form:any):void
  {
     this.userService.UpdateUser(form);
     this.userUpdated = true;
     this.returnToIndex();
  }

  returnToIndex()
  {
    if (this.userUpdated == true)
    {
      this.router.navigate(['/users/list'],{relativeTo:this.route,queryParamsHandling:'preserve'})

    }
  }

}
