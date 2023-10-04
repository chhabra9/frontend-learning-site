
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{
  @Input()data!:any[];
   labels!:any[];
   dataVal!:any[]
  public chart: any;
  ngOnInit(): void {
    this.labels = this.data.map(val=>val.month);
    this.dataVal = this.data.map(val=>val.total_sales);
    this.createChart();
  }
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line',

      data: {
        labels: this.labels,
         datasets: [
          {
            label: "Sales",
            data: this.dataVal,
            backgroundColor: 'blue',
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        aspectRatio:2
      }

    });
  }
}
