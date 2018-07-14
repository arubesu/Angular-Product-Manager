import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const routes : Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

