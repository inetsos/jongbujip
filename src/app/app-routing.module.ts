import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { UsersResolve } from './users.resolve';
import { UserResolve } from './user.resolve';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { MenuIndexComponent } from './menu-index/menu-index.component';
import { MenuNewComponent } from './menu-new/menu-new.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenusResolve } from './menus.resolve';
import { MenuResolve } from './menu.resolve';

import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: '',  component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users/new',  component: UserNewComponent },
  { path: 'users', canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserIndexComponent,
        resolve: {
          users: UsersResolve,
        }
      },
      {
        path: ':username',
        component: UserShowComponent,
        resolve: {
          user: UserResolve
        }
      },
      {
        path: ':username/edit',
        component: UserEditComponent,
        resolve: {
          user: UserResolve
        }
      },
    ]
  },
  { path: 'menus', canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MenuIndexComponent,
        resolve: {
          menus: MenusResolve,
        }
      },
      {
        path: 'new',
        component: MenuNewComponent
      },
      { path: ':menuNo/edit',
        component: MenuEditComponent,
        resolve: {
          menu: MenuResolve
        }
      },
    ]
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
