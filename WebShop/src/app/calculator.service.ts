import { Injectable } from '@angular/core';
// import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  addedProducts=[];

  constructor() { }

  addProduct(product){
    this.addedProducts.push(product);
    console.log('El producto' ,product.name, 'ha sido añadido a la cesta. Actualmente tu cesta está así: ',this.addedProducts);
  }

  removeProduct(product){
    this.addedProducts.map((currentProduct, index) => {
      if(currentProduct.id === product.id){
        this.addedProducts.splice(index,1);
      };
    });
    console.log("Se ha eliminado el producto " ,product.name, " de la cesta. Actualmente tu cesta está así: ",this.addedProducts);
  }

  getAddedProducts(){
    return this.addedProducts;
  }
}
