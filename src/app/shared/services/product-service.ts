import { Product } from "../models/product.model";

export class ProductService{
    private Products : Product[] = [
        { Id : 1 , name : 'Iphone14' , price : 100 , img : 'https://img3.gadgetsnow.com/gd/images/products/additional/large/G390874_View_1/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-deep-purple-6-gb-ram-.jpg', qunt : 1},
        { Id : 2 , name : 'Laptop' , price : 200 , img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', qunt : 1},
    ];
    constructor(){}

    addProduct(product : Product){

    }

    getAllProducts(){
        return this.Products.slice()
    }
}