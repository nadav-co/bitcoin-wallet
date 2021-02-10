import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'market-price-chart',
  templateUrl: './market-price-chart.component.html',
  styleUrls: ['./market-price-chart.component.scss']
})
export class MarketPriceChartComponent implements OnInit {
  @Input() data
  options: any;

  constructor() {
    this.options = {
      autoSize: true,
      series: [
        {
          data: null,
          xKey: 'time',
          yKey: 'USD',
          xName: 'date',
          yName: 'rate(USD)',
          stroke: '#03a9f4',
          marker: {
            size:0,
            fill: '#02a9f4',
            stroke: '#02a9f4'
          },
          tooltip: {
            renderer: function (params) {
              return {
                title: new Date(params.xValue).toLocaleDateString(),
                content: '$' + params.yValue,
              }
            },
          },
        },
      ],
      axes: [
        {
          type: 'time',
          position: 'bottom',
          tick: { count: 5 },
        },
        {
          type: 'number',
          position: 'left',
          label: {
            formatter: function (params) {
              return `$${params.value}k`;
            },
          },
        },
      ],
      legend: { position: 'top' },
    };
  }

  ngOnInit(): void {
  }
  
  ngAfterViewChecked(){
    if (this.options.series[0].data) return
    this.update()
    
  }	

  update() {
    const options = cloneDeep(this.options);
    options.series[0].data = this.getData();
    this.options = options;
  };

  getData(){
    if (!this.data) return 
    const dataToShow = this.data.values.map(pos => ({time: pos.x*1000, USD: pos.y/1000 }))
    return dataToShow
  }
}
