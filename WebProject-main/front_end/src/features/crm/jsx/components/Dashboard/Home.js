import React, { Fragment, useState } from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Dropdown } from 'react-bootstrap'
import HomeTabChart from './../Karciz/Dashboard/HomeTabChart'
import { letestBlog, recentEvent } from './../Karciz/Dashboard/HomePageData'
import DropdownBlog from './../Karciz/Dropdown/DropdownBlog'
import Footer from './../../layouts/Footer'
import './../../../jsx/index.css'
import './../../../jsx/step.css'
import './../../../jsx/chart.css'
import './../../../css/style.css'
import './../../../scss/main.css'
import JobieNav from './../../layouts/nav'

const SalesChart = loadable(() =>
    pMinDelay(import('./../Karciz/Dashboard/SalesChart'), 1000)
)
const IncreaseChart = loadable(() =>
    pMinDelay(import('./../Karciz/Dashboard/IncreaseChart'), 1000)
)
const IncomeChart = loadable(() =>
    pMinDelay(import('./../Karciz/Dashboard/IncomeChart'), 1000)
)
const Doughnutchart = loadable(() =>
    pMinDelay(import('./../Karciz/Dashboard/Doughnutchart'), 1000)
)
const SellingApexChart = loadable(() =>
    pMinDelay(import('./../Karciz/EventPage/SellingApexChart'), 1000)
)

