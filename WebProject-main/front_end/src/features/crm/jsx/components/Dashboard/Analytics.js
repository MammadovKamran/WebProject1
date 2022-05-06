import React, { Fragment } from "react";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Link } from "react-router-dom";
import TrendingData from "./../Karciz/Analytics/TrendingData";
import HomeTabChart from "./../Karciz/Dashboard/HomeTabChart";
import {
  DropdownBlogYear,
  DropdownBlogYear2,
  DropdownBlogYear3,
} from "./../Karciz/Dropdown/DropdownBlog";

const PieChart = loadable(() =>
  pMinDelay(import("./../Karciz/Analytics/PieChart"), 1000)
);
const SalesChart = loadable(() =>
  pMinDelay(import("./../Karciz/Dashboard/SalesChart"), 1000)
);
const IncomeChart = loadable(() =>
  pMinDelay(import("./../Karciz/Dashboard/IncomeChart"), 1000)
);
const Doughnutchart = loadable(() =>
  pMinDelay(import("./../Karciz/Dashboard/Doughnutchart"), 1000)
);
const SellingApexChart = loadable(() =>
  pMinDelay(import("./../Karciz/EventPage/SellingApexChart"), 1000)
);
const ComparisonApexChart = loadable(() =>
  pMinDelay(import("./../Karciz/Analytics/ComparisonApexChart"), 1000)
);

