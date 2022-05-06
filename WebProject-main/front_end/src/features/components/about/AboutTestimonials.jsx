// @ts-nocheck
import React from 'react';
import AboutHeaderDash from './AboutHeaderDash';
import ContactForm from './../common/contact-form/ContactForm';
import Footer from './../../footer/Footer';
import styles from './about.module.css';
import ParticlesBg from 'particles-bg';

// !----------------------------------------------------------
import aboutmain from './assets/bg.png';
import logo1 from './assets/img/customers/demirchi-tower.png';
import logo2 from './assets/img/customers/Prestij-kimya.png';
import logo3 from './assets/img/customers/absheron-sherab.png';
import logo4 from './assets/img/customers/baki-abadliq.png';

import logo5 from './assets/img/customers/ima-energy.png';
import logo6 from './assets/img/customers/vipex-az.png';
import logo7 from './assets/img/customers/mansard.png';
import logo8 from './assets/img/customers/Elbor.png';

import logo9 from './assets/img/customers/antaris.png';
import logo10 from './assets/img/customers/tuv-austria.png';
import logo11 from './assets/img/customers/az-minerals.png';
import logo12 from './assets/img/customers/Oil-Supply.png';

const AboutTestimonials = () => {
  return (
    <div>
      <AboutHeaderDash
        isBlack={true}
        img={aboutmain}
        textStructure={'Müştəri layihələrimiz'}
        textStructureData={'Client projects'}
      />
      <ParticlesBg type="tadpole" bg={true} num={100} color="#3A6351" />

      <section
        className={`${styles.customers_container} d-flex direction-column align-center justify-center flex-wrap`}
      >
        <div className={`${styles.customers_row} d-flex align-center justify-center flex-wrap`}>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo1} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo2} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo3} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo4} alt="" />
          </div>
        </div>
        <div className={`${styles.customers_row}  d-flex align-center justify-center flex-wrap`}>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo5} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo6} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo7} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo8} alt="" />
          </div>
        </div>
        <div className={`${styles.customers_row}  d-flex align-center justify-center flex-wrap`}>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo9} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo10} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo11} alt="" />
          </div>
          <div className={`${styles.customer_firm_img_box} d-flex align-center justify-center`}>
            <img className={`${styles.customer_firm_img}`} src={logo12} alt="" />
          </div>
        </div>
      </section>
      <ContactForm isBlackBG={true} />
      <Footer />
    </div>
  );
};

export default AboutTestimonials;
