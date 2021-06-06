import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {DashboradDetail, DonorElement,ExpenseElement} from './charityModel/charitymodel'

@Injectable({
  providedIn: 'root'
})
export class CharitydetailServiceService {

  constructor(private http: HttpClient) { }

  getdonorlist() {
    let url = 'https://charitynodeapi.azurewebsites.net/Donners';
    return this.http.get<DonorElement[]>(url);
  }
  getexpenselist() {
    let url = 'https://charitynodeapi.azurewebsites.net/Expenses';
    return this.http.get<ExpenseElement[]>(url);
  }
  getdashboardDetail() {
    let url = 'https://charitynodeapi.azurewebsites.net/DashboardData';
    return this.http.get<DashboradDetail>(url);
  }

}
