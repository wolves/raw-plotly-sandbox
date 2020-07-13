import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { lineData, barData } from './data';
// import Plotly from 'plotly.js-dist';
declare var Plotly: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('LineChart') LineChart: ElementRef;
  @ViewChild('BarChart') BarChart: ElementRef;
  private lineData: object[] = lineData;
  private barData: object[] = barData;
  private lineLayout: object = {
    autoexpand: 'true',
    autosize: 'true',
    width: window.innerWidth - 100,
    margin: {
      autoexpand: 'true',
      margin: 0,
    },
    offset: 0,
    type: 'scattergl',
    title: 'Line Chart w/ Connected Gaps (displayModeBar: false)',
    hovermode: 'closest',
    xaxis: {
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      title: 'Time (s)',
      automargin: true,
    },
    yaxis: {
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true,
      title: 'Any other Unit',
      tick0: 0,
      dtick: 3,
    },
  };

  private barLayout: object = {
    layout: {
      title: 'Grouped Bar Chart',
      xaxis: {
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)',
        },
      },
      yaxis: {
        title: 'Value (millions)',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)',
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)',
        },
      },
      legend: {
        x: 0,
        y: 5.0,
        bgcolor: 'rgba(255, 255, 255, 0)',
        bordercolor: 'rgba(255, 255, 255, 0)',
      },
      barmode: 'group',
      bargap: 0.15,
      bargroupgap: 0.1,
    },
  };

  private config: object = {
    displayModeBar: false,
    responsive: true,
    scrollZoom: false,
  };

  ngAfterViewInit() {
    this.initLineGraph();
    this.initBarGraph();
  }

  initLineGraph() {
    this.LineChart = Plotly.newPlot(
      this.LineChart.nativeElement,
      this.lineData,
      this.lineLayout,
      this.config
    );
  }

  initBarGraph() {
    this.BarChart = Plotly.newPlot(
      this.BarChart.nativeElement,
      this.barData,
      this.barLayout,
      this.config
    );
  }
}
