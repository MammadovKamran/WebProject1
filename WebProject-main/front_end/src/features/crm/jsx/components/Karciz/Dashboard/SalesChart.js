import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SalesChart extends Component {
   render() {
      const data = {
         
			labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May"],

			datasets: [{
				label: "Sales Stats",
				backgroundColor: ['rgba(19, 180, 151, 0.1)'],
				borderColor: '#13B497',
				pointBackgroundColor: '#13B497',
				pointBorderColor: '#13B497',
				borderWidth:4,
				borderRadius:10,
				pointHoverBackgroundColor: '#13B497',
				pointHoverBorderColor: '#13B497',
				data: []
			}]
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

export default SalesChart;
