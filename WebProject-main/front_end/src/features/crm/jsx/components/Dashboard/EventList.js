import React,{Fragment, useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
//Images 

const EventList = () => {
	const [data, setData] = useState(
		document.querySelectorAll('#transactions-data tbody tr')
	)
	const sort = 10
	const activePag = useRef(0)
	const [test, settest] = useState(0)

	  // Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove('d-none')
			} else {
				data[i].classList.add('d-none')
			}
		}
	}
	// use effect
	useEffect(() => {
		setData(document.querySelectorAll('#transactions-data tbody tr'))
		//chackboxFun()
	}, [test])
	
	// Active pagginarion
		activePag.current === 0 && chageData(0, sort)
	// paggination
		let paggination = Array(Math.ceil(data.length / sort))
			.fill()
			.map((_, i) => i + 1)
	 // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i
		chageData(activePag.current * sort, (activePag.current + 1) * sort)
		settest(i)
	}	
	return(
		<Fragment>
			<div className="row mb-5 align-items-center">
				<div className="col-xl-9">
					<div className="card m-0 ">
						<div className="card-body px-4 py-3 py-lg-2">
							<div className="row align-items-center">
								<div className="col-xl-3 col-xxl-12 col-lg-12 my-2">
									<p className="mb-0 fs-14">Statistik panel</p>
								</div>
								<div className="col-xl-7 col-xxl-12 col-lg-12">
									<div className="row align-items-center">
										<div className="col-xl-4 col-md-4 col-sm-4 my-2">
											<div className="media align-items-center">
												<span className="mr-3">
													<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" transform="matrix(-1 0 0 1 24.8181 0)" fill="#fff"></rect>
													<rect width="3.54545" height="18.9091" rx="1.77273" transform="matrix(-1 0 0 1 17.7271 7.09088)" fill="#fff"></rect>
													<rect width="3.54545" height="8.27273" rx="1.77273" transform="matrix(-1 0 0 1 10.6362 17.7273)" fill="#fff"></rect>
													<rect width="4" height="16" rx="2" transform="matrix(-1 0 0 1 4 10)" fill="#fff"></rect>
													</svg>
												</span>
												<div className="media-body ml-1">
													<p className="mb-0 fs-12">Gəlir</p>
													<h4 className="mb-0 font-w600  fs-22">Azn 0</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-md-4 col-sm-4 my-2">
											<div className="media align-items-center">
												<span className="mr-3">
													<svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M29.3124 0.990819C30.1459 1.71561 30.234 2.97887 29.5092 3.81239L20.7578 13.8765C19.359 15.4851 16.9444 15.7141 15.2681 14.397L11.1176 11.1359L3.87074 17.9564C3.06639 18.7135 1.80064 18.6751 1.04361 17.8708C0.286573 17.0664 0.324929 15.8007 1.12928 15.0436L8.3761 8.22309C9.817 6.86695 12.0329 6.76812 13.5888 7.99062L17.7394 11.2518L26.4908 1.18767C27.2156 0.354158 28.4788 0.266024 29.3124 0.990819Z" fill="#fff"></path>
													</svg>
												</span>
												<div className="media-body ml-1">
													<p className="mb-0 fs-12">Müştəri</p>
													<h4 className="mb-0 font-w600  fs-22">0 Nəfər</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-md-4 col-sm-4 my-2">
											<div className="media align-items-center">
												<span className="mr-3">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white" fillOpacity="0.18"></path>
													<path fillRule="evenodd" clipRule="evenodd" d="M15.9999 0.686289C14.7205 0.233951 13.3682 0 11.9999 0V3.93696C13.4442 3.93696 14.8619 4.32489 16.105 5.06021C17.3481 5.79553 18.3708 6.85124 19.0664 8.117C19.7619 9.38277 20.1047 10.8121 20.0589 12.2557C20.0131 13.6992 19.5804 15.104 18.806 16.3231C18.0317 17.5422 16.9441 18.531 15.6569 19.186C14.3697 19.8411 12.9302 20.1384 11.4888 20.0468C10.0475 19.9553 8.65715 19.4783 7.46319 18.6656C6.26922 17.853 5.31544 16.7346 4.70154 15.4273L1.13794 17.1007C1.71955 18.3393 2.50612 19.4639 3.45939 20.4297C4.00364 20.9811 4.60223 21.4807 5.24803 21.9203C7.02498 23.1297 9.09416 23.8396 11.2393 23.9759C13.3845 24.1121 15.5268 23.6697 17.4425 22.6948C19.3582 21.7199 20.9768 20.2483 22.1293 18.4339C23.2818 16.6195 23.9257 14.5289 23.9939 12.3805C24.062 10.2321 23.5519 8.10484 22.5167 6.22104C21.4816 4.33724 19.9595 2.76605 18.1094 1.6717C17.4371 1.27398 16.7304 0.944541 15.9999 0.686289Z" fill="#fff"></path>
													</svg>
												</span>
												<div className="media-body ml-1">
													<p className="mb-0 fs-12">Ötən həftədən</p>
													<h4 className="mb-0 font-w600 fs-22">72%
														<svg className="ml-2" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M0 6L6 2.62268e-07L12 6" fill="#13B497"></path>
														</svg>
													</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-2 col-xxl-12 mt-2">
									<Dropdown className="d-inline-block">
										<Dropdown.Toggle variant="" as="div" className="btn-link text-white mb-0 fs-18">
											<span className="font-w300 mr-1">Bu həftə</span>
										</Dropdown.Toggle>
										<Dropdown.Menu alignLeft={true} className="dropdown-menu-left">
											<Dropdown.Item>Ən yenilər</Dropdown.Item>
											<Dropdown.Item>Köhnələr</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</div>							
						</div>
					</div>
				</div>
				<div className="col-xl-3 align-self-start mt-3 mt-xl-0">
					<Link to={"#"} className="btn btn-primary d-block rounded">Sifariş hesabatı</Link>
				</div>					
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="table-responsive table-hover fs-14 dataTables_wrapper" id="transactions-data">
						<table className="table mb-4  dataTable no-footer" id="example5">
							<thead>
								<tr role='row'> 
									<th className="sorting_asc">Sifariş Nömrəsi</th>
									<th className="sorting_asc">Tarix</th>
									<th className="sorting_asc">Görüş</th>
									<th className="sorting_asc">Müştəri adı</th>
									<th className="sorting_asc">Lokasiya</th>
									<th className="sorting_asc">Sifariş</th>
									<th className="sorting_asc">Keçərliliyi</th>
									<th className="sorting_asc">Rəy Hə/Yox</th>
									<th className="sorting_asc">Ümumi Gəlir</th>
								</tr>
							</thead>
							<tbody>
								{/* <tr role='row' className='odd'>
									<td>#0012451</td>
									<td>04/08/2020 12:34 AM</td>
									<td className="wspace-no">The Story Of Danaou<br/> Taba (Musical Drama)</td>
									<td>Bella Simatupang</td>
									<td>London, US</td>
									<td>1 pcs</td>
									<td>567k left</td>
									<td className="text-black"><strong>NO</strong></td>
									<td><Link to={"#"} className="btn btn-primary light btn-sm">$125,70</Link></td>
								</tr> */}
								
							</tbody>
						</table>	
						<div className='d-sm-flex text-center justify-content-between align-items-center'>
							<div className='dataTables_info' id='example5_info'>
								   {activePag.current * sort + 1} {' '}-ci &nbsp;
								  {data.length > (activePag.current + 1) * sort
									? (activePag.current + 1) * sort
									: data.length}{' '}
								  &nbsp;-dan&nbsp; {data.length} 
							</div>

							<div className='dataTables_paginate paging_simple_numbers' id='example5_paginate'>
								<Link to='/event-list' className='paginate_button previous disabled' onClick={() => activePag.current > 0 && onClick(activePag.current - 1)}>
									Əvvəlki
								</Link>
								<span>
									{paggination.map((number, i) => (
										<Link key={i} to='/event-list' className={`paginate_button  ${ activePag.current === i ? 'current' : '' } `} onClick={() => onClick(i)}>
											{number}
										</Link>
									))}
								</span>
								<Link to='/event-list' className='paginate_button next' onClick={() => activePag.current + 1 < paggination.length && onClick(activePag.current + 1)}>
									Sonrakı
								</Link>
							</div>
						</div>	
					</div>
				</div>
			</div>	
		</Fragment>
	)
}

export default EventList;