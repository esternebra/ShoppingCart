import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products = Products;
  
  constructor() { }

  ngOnInit() {
  }

}
