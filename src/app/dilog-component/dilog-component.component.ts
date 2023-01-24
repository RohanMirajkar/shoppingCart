import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-dilog-component',
  templateUrl: './dilog-component.component.html',
  styleUrls: ['./dilog-component.component.css']
})
export class DilogComponentComponent implements OnInit {
  myForm !: FormGroup ;
  srcResult: any;
  
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      productName : new FormControl('' ,[Validators.required ]),
      productImage : new FormControl('',[Validators.required , RxwebValidators.extension({extensions:["jpeg","gif","png"]})]),
      productPrice : new FormControl('',[Validators.required]),
    })
  }
  
  submit(){
    console.log(this.myForm.value)
  }

}
