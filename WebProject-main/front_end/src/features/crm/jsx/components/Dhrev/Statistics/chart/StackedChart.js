import React from 'react'
import ReactApexChart from 'react-apexcharts'

class StackedChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: 'Aplication Sent',
          data: [20],
        },
        {
          name: 'Appllication Answered',
          data: [30],
        },
        {
          name: 'Hired',
          data: [15],
        },
        {
          name: 'Pending',
          data: [25],
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: 90,
          stacked: true,
          toolbar: {
            show: false,
          },
          stackType: '100%',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            endingShape: 'rounded',
            startingShape: 'rounded',
          },
        },
        grid: {
          show: false,
        },
        stroke: {
          width: 0,
          colors: ['#fff'],
        },
        colors: ['#2BC155', '#FF9B52', '#3F9AE0', '#C4C4C4'],
        dataLabels: {
          enabled: false,
        },

        xaxis: {
          show: false,
          lines: {
            show: false,
          },
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return val + 'K'
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
        },
      },
    }
  }

  render() {
    return (
      <div id='stackedChart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          height={90}
        />
      </div>
    )
  }
}

export default StackedChart
