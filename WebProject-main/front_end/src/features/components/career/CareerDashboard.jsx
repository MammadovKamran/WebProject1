import React from 'react';
import Career from './Career';
import CareerHeaderDash from './CareerHeaderDash';
import styles from './career.module.css';
import ParticlesBg from 'particles-bg';

const CareerDashboard = () => {
  return (
    <div className={`${styles.container_bg_career}`}>
      <CareerHeaderDash />
      <Career />
   
    </div>
  );
};

export default CareerDashboard;
