import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

}
