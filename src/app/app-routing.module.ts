import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  },
  {
    path: 'delete/:id',
    component: DeleteProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
