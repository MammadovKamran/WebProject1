/// Menu
import MetisMenu from 'metismenujs'
import React, { Component } from 'react'
/// Scroll
import PerfectScrollbar from 'react-perfect-scrollbar'
/// Link
import { Link } from 'react-router-dom'

class MM extends Component {
    componentDidMount() {
        this.$el = this.el
        this.mm = new MetisMenu(this.$el)
    }
    componentWillUnmount() {}
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

class SideBar extends Component {
    /// Open menu
    componentDidMount() {
        // sidebar open/close
        var btn = document.querySelector('.nav-control')
        var aaa = document.querySelector('#main-wrapper')
        function toggleFunc() {
            return aaa.classList.toggle('menu-toggle')
        }
        btn.addEventListener('click', toggleFunc)
    }
    state = {
        loveEmoji: false,
    }
    render() {
        /// Path
        let path = window.location.pathname
        path = path.split('/')
        path = path[path.length - 1]

        /// Active menu
        let dashBoard = [
                'Idarə Paneli',
                'Tədbirlər Siyahısı',
                'Tədbir',
                'Müştərilər',
                'analitika',
                'rəylər',
                'tapşırıqlar',
            ],
            app = [
                'app-profile',
                'app-calender',
                'email-compose',
                'email-inbox',
                'email-read',
                'ecom-product-grid',
                'ecom-product-list',
                'ecom-product-list',
                'ecom-product-order',
                'ecom-checkout',
                'ecom-invoice',
                'ecom-customers',
                'post-details',
                'ecom-product-detail',
            ],
            email = ['email-compose', 'email-inbox', 'email-read'],
            shop = [
                'ecom-product-grid',
                'ecom-product-list',
                'ecom-product-list',
                'ecom-product-order',
                'ecom-checkout',
                'ecom-invoice',
                'ecom-customers',
                'ecom-product-detail',
            ],
            charts = [
                'chart-rechart',
                'chart-flot',
                'chart-chartjs',
                'chart-chartist',
                'chart-sparkline',
                'chart-apexchart',
            ]

        return (
            <div className="deznav">
                <PerfectScrollbar className="deznav-scroll">
                    <MM className="metismenu" id="menu">
                        <li
                            className={`${
                                dashBoard.includes(path) ? 'mm-active' : ''
                            }`}
                        >
                            <Link className="has-arrow ai-icon" to="#">
                                <i className="flaticon-381-networking"></i>
                                <span className="nav-text">İdarə Paneli</span>
                            </Link>
                            <ul>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'dashboard'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        to="/dashboard"
                                        onClick={() => this.props.onClick3()}
                                    >
                                        İdarə Paneli
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'event-list'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/event-list"
                                    >
                                        Tədbirlər
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'event' ? 'mm-active' : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/event"
                                    >
                                        Tədbir
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'customers'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/customers"
                                    >
                                        Müştəri
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'analytics'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/analytics"
                                    >
                                        analitika
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'reviews'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/reviews"
                                    >
                                        Baxış-icmal
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'task' ? 'mm-active' : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/task"
                                    >
                                        Tapşırıq
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${
                                app.includes(path) ? 'mm-active' : ''
                            }`}
                        >
                            <Link className="has-arrow ai-icon" to="#">
                                <i className="flaticon-381-television"></i>
                                <span className="nav-text">CRM-Tətbiqləri</span>
                            </Link>
                            <ul>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'app-profile'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/app-profile"
                                    >
                                        TWC / Social Media Profil
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'post-details'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/post-details"
                                    >
                                        Post detalı
                                    </Link>
                                </li>
                                <li
                                    className={`${
                                        email.includes(path) ? 'mm-active' : ''
                                    }`}
                                >
                                    <Link className="has-arrow" to="#">
                                        TWC / Email Tətbiqləri
                                    </Link>
                                    <ul
                                        className={`${
                                            email.includes(path)
                                                ? 'mm-show'
                                                : ''
                                        }`}
                                    >
                                        <li>
                                            <Link
                                                className={`${
                                                    path === 'email-compose'
                                                        ? 'mm-active'
                                                        : ''
                                                }`}
                                                to="/email-compose"
                                                onClick={() =>
                                                    this.props.onClick()
                                                }
                                            >
                                                Email Göndər
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`${
                                                    path === 'email-inbox'
                                                        ? 'mm-active'
                                                        : ''
                                                }`}
                                                to="/email-inbox"
                                                onClick={() =>
                                                    this.props.onClick()
                                                }
                                            >
                                                Gələnlər qutusu
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`${
                                                    path === 'email-read'
                                                        ? 'mm-active'
                                                        : ''
                                                }`}
                                                to="/email-read"
                                                onClick={() =>
                                                    this.props.onClick()
                                                }
                                            >
                                                Oxu
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'app-calender'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to="/app-calender"
                                    >
                                        Kalendar
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* komanda tesisci komanda uzvleri */}
                        {/* <li
                            className={`${
                                charts.includes(path) ? 'mm-active' : ''
                            }`}
                        >
                            <Link className="has-arrow ai-icon" to="#">
                                <i className="flaticon-381-controls-3"></i>
                                <span className="nav-text">Komanda</span>
                            </Link>
                            <ul>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'chart-rechart'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to=""
                                    >
                                        Təsisçi
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'chart-rechart'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to=""
                                    >
                                        Komanda üzvləri
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* komanda tesisci komanda uzvleri */}
                        {/* korporativ  musteriler namizedler*/}
                        <li
                            className={`${
                                charts.includes(path) ? 'mm-active' : ''
                            }`}
                        >
                            {/* <Link className="has-arrow ai-icon" to="#">
                                <i className="flaticon-381-controls-3"></i>
                                <span className="nav-text">Korporativ</span>
                            </Link> */}
                            {/* <ul>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'chart-rechart'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to=""
                                    >
                                        Müştərilər
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'chart-rechart'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to=""
                                    >
                                        Namizədlər
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'chart-rechart'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to=""
                                    >
                                        Niyə TWC ?
                                    </Link>
                                </li>
                            </ul>  */}
                        </li>
                        {/* korporativ  musteriler namizedler*/}
                        {/* servislərimiz */}

                        <li>
                            {/* <Link className="has-arrow ai-icon" to="#">
                                <i className="flaticon-381-controls-3"></i>
                                <span className="nav-text">Servislərimiz</span>
                            </Link> */}
                            {/* <ul>
                                <li
                                    className={`${
                                        shop.includes(path) ? 'mm-active' : ''
                                    }`}
                                >
                                    <Link className="has-arrow" to="#">
                                        Ətraflı
                                    </Link>
                                    <ul
                                        className={`${
                                            shop.includes(path) ? 'mm-show' : ''
                                        }`}
                                    >
                                        <li>
                                            <Link
                                                className={`${
                                                    path === 'ecom-product-list'
                                                        ? 'mm-active'
                                                        : ''
                                                }`}
                                                to="/ecom-product-list"
                                                onClick={() =>
                                                    this.props.onClick()
                                                }
                                            >
                                                Servislər
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`${
                                                    path ===
                                                    'ecom-product-detail'
                                                        ? 'mm-active'
                                                        : ''
                                                }`}
                                                to="/ecom-product-detail"
                                                onClick={() =>
                                                    this.props.onClick()
                                                }
                                            >
                                                Servis detal
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`${
                                                    path ===
                                                    'ecom-product-order'
                                                        ? 'mm-active'
                                                        : ''
                                                }`}
                                                to="/ecom-product-order"
                                                onClick={() =>
                                                    this.props.onClick()
                                                }
                                            >
                                                Sifariş
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className={`${
                                                    path === 'ecom-customers'
                                                        ? 'mm-active'
                                                        : ''
                                                }`}
                                                to="/ecom-customers"
                                                onClick={() =>
                                                    this.props.onClick()
                                                }
                                            >
                                                Müştərilər
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            path === 'chart-rechart'
                                                ? 'mm-active'
                                                : ''
                                        }`}
                                        onClick={() => this.props.onClick()}
                                        to=""
                                    >
                                        Online Dəstək
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        {/* servislərimiz */}
                    </MM>
                    <div className="copyright" style={{position: "absolute",bottom:"0"}}>
                        <p className="fs-14 font-w200">
                            <strong className="font-w400">TWC CRM</strong> ©
                            2022 All Rights Reserved
                        </p>
                        <p>
                            Made with{' '}
                            <i className="fa fa-heart text-danger"></i> dev:
                            @info@rahmanniftaliyev.com
                        </p>
                    </div>
                </PerfectScrollbar>
            </div>
        )
    }
}

export default SideBar
