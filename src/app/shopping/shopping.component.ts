import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/services/product-service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers : [ProductService]
})
export class ShoppingComponent implements OnInit {
  Products : any[] =[];
  productSub = new Subscription;
  constructor( private ProductServ : ProductService) { }

  ngOnInit(): void {
    this.Products = this.ProductServ.getAllProducts()
    // this.productSub = 
  }

}
