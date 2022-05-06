// @ts-nocheck
import React from 'react';
import NavHeader from '../../toolbox/navheader/NavHeader';
import Navigation from '../../navigation/Navigation';
import Header from '../../header/Header';
// !----------------------------------------------------------
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg';
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg';
import styles from './services.module.css';
import { white } from 'material-ui/styles/colors';

const ServicesHeaderDash = ({ isBlack, textStructure, textStructureData }) => {
  return (
    <div className={styles.background_image}>
      <NavHeader
        textColor={isBlack ? 'nav-header-text-white' : 'nav-header-text-white'}
        borderBgColor={isBlack ? 'nav-header-border-white' : 'nav-header-border-white'}
      />
      <Navigation
        logo={whiteThinkWiseLogo}
        enable={true}
        textColor={isBlack ? 'text-white' : 'text-white'}
        bgColor={isBlack ? 'bg-white' : 'bg-white'}
        isArticle={false}
      />
      <Header textColor={isBlack ? 'text-white' : 'text-white'} textData={textStructure} newData={textStructureData} />
    </div>
  );
};

export default ServicesHeaderDash;