const Home = props => {
    let path = window.location.pathname
    path = path.split('-')
    path = path[path.length - 1]
    let pagePath = path.split('-').includes('home')
    const [activeEvent, setActiveEvent] = useState(!path)

    return (
        <Fragment>
            <div
                id={`${!pagePath ? 'main-wrapper' : ''}`}
                className={`${!pagePath ? 'show' : 'mh100vh'}`}
            >
                {!pagePath && (
                    <JobieNav
                        onClick={() => setActiveEvent(!activeEvent)}
                        activeEvent={activeEvent}
                        onClick2={() => setActiveEvent(false)}
                        onClick3={() => setActiveEvent(true)}
                    />
                )}
                <div
                    className={` ${
                        !path && activeEvent ? 'rightside-event' : ''
                    } ${!pagePath ? 'content-body' : ''}`}
                >
                    <div
                        className={`${!pagePath ? 'container-fluid' : ''}`}
                        style={{ minHeight: window.screen.height - 60 }}
                    >
                        <div className="row">
                            <div className="col-xl-6 col-xxl-5 col-lg-6">
                                <div className="card ticket-bx">
                                    <div className="card-body">
                                        <div className="d-sm-flex d-block pb-sm-3 align-items-end">
                                            <div className="mr-auto pr-3 mb-2 mb-sm-0">
                                                <span className="text-white fs-20 font-w200 d-block mb-sm-3 mb-2">
                                                    Bugünə olan sifarişlər
                                                </span>
                                                <h2 className="fs-40 text-white mb-0">
                                                    0
                                                    <span className="fs-18 ml-2"></span>
                                                </h2>
                                            </div>
                                            <div className="d-flex flex-wrap">
                                                <svg
                                                    width="87"
                                                    height="58"
                                                    viewBox="0 0 87 58"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M18.4571 37.6458C11.9375 44.6715 4.81049 52.3964 2 55.7162H68.8125C77.6491 55.7162 84.8125 48.5528 84.8125 39.7162V2L61.531 31.9333C56.8486 37.9536 48.5677 39.832 41.746 36.4211L37.3481 34.2222C30.9901 31.0432 23.2924 32.4352 18.4571 37.6458Z"
                                                        fill="url(#paint0_linear)"
                                                    />
                                                    <path
                                                        d="M2 55.7162C4.81049 52.3964 11.9375 44.6715 18.4571 37.6458C23.2924 32.4352 30.9901 31.0432 37.3481 34.2222L41.746 36.4211C48.5677 39.832 56.8486 37.9536 61.531 31.9333L84.8125 2"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="paint0_linear"
                                                            x1="43.4062"
                                                            y1="8.71453"
                                                            x2="46.7635"
                                                            y2="55.7162"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop
                                                                stopColor="white"
                                                                offset="0"
                                                            />
                                                            <stop
                                                                offset="1"
                                                                stopColor="white"
                                                                stopOpacity="0"
                                                            />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <div className="ml-3">
                                                    <p className="text-warning fs-20 mb-0">
                                                        +0%
                                                    </p>
                                                    <span className="fs-12">
                                                        Ötən gündən
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="progress mt-3 mb-4"
                                            style={{ height: '15px' }}
                                        >
                                            <div
                                                className="progress-bar-striped progress-bar-animated"
                                                style={{
                                                    width: '0%',
                                                    height: '15px',
                                                }}
                                                role="progressbar"
                                            >
                                                <span className="sr-only">
                                                    0% Tamamlanıb
                                                </span>
                                            </div>
                                        </div>
                                        <p className="fs-12">
                                            CRM tərəfindən veriləcək rəy
                                        </p>
                                        <Link to={'#'} className="text-white">
                                            Detallara baxın
                                            <i className="las la-long-arrow-alt-right scale5 ml-3"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-xxl-7 col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-header align-items-start pb-0 border-0">
                                                <div>
                                                    <h4 className="fs-16 mb-0">
                                                        0
                                                    </h4>
                                                    <span className="fs-12">
                                                        Satışlar
                                                    </span>
                                                </div>
                                                <Dropdown className="">
                                                    <Dropdown.Toggle
                                                        variant=""
                                                        as="div"
                                                        className="fs-12"
                                                    >
                                                        Bu həftə
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu
                                                        alignRight={true}
                                                        className="dropdown-menu-right"
                                                    >
                                                        <Dropdown.Item>
                                                            Gündəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Həftəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Aylıq
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="card-body p-0">
                                                <SalesChart className="mr-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-header align-items-start pb-0 border-0">
                                                <div>
                                                    <h4 className="fs-16 mb-0">
                                                        Artım 0%
                                                    </h4>
                                                    <span className="fs-12">
                                                        Müqayisə
                                                    </span>
                                                </div>
                                                <Dropdown className="">
                                                    <Dropdown.Toggle
                                                        variant=""
                                                        as="div"
                                                        className="fs-12"
                                                    >
                                                        Gündəlik
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu
                                                        alignRight={true}
                                                        className="dropdown-menu-right"
                                                    >
                                                        <Dropdown.Item>
                                                            Gündəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Həftəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Aylıq
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="card-body p-0">
                                                <IncreaseChart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-header align-items-start pb-0 border-0">
                                                <Dropdown className="ml-auto">
                                                    <Dropdown.Toggle
                                                        variant=""
                                                        as="div"
                                                        className="fs-12"
                                                    >
                                                        Bu həftə
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu
                                                        alignRight={true}
                                                        className="dropdown-menu-right"
                                                    >
                                                        <Dropdown.Item>
                                                            Gündəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Həftəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Aylıq
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="card-body pt-2">
                                                <div className="index-chart-point">
                                                    <div className="check-point-area">
                                                        <Doughnutchart />
                                                    </div>
                                                    <ul className="index-chart-point-list">
                                                        <li>
                                                            <i className="fa fa-stop text-danger"></i>
                                                            Servis A
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-stop text-success"></i>{' '}
                                                            Servis B
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-stop text-warning"></i>{' '}
                                                            Servis C
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-stop text-info"></i>{' '}
                                                            Servis D
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card overflow-hidden">
                                            <div className="card-header align-items-start pb-0 border-0">
                                                <div>
                                                    <h4 className="fs-16 mb-0">
                                                        Azn 0
                                                    </h4>
                                                    <span className="fs-12">
                                                        Gəlir
                                                    </span>
                                                </div>
                                                <Dropdown className="ml-auto">
                                                    <Dropdown.Toggle
                                                        variant=""
                                                        as="div"
                                                        className="fs-12"
                                                    >
                                                        Aylıq
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu
                                                        alignRight={true}
                                                        className="dropdown-menu-right"
                                                    >
                                                        <Dropdown.Item>
                                                            Gündəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Həftəlik
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Aylıq
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="card-body p-0">
                                                <IncomeChart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-xxl-8">
                                <HomeTabChart />
                            </div>
                            <div className="col-xl-3 col-xxl-4 col-md-6">
                                <div className="card">
                                    <div className="card-header border-0 pb-0">
                                        <h4 className="fs-20">
                                            Ən çox satılan
                                        </h4>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant=""
                                                as="div"
                                                className="fs-12"
                                            >
                                                Bu həftə
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu
                                                alignRight={true}
                                                className="dropdown-menu-right"
                                            >
                                                <Dropdown.Item>
                                                    Gündəlik
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    Həftəlik
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    Aylıq
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center bg-dark p-3 rounded" style={{
                                          width:"auto",
                                          height:"auto"
                                        }}>
                                            <span className="text-white fs-14">
                                                çərşənbə axşamı
                                            </span>
                                            <span className="text-white fs-14">
                                                0
                                            </span>
                                        </div>
                                        <div id="lineChart"></div>
                                        <SellingApexChart />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-xxl-4 col-md-6">
                                <div className="card">
                                    <div className="card-header border-0 pb-0">
                                        <h4 className="fs-20">Son Satışlar</h4>
                                        <DropdownBlog />
                                    </div>
                                    <div className="card-body">
                                        {/* {letestBlog.map((data, index) => (
                <div
                  className="media pb-3 border-bottom mb-3 align-items-center"
                  key={index}
                >
                  <span className="ticket-icon mr-3 bg-primary">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9042 5.18413L0.556031 16.5323C0.281453 16.8068 0.281453 17.2521 0.556031 17.5266L3.24911 20.2197C3.44481 20.4154 3.73705 20.4781 3.99582 20.3799C5.0289 19.9878 6.20067 20.2386 6.98098 21.0189C7.76129 21.7992 8.01214 22.971 7.62003 24.0041C7.52178 24.2628 7.5845 24.5551 7.78019 24.7508L10.4733 27.4439C10.7479 27.7185 11.1931 27.7185 11.4677 27.4439L22.8158 16.0958L11.9042 5.18413Z"
                        fill="white"
                      />
                      <path
                        d="M27.4439 10.4734L24.7508 7.78025C24.5551 7.58456 24.2628 7.52185 24.0041 7.62009C22.971 8.0122 21.7993 7.76132 21.019 6.98101C20.2386 6.2007 19.9878 5.02893 20.3799 3.99585C20.4781 3.73711 20.4154 3.44484 20.2197 3.24914L17.5266 0.556062C17.252 0.281484 16.8068 0.281484 16.5322 0.556062L12.8985 4.18975L23.8102 15.1014L27.4439 11.4677C27.7185 11.1932 27.7185 10.7479 27.4439 10.4734Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div className="media-body">
                    <h6 className="fs-16 mb-0">{data.title}</h6>
                    <div className="d-flex">
                      <span className="fs-14 mr-auto">{data.subtitle}</span>
                      <span className="fs-14">{data.timeblog}</span>
                    </div>
                  </div>
                </div>
              ))} */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-9 col-xxl-8">
                                <div className="card event-bx">
                                    <div className="card-header border-0 pb-0">
                                        <h4 className="fs-20">
                                            Son hadisələrin icmalı
                                        </h4>
                                        <DropdownBlog />
                                    </div>

                                    <PerfectScrollbar
                                        className="card-body dz-scroll"
                                        id="event-bx"
                                    >
                                        {/* {recentEvent.map((item, index) => (
                <div
                  className="media d-md-flex d-block pb-3 border-bottom mb-3"
                  key={index}
                >
                  <div className="image">
                    <img src={item.image} alt="" />
                    <i className="las la-film image-icon"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="fs-18 mb-sm-0 mb-2">
                      <Link to={"#"}> {item.title}</Link>
                    </h4>
                    <span className="fs-14 d-block mb-sm-3 mb-2 text-primary">
                      {item.countryname}
                    </span>
                    <p className="fs-12">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad mini
                    </p>
                  </div>
                  <div className="media-footer">
                     <div className="text-center">
                      {item.iconblog3}
                      <div className="fs-12 text-white">24 June 2020</div>
                    </div> 
                  </div>
                </div>
              ))} */}
                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Home
