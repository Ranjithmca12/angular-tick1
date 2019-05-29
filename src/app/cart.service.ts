import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[];
  constructor(private httpclient:HttpClient) { }
  addCart(product){
    window.alert('Your product has been added to the cart!');
    this.items.push(product);
  }

 removeCart(product){
   window.alert('Your product has been removed from the cart!');
    this.items.slice(product)
  }
  clearCart(){
     window.alert('Your cart is cleared!');
    this.items=[];
    return this.items;
  }
  getItems(){
 //   window.alert('listing your cart Details!');
    return this.items;
    
  }
  getShippingPrices(){
 //   window.alert('listing your cart Details!');
   // return this.items;
   return this.httpclient.get('/assets/shipping.json')
    
  }
}