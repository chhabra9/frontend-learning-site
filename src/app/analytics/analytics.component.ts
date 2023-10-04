import { AnalyticsService } from './../services/analytics/analytics.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Observable } from 'rxjs';
import { StudentInfo } from '../models/studentInfo.interface';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent  implements OnInit{
  salesPerMonth$!:Observable<any[]>;
  allStudent$!:Observable<StudentInfo[]>;
  salesByCourse$!:Observable<any[]>;
   public chart: any;
  constructor(private analyticsService:AnalyticsService){}
ngOnInit(): void {
  this.getSellByMonth();
  this.getStudent();
  this.salesByCourse();
}
getSellByMonth(){
  this.salesPerMonth$ =this.analyticsService.getSaleByMonth()
}
  getStudent(){
    this.allStudent$ = this.analyticsService.getAllStudent();
  }
  salesByCourse(){
    this.salesByCourse$ = this.analyticsService.getSalesByCourse();
  }
}
