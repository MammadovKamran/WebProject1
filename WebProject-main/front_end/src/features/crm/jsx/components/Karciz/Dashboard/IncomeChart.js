import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class IncomeChart extends Component {
   render() {
      const data = {
			defaultFontFamily: 'Poppins',
			labels: [ 'Yan',
			'Fev',
			'Mar',
			'Apr',
			'May',
			'İyun',
			'İyul'],
			datasets: [
				{
					label: "My First dataset",
					data: [],
					borderColor: 'rgba(19, 180, 151, 1)',
					borderWidth: "2",
					backgroundColor: 'transparent', 
					pointBackgroundColor: 'rgba(54, 201, 95, 0.5)'
				}, {
					label: "My First dataset",
					data: [],
					borderColor: 'rgba(217, 183, 95, 1)',
					borderWidth: "2",
					backgroundColor: 'transparent', 
					pointBackgroundColor: 'rgba(254, 176, 25, 1)'
				}
			]
      };
		const options = {
			title: {
				display: !1
			},
			tooltips: {
				intersect: !1,
				mode: "nearest",
				xPadding: 10,
				yPadding: 10,
				caretPadding: 10
			},
			
			legend: {
				display: !1
			},
			responsive: !0,
			maintainAspectRatio: !1,
			hover: {
				mode: "index"
			},
			scales: {
				xAxes: [{
					display: !1,
					gridLines: !1,
					scaleLabel: {
						display: !0,
						labelString: "Month"
					}
				}],
				yAxes: [{
					display: !1,
					gridLines: !1,
					scaleLabel: {
						display: !0,
						labelString: "Value"
					},
					ticks: {
						beginAtZero: !0
					}
				}]
			},
			elements: {
				point: {
					radius: 0,
					borderWidth: 0
				}
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 5,
					bottom: 0
				}
			}
		};

      return (
         <>
            <Line data={data} height={60} options={options} />
         </>
      );
   }
}

export default IncomeChart;
