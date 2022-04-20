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
        yaxis:{
          min: 0,
          max: 5,
          forceNiceScale: true,
          decimalsInFloat: 2,
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#1e8f53'],
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val.toFixed(1)
          }
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
      
       series: [],

      responsive: [{
        breakpoint: undefined,
        options: {},
    }]

    };

  }
  async componentDidMount(){
    const dateIndice=[];
    for (const obj of this.props.user.rateData)
    {
      dateIndice.push({x: new Date(obj[0]).getTime(), y:parseFloat(obj[1])})
    }
    this.setState({
      series:[{
        name:"Indice de confiance",
        data:dateIndice,
      }]
    })

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