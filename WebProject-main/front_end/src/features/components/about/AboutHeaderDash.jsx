// @ts-nocheck
import React from 'react';
import Navigation from '../../navigation/Navigation';
import NavHeader from '../../toolbox/navheader/NavHeader';
import Header from './../../header/Header';
// !----------------------------------------------------------
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg';
import blackThinkwiseLogo from './../common/assets/svg/navigation-black-logo.svg';

const AboutHeaderDash = ({ isBlack, img, textStructure, textStructureData }) => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <div style={backgroundStyle}>
      <NavHeader textColor={'nav-header-text-white'} borderBgColor={'nav-header-border-white'} />
      <Navigation logo={whiteThinkWiseLogo} enable={true} textColor={'text-white'} bgColor={'bg-white'} />
      <Header textColor={'text-white'} textData={textStructure} newData={textStructureData} />
    </div>
  );
};

export default AboutHeaderDash;
