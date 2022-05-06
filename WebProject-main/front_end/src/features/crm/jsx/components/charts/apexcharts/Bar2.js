import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexBar2 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Cycling",
               data: [],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 230,
               toolbar: {
                  show: false,
               },
            },
            plotOptions: {
               bar: {
                  horizontal: false,
                  dataLabels: {
                     position: "top",
                  },
               },
            },
            colors: ["#13b497"],
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
               
            },
            dataLabels: {
               enabled: false,
               offsetX: -6,
               style: {
                  fontSize: "12px",
                  // colors: ["#fff"],
               },
            },
            stroke: {
               show: false,
            },
            yaxis: {
				
                lines: {
                    show: false,
                },
                labels: {
                    style: {
                         colors: "#b3b3b3",                         
                    },
                },
            },
            xaxis: {
               show: false,
               labels: {
                    style: {
                        colors: "#b3b3b3",
                    },
                },
				axisBorder: {
				  show: false,
				},
				axisTicks: {
					show: false,
				},
               categories: [2, 4, 6, 8, 10, 12, 14],
			   
            },
			grid:{
				yaxis:{
					lines: {
						show: false
					},
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
               type="bar"
               height={350}
            />
         </div>
      );
   }
}
export default ApexBar2;
