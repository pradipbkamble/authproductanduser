import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products/products.component';
import { FormProductComponent } from './components/products/form-product/form-product.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { HomeComponent } from './components/home/home.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UsersComponent } from './components/users/users/users.component';
import { SingleUsersComponent } from './components/users/single-users/single-users.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './gards/auth.guard';
import { UserRoleGuard } from './gards/user-role.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductresolveService } from './services/productresolve.service';
import { UseresolveService } from './services/useresolve.service';
import { DeactiveGuard } from './gards/deactive.guard';

const routes: Routes = [
  {
path:'',
component:AuthComponent
  },
  {
    path: 'Home',
    component:HomeComponent,
    canActivate:[AuthGuard,UserRoleGuard],
    data:{
      UserRole:['user','Admin','SuperAdmin']
    },
  },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate:[AuthGuard,UserRoleGuard],
    data:{
      UserRole:['user','Admin','SuperAdmin']
    },
    
    children: [
      {
        path: 'addproduct',
        component: FormProductComponent
      },
      {
        path: ':productid',
        component: SingleProductComponent,
        resolve:{
          productinfo:ProductresolveService
                  },
        
      },
      {
        path: ':productid/edtproduct',
        component: FormProductComponent,
        canDeactivate:[
          DeactiveGuard
        ]

      }
    ]
  },
  {
    path: 'about',
    component: AdminComponent
  },

  {
    path: 'users',
    canActivate:[AuthGuard,UserRoleGuard],
    data:{
      UserRole:['Admin','SuperAdmin']
    },
    component: UsersComponent,
    children: [
      {
        path: 'adduser',
        component: UserFormComponent
      },
      {
        path: ':userid',
        resolve:{
          userinfo:UseresolveService
        },
        component: SingleUsersComponent
      },
      {
        path: ':userid/useredt',
        component: UserFormComponent,
        canDeactivate:[
          DeactiveGuard
        ]

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
