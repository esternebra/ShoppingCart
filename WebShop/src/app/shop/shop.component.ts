import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products = PRODUCTS;
  AddedProducts=[];
  
  constructor(
    public calculatorService : CalculatorService
  ) { }

  ngOnInit() {
    this.AddedProducts = this.calculatorService.getAddedProducts();

  }

  toggleAddProduct(product) {
    this.calculatorService.addProduct(product);
  }

  toggleRemoveProduct(product) {
    this.calculatorService.removeProduct(product);
  }

}
