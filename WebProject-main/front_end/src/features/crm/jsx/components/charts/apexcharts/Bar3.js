import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexBar3 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Income",
               data: [],
            },
            {
               name: "Expenses",
               data: [],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 350,
               toolbar: {
                  show: false,
               },
            },
            plotOptions: {
               bar: {
                  horizontal: false,
                  columnWidth: "55%",
                  endingShape: "rounded",
               },
            },
            dataLabels: {
               enabled: false,
            },

            legend: {
               show: true,
               fontSize: "12px",
               fontWeight: 300,

               labels: {
                  colors: "#b3b3b3",
               },
               position: "bottom",
               horizontalAlign: "center",
               markers: {
                  width: 19,
                  height: 19,
                  strokeWidth: 0,
                  radius: 19,
                  strokeColor: "#fff",
                  fillColors: ["#13b497", "#ff7a00"],
                  offsetX: 0,
                  offsetY: 0,
               },
            },
            yaxis: {
               labels: {
                  style: {
                    colors: "#b3b3b3",
                  },
               },
            },
            stroke: {
               show: true,
               width: 2,
               colors: ["transparent"],
			   
            },
            xaxis: {
               categories: ["06", "07", "08", "09", "10"],
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

            },
			grid:{
				yaxis:{
					lines: {
						show: false
					},
				},
			},
            fill: {
               colors: ["#13b497", "#ff7a00"],
               opacity: 1,
            },
            tooltip: {
               y: {
                  formatter: function (val) {
                     return "$ " + val + " thousands";
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

export default ApexBar3;
