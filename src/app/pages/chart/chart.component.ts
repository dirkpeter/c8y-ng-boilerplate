import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public chart;
  // scatter
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };
  public scatterChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }

  ngOnInit() {
    const ctx = document.getElementById('myChart')[0]
      .getContext('2d');
    this.chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'scatter',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Scatter Dataset',
                borderColor: '#36A2EB',
                data: [
                  {
                    x: -10,
                    y: 0
                  },
                  {
                    x: 0,
                    y: 10
                  },
                  {
                    x: 10,
                    y: 5
                  },
                  {
                    x: 7,
                    y: -5
                  },
                  {
                    x: 8,
                    y: 9
                  },
                  {
                    x: 17,
                    y: 22
                  }
                ]
              },
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgb(255, 99, 132)',
                data: [
                  {
                    x: -10,
                    y: 0
                  },
                  {
                    x: 0,
                    y: 2
                  },
                  {
                    x: 10,
                    y: 8
                  },
                  {
                    x: 15,
                    y: 32
                  },
                  {
                    x: 20,
                    y: 16
                  },
                  {
                    x: 25,
                    y: 8
                  },
                  {
                    x: 30,
                    y: 4
                  }
                ],
                type: 'line'
              }
            ]
        },

        // Configuration options go here
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }]
          }
        }
    });
  }
}
