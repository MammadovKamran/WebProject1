import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine5 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Recovered Patient",
               data: [
                  500,
                  230,
                  600,
                  360,
                  700,
                  890,
                  750,
                  420,
                  600,
                  300,
                  420,
                  220,
               ],
            },
            {
               name: "New Patient",
               data: [
                  250,
                  380,
                  200,
                  300,
                  200,
                  520,
                  380,
                  770,
                  250,
                  520,
                  300,
                  900,
               ],
            },
         ],
         options: {
            chart: {
               height: 350,
               type: "area",
               group: "social",
               toolbar: {
                  show: false,
               },
               zoom: {
                  enabled: false,
               },
            },
            dataLabels: {
               enabled: false,
            },
            stroke: {
               width: [2, 2],
               colors: ["#1eaae7", "#13b497"],
               curve: "straight",
            },
            legend: {
               tooltipHoverFormatter: function (val, opts) {
                  return (
                     val +
                     " - " +
                     opts.w.globals.series[opts.seriesIndex][
                        opts.dataPointIndex
                     ] +
                     ""
                  );
               },
               markers: {
                  fillColors: ["#1eaae7", "#13b497"],
                  width: 19,
                  height: 19,
                  strokeWidth: 0,
                  radius: 19,
               },
               labels: {
                  colors: "#b3b3b3",
               },
            },
            markers: {
               size: 6,
               border: 0,
               colors: ["#1eaae7", "#13b497"],
               hover: {
                  size: 6,
               },
            },
            xaxis: {
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
               categories: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                  "10 Jan",
                  "11 Jan",
                  "12 Jan",
               ],
            },
            yaxis: {
               labels: {
                  style: {
                     colors: "#b3b3b3",
                    
                  },
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
               colors: ["#1eaae7", "#13b497"],
               type: "solid",
               opacity: 0.07,
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
               type="area"
               height={350}
            />
         </div>
      );
   }
}

export default ApexLine5;
