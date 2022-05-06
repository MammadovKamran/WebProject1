import React from "react";
import ReactApexChart from "react-apexcharts";

class RadialBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [73, 64],
      options: {
        chart: {
          type: "radialBar",
          //width:320,
          height: 350,
          offsetY: 0,
          offsetX: 0,
          offsetX: 0,
        },
        plotOptions: {
          radialBar: {
            startAngle: -150,
            endAngle: 200,
            size: undefined,
            inverseOrder: false,
            hollow: {
              margin: 0,
              size: "20%",
              background: "transparent",
            },

            track: {
              show: true,
              background: "#e1e5ff",
              strokeWidth: "10%",
              opacity: 1,
              margin: 18, // margin is in pixels
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
            },
          },
        ],
        fill: {
          opacity: 1,
        },
        stroke: {
          lineCap: "round",
        },
        colors: ["#2BC155", "#FF9B52"],
        labels: ["Following", "Followers"],
        legend: {
          fontSize: "16px",
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div className="network-chart" id="radialBar">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={350}
        />
      </div>
    );
  }
}

export default RadialBar;
