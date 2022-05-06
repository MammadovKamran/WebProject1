import React from "react";
import ReactApexChart from "react-apexcharts";

class ComparisonApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		series: [{
			name: 'Income',
			data: []
		}, 	
		{
			name: 'Expenses',
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
				borderRadius: 8,	
				columnWidth: "55%",
				startingShape: "rounded",
				
				colors: {
					//backgroundBarColors: ['#3B444D', '#3B444D', '#3B444D', '#3B444D','#3B444D','#3B444D','#3B444D','#3B444D'],
					backgroundBarOpacity: 1,
					backgroundBarRadius: 5,
				},

			},
			distributed: true
		},
        colors:['#13B497'],
        legend: {
			show: false,
			fontSize: '12px',
			fontWeight: 300,
			
			labels: {
				colors: 'black',
			},
			position: 'bottom',
			horizontalAlign: 'center', 	
			markers: {
				width: 19,
				height: 19,
				strokeWidth: 0,
				radius: 19,
				strokeColor: '#fff',
				fillColors:['#FFFFFF','#22DBBA'],
				offsetX: 0,
				offsetY: 0
			}
		},
		fill: {
			colors:['#FFFFFF','#22DBBA'],
			opacity: 1,
        },
        dataLabels: {
			enabled: false,
		},
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
		 
        },
        grid:{
			borderColor:'transparent',
		},
        
        xaxis: {
			categories: ['06', '07', '08', '09', '10','11','12','13','14','15'],
			labels: {
				style: {
					colors: '#fff',
					fontSize: '14px',
					fontFamily: 'Poppins',
					fontWeight: 100,
				  
				},
			},
        },
		yaxis: {
			show: false
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands"
				}
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
				  height={250}
				/>
			</div>
		);
	}
}

export default ComparisonApexChart;
