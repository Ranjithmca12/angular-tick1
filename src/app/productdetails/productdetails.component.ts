import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {CartService} from '../cart.service'

import {products} from '../products';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product;
  constructor(
    private route:ActivatedRoute,
    private cartservice:CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.product=products[+params.get('productId')]})
  }
  purchage(){
    this.cartservice.addCart(this.product);
  }

}