// @ts-nocheck
import React from 'react';
import NavHeader from '../../toolbox/navheader/NavHeader';
import Navigation from '../../navigation/Navigation';
import Header from '../../header/Header';
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg';
import styles from './career.module.css';
const CareerHeaderDash = () => {
  return (
    <div className={`${styles.background_image}`}>
      <NavHeader textColor={'nav-header-text-white'} borderBgColor={'nav-header-border-white'} />
      <Navigation logo={whiteThinkWiseLogo} enable={true} textColor="text-white" bgColor="bg-white" isArticle={false} />
      <Header
        textColor={'text-white'}
        textData={'İstedad oyunları qazanır, amma komanda işi və zəka zirvələri qazanır'}
        newData={'Talent wins games, but teamwork and intelligence win championships'}
      />
    </div>
  );
};

export default CareerHeaderDash;
