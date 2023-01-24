import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { BagService } from 'src/app/shared/services/bag-service';
import { ProductService } from 'src/app/shared/services/product-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StickyDirection } from '@angular/cdk/table';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  product !: Product;
  @Input() ProductFromParent : any;
  maxIncMsg : string = `You can't add More than 5 Products in Bag`;
  minDecMsg : string = `Minimum product quantity should be one`
  constructor(private ProductServ : ProductService , private BagServ : BagService , private matSnack : MatSnackBar ) { }

  ngOnInit(): void {
    this.product = this.ProductFromParent
  }
  incrementItem(product : Product){
    if(product.qunt === 5){
      this.matSnack.open(this.maxIncMsg,'',{
        duration : 3000,
        verticalPosition : 'bottom'
      })
    }else{
      product.qunt += 1;
    }
  }

  decrementItem(product : Product){
    if(product.qunt === 1){
      this.matSnack.open(this.minDecMsg ,'',{
        duration : 3000,
        verticalPosition : 'bottom',
      })
    }else{
      product.qunt -= 1;
    }
  }

  addToBag(product : Product){
    this.BagServ.addToBag({...product});
    console.log({...product});
    product.qunt = 1
  }
}
