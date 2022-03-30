import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NewUserComponent } from "./user/new-user/new-user.component";
import { UserDeleteComponent } from "./user/user-delete/user-delete.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserComponent } from "./user/user.component";




const appRoutes:Routes = [
    {path:'',component:HomeComponent},
  
    {path:"users",component:UserComponent,children:[
      {path:'list',component:UserListComponent},
      {path:':id/edit',component:UserEditComponent},
      {path:'new',component:NewUserComponent},
      {path:':id/delete',component:UserDeleteComponent}
  
    ]},
    {path:'not-found',component:PageNotFoundComponent},
    {path:'**', redirectTo:'/not-found'}
   // {path:"edit/:id",component:UserEditComponent},
  
  ]
  

  @NgModule({
      imports:[RouterModule.forRoot(appRoutes)],
      exports:[RouterModule]
  })

  export class AppRoutingModule {}