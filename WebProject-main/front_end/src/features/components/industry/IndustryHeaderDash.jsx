/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react';
import Navigation from '../../navigation/Navigation';
import IndustryHeader from './IndustryHeader';
import styles from './industry.module.css';
import ParticlesBg from 'particles-bg';
// !----------------------------------------------------------
import blackThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg';

const IndustryHeaderDash = ({ headerText, isHeader }) => {
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} color={'#90e0ef'} />
      <Navigation
        logo={blackThinkWiseLogo}
        enable={false}
        textColor="text-white"
        bgColor="bg-white"
        isHeader={isHeader}
      />
      <IndustryHeader text={headerText} />
    </div>
  );
};

export default IndustryHeaderDash;
