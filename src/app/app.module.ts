import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Shared
import { GithubAPIService, AlertService, DataStorageService } from '@app/shared/services';
import { TokenInterceptor } from '@app/shared/services/token.interceptor';

// Components
import { AlertComponent } from '@app/components/alert/alert.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { LoadingComponent } from '@app/components/loading/loading.component';

// Search
import {
  SearchComponent,
  SearchFormComponent,
  SearchListComponent,
  SearchItemComponent
} from '@app/components/search/index';

// User
import {
  UserComponent,
  UserDetailsComponent,
  UserRepositoryListComponent,
  UserRepositoryItemComponent,
  UserFollowerListComponent,
  UserFollowerItemComponent
} from '@app/components/user/index';

import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent,
    SearchComponent,
    SearchFormComponent,
    SearchListComponent,
    SearchItemComponent,
    UserComponent,
    UserDetailsComponent,
    UserRepositoryListComponent,
    UserRepositoryItemComponent,
    UserFollowerListComponent,
    UserFollowerItemComponent,
    LoadingComponent,
    FooterComponent
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
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
