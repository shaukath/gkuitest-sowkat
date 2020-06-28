import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public login(user?: User): Observable<User> {
    const loginURL: string =  "https://kem.greenkoncepts.com/ems/services/ResourceService/login?"
    return this.httpClient.get(`${loginURL}username=${user.username}&credential=${user.password}`);
  }

  public getOrders(): Observable<any> {
    const ordersURL: string = "http://52.163.55.119:8300/gktest/getAllOrders?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    return this.httpClient.get(ordersURL);
  }

  public addCutomer(customer: any): Observable<any> {
    const customerURL: string = "http://52.163.55.119:8300/gktest/createCustomer?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    return this.httpClient.post(customerURL, customer);
  }

  public logOut(): Observable<any> {
    const logoutURL: string = "https://kem.greenkoncepts.com/ems/services/ResourceService/logout?key=";
    const userDetails = JSON.parse(sessionStorage.getItem("user-details"));
    sessionStorage.removeItem("user-details");
    return this.httpClient.get(`${logoutURL}${userDetails.key}`);
  }

  public getHierarchy(): Observable<any> {
    const hierarchyURL: string = "https://kem.greenkoncepts.com/ems/mvc/node-hierarchy-with-metadata?key=";
    const userDetails = JSON.parse(sessionStorage.getItem("user-details"));
    return this.httpClient.get(`${hierarchyURL}${userDetails.key}`);
  }


}
