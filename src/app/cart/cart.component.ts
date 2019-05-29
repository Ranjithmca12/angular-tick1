import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart;
  checkoutForm;
  constructor(private cartservice:CartService,private frombuilder:FormBuilder) { 
    this.productsInCart=this.cartservice.getItems();
    this.checkoutForm=this.frombuilder.group({
      name:'',
      address:''
    })
  }

  ngOnInit() {
   //this.productsInCart=this.getCartItems();
  }
  getCartItems(){
    //this.cartservice.getItems;
  };
  onSubmit(customerData){
    console.warn("your order has been submitted",customerData);
    this.productsInCart=this.cartservice.clearCart();
    this.checkoutForm.reset();
  }
}