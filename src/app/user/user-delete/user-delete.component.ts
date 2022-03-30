import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user!:User;

  constructor(private userService:UserService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    let id:number = Number(this.route.snapshot.params['id']);

    this.user = this.userService.getUserById(id);
  }

  deleteUser(id:number):void
  {
    this.userService.deleteUser(id);
   this.returnIndex()
  }


  returnIndex()
  {
    this.router.navigate(['/users/list'],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }

}
