import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';
import { CalculatorService } from '../calculator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products = PRODUCTS;
  addedProducts=[];
  
  
  constructor(
    public calculatorService : CalculatorService,
    public router : Router
  ) { }

  ngOnInit() {
    this.addedProducts = this.calculatorService.getAddedProducts();

  }

  toggleAddProduct(product) {
    this.calculatorService.addProduct(product);
  }

  toggleRemoveProduct(product) {
    this.calculatorService.removeProduct(product);
  }

  goToCheckout(){
    this.router.navigate(['/checkout']);
    console.log('Welcome to the Checkout Cart')
  }
}
