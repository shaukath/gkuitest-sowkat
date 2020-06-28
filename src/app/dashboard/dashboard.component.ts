import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public logout(): void {
    this.httpService.logOut().subscribe(data => {

    });
  }

}
