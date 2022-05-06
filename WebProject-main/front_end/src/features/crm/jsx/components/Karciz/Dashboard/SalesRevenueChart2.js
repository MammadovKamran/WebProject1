import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SalesRevenueChart2 extends Component {
   render() {
      const data = {
			defaultFontFamily: "Poppins",
			labels: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul"],


			datasets: [
				{
					label: "My Second dataset",
					data: [],
					borderColor: 'rgba(19, 180, 151, 1)',
					borderWidth: "2",
					backgroundColor: 'transparent',
					pointBackgroundColor: 'transparent',
					pointBorderColor:'transparent',
					pointHoverBackgroundColor:'rgba(19,180,151,1)',
					pointBorderWidth:30,
					pointHoverRadius: 10,
				}
			]
      };
      const options = {
			legend: false, 
			scales: {
				yAxes: [{
					color: "rgba(255, 255, 255,1)",
					ticks: {
						beginAtZero: true, 
						max: 100, 
						min: 0, 
						stepSize: 20, 
						padding: 10								
					},
					gridLines: {
						color: "rgba(255, 255, 255,0.05)",
						drawBorder: true
					}
				}],
				xAxes: [{
					ticks: {
						padding: 5
					},
					gridLines: {
						color: "rgba(255, 255, 255,0.05)",
						drawBorder: true
					}
				}]
			}
      };

      return (
         <>
            <Line data={data} height={100} options={options} />
         </>
      );
   }
}

export default SalesRevenueChart2;
