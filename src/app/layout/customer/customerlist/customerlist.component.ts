import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  constructor(private service: ApicallService) { }

  ngOnInit() {
    this.listCustomer();
  }


  customerList: any = [];

  listCustomer() {
    this.service.getCall('/query/customers.json').subscribe((result) => {
      console.log('customerList--->', result);
      this.customerList = Array.from(result['Results']);
    })
  }

}
