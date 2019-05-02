import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule'
  },
  { 
    path: 'accounts', 
    loadChildren: './accounts/accounts.module#AccountsPageModule'
  },
  { 
    path: 'accounts/:accountId', 
    loadChildren: './account/account.module#AccountPageModule'
  },
  { 
    path: 'contacts', 
    loadChildren: './contacts/contacts.module#ContactsPageModule'
  },
  { 
    path: 'contacts/new', 
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
