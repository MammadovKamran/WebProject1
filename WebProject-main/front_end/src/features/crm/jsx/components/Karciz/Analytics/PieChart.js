import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
   render() {
      const data = {
			defaultFontFamily: 'Poppins',
			labels: ["one","two","three", "four"],
			datasets: [
				{
					data: [],
					borderWidth: 0, 
					backgroundColor: [
						"rgba(19, 180, 151, .9)",
						"rgba(19, 180, 151, .7)",
						"rgba(19, 180, 151, .5)",
						"rgba(0,0,0,0.07)"
					],
					hoverBackgroundColor: [
						"rgba(19, 180, 151, .9)",
						"rgba(19, 180, 151, .7)",
						"rgba(19, 180, 151, .5)",
						"rgba(0,0,0,0.07)"
					]
				}
			]
      };
		const options = {
			responsive: true, 
			legend: false, 
			maintainAspectRatio: false
		};

      return (
         <>
            <Pie data={data} height={100} options={options} />
         </>
      );
   }
}

export default PieChart;
