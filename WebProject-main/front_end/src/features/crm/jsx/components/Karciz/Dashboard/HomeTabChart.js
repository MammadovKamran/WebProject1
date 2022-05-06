import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

const SalesRevenueChart = loadable(() =>
	pMinDelay(import("./SalesRevenueChart"), 1000)
);
const SalesRevenueChart2 = loadable(() =>
	pMinDelay(import("./SalesRevenueChart2"), 1000)
);
const SalesRevenueChart3 = loadable(() =>
	pMinDelay(import("./SalesRevenueChart3"), 1000)
); 

const HomeTabChart = () => {
	const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	return(
		<Fragment>
			<div className="card">
				<div className="card-header border-0 pb-0 d-sm-flex d-block">
					<div>
						<h4 className="mb-0 fs-20">Satış əyrisi</h4>
					</div>
					<div className="card-action card-tabs mt-3 mt-sm-0">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<Link to ={"#"} 
									className= {classnames({ active : activeTab === '1'}) + ' nav-link'} onClick={() => { toggle('1'); 	}}>Aylıq
								</Link>
							</li>
							<li className="nav-item">
								<Link to ={"#"} 
									className= {classnames({ active : activeTab === '2'}) + ' nav-link'} onClick={() => { toggle('2'); 	}}>Həftəlik
								</Link>
							</li>
							<li className="nav-item">
								<Link to ={"#"} 
									className= {classnames({ active : activeTab === '3'}) + ' nav-link'} onClick={() => { toggle('3'); 	}}>Gündəlik
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="card-body">
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<SalesRevenueChart />
						</TabPane>	
						<TabPane tabId="2">
							<SalesRevenueChart2 />
						</TabPane>	
						<TabPane tabId="3">
							<SalesRevenueChart3 />
						</TabPane>	
					</TabContent>	
				</div>
			</div>	
		</Fragment>
	)
}
export default HomeTabChart;