import { Subject } from "rxjs";
import { Product } from "../models/product.model";

export class BagService{
    private bag : any[] = [];
    public mySubject = new Subject<any>()
    constructor(){}

    addToBag(product : Product){
        let id = product.Id;
           let index = this.bag.findIndex(res => res.Id === id)
        if(index === -1){
            this.bag.push(product);
            this.mySubject.next(this.bag.slice(0));
            console.log(this.bag)
        }else{
           this.bag[index].qunt = product.qunt;
           this.mySubject.next(this.bag.slice(0));
           console.log(this.bag)
        }
    }
}