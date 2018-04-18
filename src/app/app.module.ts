import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Shared
import {
  GithubAPIService,
  AlertService,
  DataStorageService
} from './shared/services/index';

// Components
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';

// User
import {
  UserComponent,
  UserSearchComponent,
  UserSearchFormComponent,
  UserListComponent,
  UserItemComponent,
  UserDetailsComponent,
  UserRepositoryListComponent,
  UserRepositoryItemComponent,
  UserFollowerListComponent,
  UserFollowerItemComponent
} from './components/user/index';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserSearchFormComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
    HeaderComponent,
    UserRepositoryListComponent,
    UserRepositoryItemComponent,
    AlertComponent,
    UserFollowerListComponent,
    UserFollowerItemComponent,
    UserComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgArrayPipesModule,
    NgStringPipesModule
  ],
  providers: [
    DataStorageService,
    GithubAPIService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
