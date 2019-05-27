import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  constructor(private service: ApicallService) { }

  ngOnInit() {
    this.listOrder();
  }


  orderList: any = [];

  listOrder() {
    this.service.getCall('/query/orders.json').subscribe((result) => {
      console.log('result--->', result);
      this.orderList = Array.from(result['Results']);
    })
  }


}
