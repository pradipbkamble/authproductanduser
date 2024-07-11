import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products/products.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { FormProductComponent } from './components/products/form-product/form-product.component';
import { UsersComponent } from './components/users/users/users.component';
import { SingleUsersComponent } from './components/users/single-users/single-users.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AbobtComponent } from './components/abobt/abobt.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleProductComponent,
    FormProductComponent,
    UsersComponent,
    SingleUsersComponent,
    UserFormComponent,
    AuthComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    PageNotFoundComponent,
    AbobtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
