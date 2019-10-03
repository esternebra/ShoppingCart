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
    
}
