import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';
import { CalculatorService } from '../calculator.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  addedProducts=[];
  products = PRODUCTS;

  constructor(
    public calculatorService : CalculatorService,
    public router : Router
  ) { }

  ngOnInit() {
    this.addedProducts = this.calculatorService.getAddedProducts();
    }
  goToShop(){
    this.router.navigate(['/shop']);
    console.log('Welcome to the Shop')
  }

  getAddedProducts(){
    return this.addedProducts;
  }

  // applyOffer(addedProducts){
  //   if(addedProducts.id == 'GR1'){
  //     if(addedProducts.countered & 1){
  //       addedProducts.offer=(addedProducts.countered/2)*addedProducts.price;
  //     }else{
  //       addedProducts.offer=addedProducts.countered*addedProducts.price;
  //     }
  //   }else if(addedProducts.id == 'SR1'){
  //     if(addedProducts.countered >= 3){
  //       addedProducts.offer=addedProducts.countered*4.5;
  //     }else{
  //       addedProducts.offer=addedProducts.countered*addedProducts.price;
  //     }
  //   }else{
  //     if( addedProducts.countered >= 3){
  //       addedProducts.offer=addedProducts.countered*(addedProducts.price*0.66);
  //     }else{
  //       addedProducts.offer=addedProducts.countered*addedProducts.price;
  //     }
  //   }
  // }
    
}
