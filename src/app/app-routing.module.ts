import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Search
import { SearchComponent } from '@app/components/search/index';

// User
import {
  UserComponent,
  UserRepositoryListComponent,
  UserFollowerListComponent
} from '@app/components/user/index';

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
