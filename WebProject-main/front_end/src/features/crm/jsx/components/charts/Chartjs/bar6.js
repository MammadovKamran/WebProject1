import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
            label: "Lime",
			backgroundColor: "rgb(19,180,151,1)",
			hoverBackgroundColor: "rgba(19, 180, 151, 1)",
			data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
			label: "Green",
			backgroundColor: "rgba(30,170,231, 1)",
			hoverBackgroundColor: "rgba(30, 170, 231, 1)",
			data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
			label: "Aqua",
			backgroundColor: "rgba(139, 199, 64, 1)",
			hoverBackgroundColor: "rgba(139, 199, 64, 1)",
			data: ["12", "12", "12", "12", "12", "12", "12"],
        },
      ],
    };
    const options = {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    };

    return (
      <>
        <Bar data={data} height={150} options={options} />
      </>
    );
  }
}

export default BarChart6;
