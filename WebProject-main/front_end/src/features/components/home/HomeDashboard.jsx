import React from 'react';
import Footer from '../../footer/Footer';
import Home from './Home';
import HomeHeaderDash from './HomeHeaderDash';
import ParticlesBg from 'particles-bg';
const HomeDashboard = ({ homeProps }) => {
  return (
    <div>
      <HomeHeaderDash />
      {/* <ParticlesBg type="square" bg={true}  /> */}
      <Home homeProps={homeProps} />
      <Footer />
    </div>
  );
};

export default HomeDashboard;
