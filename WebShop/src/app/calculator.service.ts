import { Injectable } from '@angular/core';
import { PRODUCTS } from './products';
import { Products } from './api';

// import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  addedProducts=[];
  products = PRODUCTS;

  constructor() { }

  addProduct(product){
    if( product.countered === 0 ){
      this.addedProducts.push(product);
      product.countered++;
      console.log('Nuevo producto añadido al carrito: ' ,product.name);
    }else{
      product.countered++;
      if(product.id == 'GR1'){
        if(product.countered >= 2 && !(product.countered  % 2 == 0)){
          product.offer=((product.countered/2)*product.price + (product.price*0.5));
        }else if(product.countered  % 2 == 0){
          product.offer=(product.countered/2)*product.price;
          console.log('Se ha aplicado una Oferta especial a tu producto',product.name , '2 x 1' )
        }else{
          product.offer=product.countered*product.price;
        }
      }else if(product.id == 'SR1'){
        if(product.countered >= 3){
          product.offer=product.countered*4.5;
          console.log('Se ha aplicado una Oferta especial a tu producto',product.name , 'Ahora su valor unitario es de 4.5$.' )
        }else{
          product.offer=product.countered*product.price;
        }
      }else{
        if( product.countered >= 3){
          product.offer=product.countered*(product.price*0.66);
          console.log('Se ha aplicado una Oferta especial a tu producto',product.name , 'Se aplicará un descuento del 33% al precio total.' )
        }else{
          product.offer=product.countered*product.price;
        }
      }
    };
    console.log('El producto' ,product.name, 'ha sido añadido a la cesta. Actualmente tu cesta está así: ',this.addedProducts);
  }

  removeProduct(product){
    if( product.countered === 0 ){
      console.log('Este producto no está en tu cesta, por lo que no puedes eliminarlo: ' ,product.name);
    }else{
      product.countered--;
      console.log('El producto' ,product.name, 'ha sido eliminado de la cesta. Actualmente tu cesta está así: ',this.addedProducts);
    };
    console.log('Actualmente tu cesta está así: ',this.addedProducts);
  }

  getAddedProducts(){
    return this.addedProducts;
  }
}
