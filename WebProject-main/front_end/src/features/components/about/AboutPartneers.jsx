// @ts-nocheck
import React from 'react';
import AboutHeaderDash from './AboutHeaderDash';
import Footer from './../../footer/Footer';
import ContactForm from './../common/contact-form/ContactForm';
import styles from './about.module.css';
import ParticlesBg from 'particles-bg';

// !----------------------------------------------------------
import aboutmain from './assets/bg.png';
import abbLogo from './assets/img/partners/abb-logo.png';
import arsolLogo from './assets/img/partners/arsol-logo.png';
import unibankLogo from './assets/img/partners/unibank-logo.png';
import askLogo from './assets/img/partners/ask-logo.png';

const AboutPartneers = () => {
  return (
    <div>
      <AboutHeaderDash
        isBlack={false}
        img={aboutmain}
        textStructure={'Partnyorlarımız'}
        textStructureData={'Partners'}
      />
      <ParticlesBg type="tadpole" bg={true} num={100} color="#3A6351" />

      <section className={`${styles.partners_container} d-flex align-center justify-center flex-wrap`}>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={abbLogo} alt="" />
        </div>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={arsolLogo} alt="" />
        </div>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={unibankLogo} alt="" />
        </div>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={askLogo} alt="" />
        </div>
      </section>
      <ContactForm isBlackBG={true} />
      <Footer />
    </div>
  );
};

export default AboutPartneers;
