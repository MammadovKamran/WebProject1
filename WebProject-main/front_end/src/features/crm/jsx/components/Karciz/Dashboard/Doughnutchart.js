import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Doughnutchart extends Component {
   render() {
      const data = {
			defaultFontFamily: 'Poppins',
			weight: 5,
			datasets: [{
				data: [],
				borderWidth: 5, 
				borderColor: "rgba(47,54,61,1)",
				backgroundColor: [
					"rgba(175, 54, 54, 1)",
					"rgba(60, 101, 245, 1)",
					"rgba(27, 211, 68, 1)",
					"rgba(255, 247, 66, 1)"
				],
				hoverBackgroundColor: [
					"rgba(175, 54, 54, 0.5)",
					"rgba(60, 101, 245, 0.5)",
					"rgba(27, 211, 68, 0.5)",
					"rgba(255, 247, 66, 0.5)"
				]

			}],
      };
		const options = {
			weight: 1,	
			cutoutPercentage: 60,
			responsive: true,
			maintainAspectRatio: false
		};

      return (
         <>
            <Doughnut data={data} height={60} options={options} />
         </>
      );
   }
}

export default Doughnutchart;
