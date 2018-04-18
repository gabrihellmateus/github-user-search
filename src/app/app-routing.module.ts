import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// User
import {
  UserComponent,
  UserSearchComponent,
  UserSearchFormComponent,
  UserDetailsComponent,
  UserRepositoryListComponent,
  UserFollowerListComponent,
} from './components/user/index';

const routes: Routes = [
  { path: '', component: UserSearchComponent },
  {
    path: 'users/:login',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'repositories', pathMatch: 'full' },
      { path: 'repositories', component: UserRepositoryListComponent, data: { page: 'repositories' } },
      { path: 'followers', component: UserFollowerListComponent, data: { page: 'followers' } },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
