import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './misc/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {AuthComponent} from './auth/auth.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {GoogleSigninComponent} from './auth/signin/google-signin/google-signin.component';
import {UserComService} from './services/user-com.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './auth/auth.guard';
import {UserEditComponent} from './auth/user-edit/user-edit.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {ErrorComponent} from './error/error.component';
import {RequestInterceptorService} from './services/request-interceptor.service';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './services/alert.service';
import {RegistriesComponent} from './registries/registries.component';
import {RegistryListComponent} from './registries/registry-list/registry-list.component';
import {RegistryDetailsComponent} from './registries/registry-details/registry-details.component';
import {RegistryComponent} from './registries/registry-list/registry/registry.component';
import {RegistryItemListComponent} from './registries/registry-details/registry-item-list/registry-item-list.component';
import {RegistryStartComponent} from './registries/registry-start/registry-start.component';
import {RegistryItemComponent} from './registries/registry-details/registry-item-list/registry-item/registry-item.component';
import {RegistryEditComponent} from './registries/registry-edit/registry-edit.component';
import {RegistryService} from './registries/registry.service';
import {RegistryComService} from './services/registry-com.service';
import {AddRegistryItemComponent} from './registries/registry-details/add-registry-item/add-registry-item.component';
import {UserItemListComponent} from './registries/registry-details/user-item-list/user-item-list.component';
import {RegistryDetailsService} from './registries/registry-details/registry-details.service';
import {ItemComService} from './services/item-com.service';
import {DataTablesModule} from 'angular-datatables';
import {AddNewItemComponent} from './admin/add-new-item/add-new-item.component';
import {ItemListComponent} from './admin/item-list/item-list.component';
import {AdminComponent} from './admin/admin.component';
import {AdminGuard} from './admin/admin.guard';
import { RegistryShareComponent } from './registries/registry-share/registry-share.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    GoogleSigninComponent,
    HomeComponent,
    UserEditComponent,
    ForgotPasswordComponent,
    ErrorComponent,
    AlertComponent,
    UserItemListComponent,
    RegistryDetailsComponent,
    RegistriesComponent,
    RegistryListComponent,
    RegistryComponent,
    RegistryItemListComponent,
    RegistryStartComponent,
    RegistryItemComponent,
    RegistryEditComponent,
    AddRegistryItemComponent,
    AddNewItemComponent,
    ItemListComponent,
    AdminComponent,
    RegistryShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [UserComService, AuthService, AdminGuard, AuthGuard, ItemComService, RegistryComService,
    RegistryService, RegistryDetailsService, AlertService, {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
