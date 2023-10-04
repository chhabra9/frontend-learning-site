import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() data!:any[];
   labels!:any[];
   dataVal!:any[]
  public chart: any;
  ngOnInit(): void {
    this.dataVal = this.data.map(val=>val.total_sales);
    this.labels = this.data.map(val=>val.title);
    this.createChart();
  }
  createChart(){
    if(this.chart)
      this.chart.destroy();
    this.chart = new Chart("MyChart", {
      type: 'pie',

      data: {
        labels:this.labels,
	       datasets: [{

    data: this.dataVal,
    backgroundColor: [
      'grey',
      'blue',
      'orange',
      'red',
      'pink',
			'yellow',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2
      }

    });
  }
}
