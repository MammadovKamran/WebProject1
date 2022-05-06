import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class RevenueChart extends Component {
   render() {
      const data = {
			defaultFontFamily: 'Poppins',
			labels: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avg", "Sen", "Oct", "No", "Dec","Jan"],
			datasets: [
				{
					label: "My First dataset",
					data: [],
					borderColor: '#13B497',
					borderWidth: "0",
					backgroundColor: ['#13B497','#036C59','#13B497','#036C59','#13B497','#036C59','#13B497','#036C59','#13B497','#036C59','#13B497','#036C59','#13B497','#036C59','#13B497','#036C59','#13B497','#036C59','#13B497','#036C59',], 
					hoverBackgroundColor: '#13B497'
				}
			]
      };
		const options = {
			legend: false,
			responsive: true, 
			maintainAspectRatio: false,  
			scales: {
				yAxes: [{
					display: false, 
					ticks: {
						beginAtZero: true, 
						display: false, 
						max: 100, 
						min: 0, 
						stepSize: 10
					}, 
					gridLines: {
						display: false, 
						drawBorder: false
					}
				}],
				xAxes: [{
					display: false, 
					barPercentage: 0.4, 
					gridLines: {
						display: false, 
						drawBorder: false
					}, 
					ticks: {
						display: false
					}
				}]
			}
		};

      return (
         <>
            <Bar data={data} height={85} options={options} />
         </>
      );
   }
}

export default RevenueChart;
