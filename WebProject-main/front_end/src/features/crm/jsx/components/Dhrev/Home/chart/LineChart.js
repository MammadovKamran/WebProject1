import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
         name: 'series1',
          data: [31, 40, 28, 51, 42, 60, 40]
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 70, 41]
        }
      ],
      options: {
        chart: {
          height: 300,
		  toolbar:{
			show:false
		  },
          type: 'area'
        },
        colors:['#2BC155','#3F9AE0'],
		legend:{
			show:false
		},
        dataLabels: {
          enabled: false
        },

        stroke: {
			width:4,
          curve: 'smooth'
        },

        xaxis: {
          
          show: false,
          lines: {
				show: false,
			},
            labels: {
				show: false,
			},
            axisBorder: {
			  show: false,
			},
        },
        fill:{
			opacity:0.05,
			type:'solid'
		},
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },  
     
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={300}
        />
      </div>
    );
  }
}

export default ApexLine3;
