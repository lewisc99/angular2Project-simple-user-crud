import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  myForm!:FormGroup;
  userUpdated!:boolean;
  constructor(private userService:UserService , private fb:FormBuilder,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      'name':["",[Validators.required,Validators.minLength(3)]],
      'lastName':["",[Validators.required,Validators.minLength(4)]],
      'cpf':["",[Validators.required,Validators.minLength(6),Validators.maxLength(9)]],

    })
  }


  onSubmit(form:any)
  {

   

    this.userService.addNewUser(form);
   

    this.returnToIndex();
  
  }


  returnToIndex()
  {
    this.router.navigate(['/users/list'],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }

}
