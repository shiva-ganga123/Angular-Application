import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
[x: string]: any;
title = "This is a paragraph."
  sendit(inputValue: any){
    console.log(inputValue);
  }
  constructor(){}
  ngOnInit(): void {
      
  }

}
