import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Running",
          data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110, 60],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          width: [4],
          colors: ["#13b497"],
          curve: "straight",
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
          type: "text",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        colors: ["#1eaae7"],
        markers: {
          size: [6],
          strokeWidth: [4],
          strokeColors: ["#13b497"],
          border: 0,
          colors: ["#fff"],
          hover: {
            size: 10,
          },
        },
        yaxis: {
            labels: {
                    style: {
                         colors: "#b3b3b3",
                    },
                },
          title: {
            text: "",
          },
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
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default ApexLine3;
