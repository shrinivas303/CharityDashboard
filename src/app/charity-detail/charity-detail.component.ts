import { Component } from '@angular/core';
import { DashboradDetail, DonorElement, ExpenseElement } from '../charityModel/charitymodel'
import { CharitydetailServiceService } from '../charitydetail-service.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-charity-detail',
  templateUrl: './charity-detail.component.html',
  styleUrls: ['./charity-detail.component.css']
})
export class CharityDetailComponent {
  donorlist: DonorElement[];
  expenselist: ExpenseElement[];
  donordisplaycolumns: string[] = ['date', 'name', 'amount'];
  donordataSource = new MatTableDataSource<DonorElement>(this.donorlist);
  expensedisplaycolumns: string[] = ['date', 'expense', 'details'];
  expensedataSource = new MatTableDataSource<ExpenseElement>(this.expenselist);

  TotalRecived: number;
  NoOfContribution: number;
  AvgPerPerson: number;
  TotalFood: number;
  TotalLiquid: number;
  TotalDrive: number;
  RationKits:number;

  constructor(private serv: CharitydetailServiceService) {
  }

  ngOnInit() {
    this.getdonorlist();
    this.getexpenselist();
    this.getdashboarddetail();
  }
  public getdonorlist() {
    let resp = this.serv.getdonorlist();
    resp.subscribe(d => this.donordataSource.data = (d as DonorElement[]).filter(value => Object.keys(value).length !== 0))
  }
  public getexpenselist() {
    let resp = this.serv.getexpenselist();
    resp.subscribe(d => this.expensedataSource.data = (d as ExpenseElement[]).filter(value => Object.keys(value).length !== 0))
  }
  public getdashboarddetail() {
    let resp = this.serv.getdashboardDetail();
    resp.subscribe((data: DashboradDetail) => {
      this.TotalDrive = data.TotalDrive,
        this.TotalFood = data.TotalFood,
        this.TotalLiquid = data.TotalLiquid,
        this.TotalRecived = data.TotalRecived,
        this.NoOfContribution = data.NoOfContribution,
        this.AvgPerPerson = data.AvgPerPerson,
        this.RationKits=data.RationkitsGiven
    })
  }

}
