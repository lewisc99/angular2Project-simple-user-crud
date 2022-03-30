import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserService } from './user.service';
import { LoggingService } from './logging.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './user/new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserEditComponent,
    NewUserComponent,
    HomeComponent,
    UserDeleteComponent,
    PageNotFoundComponent,

    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  //  RouterModule.forRoot(appRoutes),
  AppRoutingModule,
    ReactiveFormsModule,
    

  ],
  providers: [UserService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
