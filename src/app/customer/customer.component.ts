import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public showAlert: boolean;
  public age: number;
  public customerName: string;
  public address: string;

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }

  public addUser(customerForm: NgForm): void {
    let customer = {
      customerName: this.customerName,
      customerAge: this.age,
      customerAddress: this.address
    }
    this.httpService.addCutomer(customer).subscribe(data => {
      customerForm.reset();
      customerForm.resetForm();
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    });
  }

  public goToDashBoard(): void {
    this.router.navigateByUrl("/dashboard");
  }

  public isNumber(evt): boolean {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
}
