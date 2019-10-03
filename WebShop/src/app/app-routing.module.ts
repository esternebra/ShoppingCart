import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component'


const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'shop', component: ShopComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
