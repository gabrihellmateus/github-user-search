import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Search
import { SearchComponent } from './components/search/index';

// User
import {
  UserComponent,
  UserRepositoryListComponent,
  UserFollowerListComponent
} from './components/user/index';

const routes: Routes = [
  { path: '', component: SearchComponent },
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
