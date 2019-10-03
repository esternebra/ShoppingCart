import { Injectable } from '@angular/core';
import { PRODUCTS } from './products';

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

  // getOffer(addedProducts){
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
