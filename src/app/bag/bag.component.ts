import { Component, OnInit } from '@angular/core';
import { BagService } from '../shared/services/bag-service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
  
})
export class BagComponent implements OnInit {
  transactions: any[] = [
  ];
  displayedColumns: string[] =  ['item','rate','quentity', 'cost'];
  constructor( private bagServ : BagService) { }

  ngOnInit(): void {
    this.bagServ.mySubject.subscribe((data)=>{
      this.transactions = data;
      console.log(data)
    });
  }
  getTotalCost() {
    return this.transactions.map(t => t.price * t.qunt).reduce((acc, value) => acc + value, 0);
  }
}
