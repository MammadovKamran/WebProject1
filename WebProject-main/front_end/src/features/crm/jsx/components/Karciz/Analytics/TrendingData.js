import React from "react";
import {Link} from 'react-router-dom';
const mediaBlog = [
	{ id: '#1', title: 'The Story of Danau Toba', sales: '0',  series: <IncrementBlog />,},	
	{ id: '#2', title: 'Jakarta Indie Music Festival 2020', sales: '341',  series: <DecrementBlog />,},	
	{ id: '#3', title: 'Live Choir in Sydney 2020', sales: '0',  series: <IncrementBlog />,},	
	{ id: '#4', title: 'Artist Performing Festival In Aus..', sales: '0',  series: <DecrementBlog />,},	
	{ id: '#5', title: '[LIVE] Football Charity Event 2020', sales: '0',  series: <IncrementBlog />,},	
];

const TrendingData = () =>{
    return (
        <>
			{mediaBlog.map((item,index)=>(
				<div className="media align-items-center border-bottom p-md-4 p-3" key={index}>
					<span className="number text-white col-1 px-0 align-self-center d-none d-sm-inline-block">{item.id}</span>
					<div className="ticket-icon bg-primary ml-0 mr-3 d-none d-sm-inline-block">
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.9042 5.18413L0.556031 16.5323C0.281453 16.8068 0.281453 17.2521 0.556031 17.5266L3.24911 20.2197C3.44481 20.4154 3.73705 20.4781 3.99582 20.3799C5.0289 19.9878 6.20067 20.2386 6.98098 21.0189C7.76129 21.7992 8.01214 22.971 7.62003 24.0041C7.52178 24.2628 7.5845 24.5551 7.78019 24.7508L10.4733 27.4439C10.7479 27.7185 11.1931 27.7185 11.4677 27.4439L22.8158 16.0958L11.9042 5.18413Z" fill="#fff"></path>
						<path d="M27.4439 10.4734L24.7508 7.78025C24.5551 7.58456 24.2628 7.52185 24.0041 7.62009C22.971 8.0122 21.7993 7.76132 21.019 6.98101C20.2386 6.2007 19.9878 5.02893 20.3799 3.99585C20.4781 3.73711 20.4154 3.44484 20.2197 3.24914L17.5266 0.556062C17.252 0.281484 16.8068 0.281484 16.5322 0.556062L12.8985 4.18975L23.8102 15.1014L27.4439 11.4677C27.7185 11.1932 27.7185 10.7479 27.4439 10.4734Z" fill="#fff"></path>
						</svg>
					</div>
					<div className="media-body col-sm-6 col-6 col-xxl-5 px-0">
						<h5 className="mt-0 mb-0"><Link to={"#"} className="text-white fs-18 font-w400 text-ov">{item.title}</Link></h5>
					</div>
					<div className="media-footer ml-auto col-2 px-0 d-flex align-self-center align-items-center">
						<div className="text-center">
							<span className="text-primary d-block fs-20">{item.sales}</span>
							<span className="fs-14">Satışlar</span>
						</div>
					</div>
					<div className="mr-3">
						<span className="peity-success" dataStyle="width:100%;" style={{display: "none"}}>0,2,1,4</span>
						<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="3.71426" height="27" rx="1.85713" transform="matrix(-1 0 0 1 26 0)" fill="#fff"></rect>
							<rect width="3.71426" height="19.6364" rx="1.85713" transform="matrix(-1 0 0 1 18.5723 7.36365)" fill="#fff"></rect>
							<rect width="3.71426" height="8.59091" rx="1.85713" transform="matrix(-1 0 0 1 11.1436 18.4091)" fill="#fff"></rect>
							<rect width="4.19045" height="16.6154" rx="2.09522" transform="matrix(-1 0 0 1 4.19043 10.3846)" fill="#fff"></rect>
						</svg>
					</div>
					{item.series}
				</div>
			))}
        </>
    );
   
}
function IncrementBlog (){
	return(
		<>
			<svg className="min-w22" width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 11L11 -4.72849e-07L22 11" fill="#13B497"></path>
			</svg>
		</>
	)
}
function DecrementBlog (){
	return(
		<>
			<svg className="min-w22" width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 -9.61651e-07L11 11L22 0" fill="#E63D3D"/>
			</svg>
		</>
	)
}
export default TrendingData;