const Analytics = () => {
  return (
    <>
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">
            <Link to={"#"}>İdarə paneli</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"#"}>Analitika</Link>
          </li>
        </ol>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="fs-20 mb-0">Ən çox satılan</h4>
                  <DropdownBlogYear />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center bg-dark p-3 rounded">
                    <span className="text-white fs-14">{new Date().toISOString()}</span>
                    <span className="text-white fs-14">0</span>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="selling-pie-chart">
                        <PieChart />
                      </div>
                      <div className="chart-point mt-4 text-center">
                        <div className="fs-13 col px-0">
                          <span className="a mx-auto"></span>
                          Servis A
                        </div>
                        <div className="fs-13 col px-0">
                          <span className="b mx-auto"></span>
                          Servis B
                        </div>
                        <div className="fs-13 col px-0">
                          <span className="c mx-auto"></span>
                          Servis C
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div id="lineChart">
                        <SellingApexChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header align-items-start pb-0 border-0">
                  <div>
                    <h4 className="fs-16 mb-0">0 dəfə</h4>
                    <span className="fs-12">Servis göstərilib</span>
                  </div>
                  <DropdownBlogYear />
                </div>
                <div className="card-body">
                  <div className="progress" style={{ height: "9px" }}>
                    <div
                      className="progress-bar bg-primary progress-animated"
                      style={{ width: "80%", height: "9px" }}
                      role="progressbar"
                    >
                      <span className="sr-only">0 Tamamlanıb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card overflow-hidden">
                <div className="card-header align-items-start pb-0 border-0">
                  <div>
                    <h4 className="fs-16 mb-0">0</h4>
                    <span className="fs-12">Satış</span>
                  </div>
                  <DropdownBlogYear />
                </div>
                <div className="card-body p-0">
                  <SalesChart />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header align-items-start pb-0 border-0">
                  <div>
                    <h4 className="fs-16 mb-0">Azn 0</h4>
                    <span className="fs-12">Gəlir</span>
                  </div>
                  <DropdownBlogYear />
                </div>
                <div className="card-body p-0">
                  <IncomeChart />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header align-items-start pb-0 border-0">
                  <DropdownBlogYear2 />
                </div>
                <div className="card-body pt-1">
                  <div className="index-chart-point">
                    <div className="check-point-area">
                      <Doughnutchart />
                    </div>
                    <ul className="index-chart-point-list">
                      <li>
                        <i className="fa fa-stop text-danger"></i>Servis A
                      </li>
                      <li>
                        <i className="fa fa-stop text-success"></i> Servis B
                      </li>
                      <li>
                        <i className="fa fa-stop text-warning"></i> Servis C
                      </li>
                      <li>
                        <i className="fa fa-stop text-info"></i> Servis D
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card overflow-hidden">
                <div className="card-header border-0 pb-0">
                  <h4 className="card-title mb-1">Trend servislərimiz</h4>
                  <DropdownBlogYear3 />
                </div>
                <div className="card-body pt-0 ">
                  {/* <TrendingData /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-12">
              <div className="card sales-comparison">
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center">
                    <div className="mr-auto">
                      <h4 className="fs-20 text-white mb-0">
Satışların müqayisəsi                      </h4>
                      <span className="text-white fs-20 font-w100">
					  Keçən gündən                      </span>
                    </div>
                    <span className="fs-40 text-white font-w600 mr-2">0%</span>
                    <svg
                      width="27"
                      height="13"
                      viewBox="0 0 27 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.002 13L13.002 1.55023e-07L0.00195312 13"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div id="line-chart-2">
                    <ComparisonApexChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <HomeTabChart />
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body row d-sm-flex d-block align-items-center">
                  <div className="media col-sm-5 mb-2 mb-sm-0  align-items-center">
                    <svg
                      className="mr-4 min-w50"
                      width="50"
                      height="53"
                      viewBox="0 0 50 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="7.11688"
                        height="52.1905"
                        rx="3"
                        transform="matrix(-1 0 0 1 49.8203 0)"
                        fill="white"
                      />
                      <rect
                        width="7.11688"
                        height="37.9567"
                        rx="3"
                        transform="matrix(-1 0 0 1 35.5869 14.2338)"
                        fill="white"
                      />
                      <rect
                        width="7.11688"
                        height="16.6061"
                        rx="3"
                        transform="matrix(-1 0 0 1 21.3535 35.5844)"
                        fill="white"
                      />
                      <rect
                        width="8.0293"
                        height="32.1172"
                        rx="3"
                        transform="matrix(-1 0 0 1 8.03125 20.0732)"
                        fill="white"
                      />
                    </svg>
                    <div className="media-body">
                      <p className="text-white mb-2 font-w300">Gəlir</p>
                      <span className="fs-26 text-white">Azn 0</span>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    {/* <p className="fs-12 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body row d-sm-flex d-block align-items-center">
                  <div className="media col-sm-5 align-items-center mb-2 mb-sm-0">
                    <svg
                      className="mr-4 min-w50"
                      width="50"
                      height="31"
                      viewBox="0 0 52 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M49.8247 0.840214C51.2516 2.08096 51.4025 4.24349 50.1617 5.67035L35.1805 22.8987C32.7859 25.6525 28.6524 26.0444 25.7829 23.7898L18.6777 18.2072L6.27218 29.883C4.89525 31.1789 2.72847 31.1133 1.43253 29.7363C0.136595 28.3594 0.202256 26.1926 1.57919 24.8967L13.9847 13.2209C16.4514 10.8993 20.2447 10.7301 22.9082 12.8229L30.0134 18.4055L44.9946 1.1772C46.2353 -0.249661 48.3979 -0.400534 49.8247 0.840214Z"
                        fill="white"
                      />
                    </svg>
                    <div className="media-body">
                      <p className="text-white mb-2 font-w300">Müştəri</p>
                      <span className="fs-26 text-white">0</span>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    {/* <p className="fs-12 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body row d-sm-flex d-block align-items-center">
                  <div className="media col-sm-5 align-items-center mb-2 mb-sm-0">
                    <svg
                      className="mr-4 min-w50"
                      width="50"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.502 43C34.8908 43 42.502 35.3888 42.502 26C42.502 16.6112 34.8908 9 25.502 9C16.1131 9 8.50195 16.6112 8.50195 26C8.50195 35.3888 16.1131 43 25.502 43ZM25.502 51.5C39.5852 51.5 51.002 40.0833 51.002 26C51.002 11.9167 39.5852 0.5 25.502 0.5C11.4187 0.5 0.00195312 11.9167 0.00195312 26C0.00195312 40.0833 11.4187 51.5 25.502 51.5Z"
                        fill="white"
                        fillOpacity="0.18"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M34.0016 1.95836C31.2828 0.997147 28.4092 0.5 25.5016 0.5V8.86605C28.5707 8.86605 31.5834 9.6904 34.225 11.253C36.8665 12.8155 39.0398 15.0589 40.5178 17.7486C41.9958 20.4384 42.7243 23.4757 42.6269 26.5433C42.5296 29.6108 41.6102 32.5959 39.9646 35.1866C38.3191 37.7772 36.008 39.8783 33.2727 41.2703C30.5374 42.6623 27.4785 43.294 24.4156 43.0995C21.3527 42.905 18.3983 41.8913 15.8611 40.1645C13.3239 38.4376 11.2971 36.061 9.99257 33.283L2.41992 36.8391C3.65583 39.4709 5.3273 41.8607 7.35301 43.9131C8.50954 45.0848 9.78153 46.1466 11.1539 47.0806C14.9299 49.6506 19.3269 51.1592 23.8853 51.4487C28.4438 51.7382 32.9963 50.798 37.0671 48.7264C41.1379 46.6548 44.5776 43.5277 47.0266 39.6721C49.4755 35.8165 50.844 31.3739 50.9888 26.8085C51.1336 22.2432 50.0495 17.7228 47.8499 13.7197C45.6502 9.71663 42.4157 6.37787 38.4843 4.05236C37.0556 3.2072 35.5538 2.50715 34.0016 1.95836Z"
                        fill="white"
                      />
                    </svg>
                    <div className="media-body">
                      <p className="text-white mb-2 font-w300">
                        Keçən ildən
                      </p>
                      <span className="fs-26 text-white">0%</span>
                      <svg
                        className="ml-2"
                        width="30"
                        height="15"
                        viewBox="0 0 30 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.00195312 15L14.502 -1.27353e-06L29.002 15"
                          fill="#13B497"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    {/* <p className="fs-12 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Analytics;
