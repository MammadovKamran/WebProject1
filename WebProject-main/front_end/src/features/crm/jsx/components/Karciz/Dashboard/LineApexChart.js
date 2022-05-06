import React from "react";
import ReactApexChart from "react-apexcharts";

class LineApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
			name: "New Clients",
			data: []
        }],
      options: {
        chart: {
          height: 370,
          type: "bar",
          toolbar: {
            show: false,
			},
        },
		plotOptions: {
			bar: {
				borderRadius: 6,	
				columnWidth: '25%',				
				//startingShape: "rounded",
				
				colors: {
					backgroundBarColors: ['#3B444D', '#3B444D', '#3B444D', '#3B444D','#3B444D','#3B444D','#3B444D','#3B444D'],
					backgroundBarOpacity: 1,
					backgroundBarRadius: 5,
				},
				distributed: true

			},
		},
        colors:['#13B497'],
        legend: {
			show: false
		},
		fill: {
          opacity: 1,
        },
        dataLabels: {
			enabled: false,
			colors: ['#000'],
			dropShadow: {
			  enabled: true,
			  top: 1,
			  left: 1,
			  blur: 1,
			  opacity: 1
			}
		},
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent'],
		 
        },
        grid:{
			borderColor: '#eee',
		},
        
        xaxis: {
			categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			labels: {
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontFamily: 'poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-xaxis-label',
				},
			},
			crosshairs: {
				show: false,
			},
			axisBorder: {
			  show: false,
			},
		},
		yaxis: {
			show: false
		},
		tooltip: {
			x: {
				show: true
			}
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
				  type="bar"
				  height={350}
				/>
			</div>
		);
	}
}

export default LineApexChart;
