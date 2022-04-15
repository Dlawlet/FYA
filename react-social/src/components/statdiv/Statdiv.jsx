import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./statdiv.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          
        },
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        xaxis: {
          type: 'datetime'
        } ,
        stroke: {
          curve: 'smooth'
        },
        colors: ['#1e8f53'],
        dataLabels: {
          enabled: true
        },
        grid: {
          borderColor: "#555",
          clipMarkers: true,
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        
      },
      
      series: [{
        name: "indice de confiance",
        data: [{
          x: new Date('2022-02-12').getTime(),
          y: 2.5
        }, {
          x: new Date('2022-02-20').getTime(),
          y: 3
        },
        {
          x: new Date('2022-03-4').getTime(),
          y: 3
        },
        {
          x: new Date('2022-03-18').getTime(),
          y: 4
        }]
      }],

      responsive: [{
        breakpoint: undefined,
        options: {},
    }]

    };

  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              
              options={this.state.options}
              series={this.state.series}
              type="area"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;