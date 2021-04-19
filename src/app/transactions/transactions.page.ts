import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  public items1=[
    {  img: 'assets/SVG/BTC.svg' },
    {  img: 'assets/SVG/BAT.svg' },
    {  img: 'assets/SVG/CNX.svg' },
    {  img: 'assets/SVG/DASH.svg' },
    {  img: 'assets/SVG/DGD.svg' },
    {  img: 'assets/SVG/EDGE.svg' },
    {  img: 'assets/SVG/AE.svg' },
  ];
  public items = [];
  constructor() {
     //loop for iteration on items with animation after 0.25 sec
     for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.items.push(this.items1[i]);
      }, 250 * i);
    }
  }

  ngOnInit() {
  }

}
