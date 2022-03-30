import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[] = [];
  

  constructor(private userService:UserService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

   this.users =  this.userService.getUsers();

  }
 

}
