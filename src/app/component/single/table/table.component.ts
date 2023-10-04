import { DataSource } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { StudentInfo } from 'src/app/models/studentInfo.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() studentInfo!:StudentInfo[];
  dataSource!:StudentInfo[];
  displayedColumns: string[] = ['Name', 'email','course', 'purchase_date', 'purchase_rate'];
  ngOnInit(){
    this.dataSource = this.studentInfo;
    console.log(this.dataSource)
  }
}
