// @ts-nocheck
import React, { useState, useEffect } from 'react';
import GalleryTestimonials from '../../toolbox/gallery/GalleryTestimonials';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import DefaultButton from '../../toolbox/buttons/DefaultButton';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllIndustries } from '../industry/industriesSlice';
import { selectAllTestimonials } from './../testimonials/testimonialsSlice';
import ParticlesBg from 'particles-bg';
import styles from './home.module.css';
// !----------------------------------------------------------
import career from './assets/img/career.jpg';
import article1 from '../articles/assets/img/ntflx.png';
import article2 from '../articles/assets/img/alcohol-cover.png';
import article3 from '../articles/assets/img/cargo-cover.png';
import article4 from '../articles/assets/img/startup.png';
import BusinessModel from '../business/BusinessModel';
import Team from '../team/Team';
import ContactForm from './../common/contact-form/ContactForm';

const Home = ({ homeProps }) => {
  const navigate = useNavigate();
  const industries = useSelector(selectAllIndustries);
  const [display, setDisplay] = useState(false);

  const testimonialsData = useSelector(selectAllTestimonials).map((testimonial) => {
    return testimonial.img;
  });

  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };

  const handleNavigateArticle = () => {
    navigate('/ideas');
  };

  const handleCarrerRouting = () => {
    navigate('/career');
  };

  const handleScroll = () => {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
      homeProps.visibleChatMethod(true);
    } else {
      homeProps.visibleChatMethod(false);
    }
  };

  const renderedIndustries = industries.map((industry, index) => (
    <div
      key={industry.id}
      className={styles.business_item}
      onClick={() => {
        handleNavigation(industry.link);
      }}
    >
      <img
        src={industry.img}
        className={`${styles.industry_images} text-white `}
        alt={`industries service ${industry.name} text-white `}
      />
      <p className={`${styles.industry_names} text-white `}>{industry.name}</p>
    </div>
  ));

  window.addEventListener('scroll', handleScroll);

  return (
    <main className={`mb-top-padding ${styles.main_padding} text-white `}>
      <ParticlesBg type="cobweb" color='#3A6351' bg={true} num={800} />
      <div
        style={{
          position: 'relative',
          zIndex: '50'
        }}
      >
        <BusinessModel renderedIndustries={industries} />
        <div className="team-container">
          <Team />
        </div>

        <div className={`${styles.doing_business} text-white `}>
          <div className={`${styles.doing_business_box} text-white `}>
            <p>Daha çox</p>
            <p>Doing Business in Azerbaijan</p>

            <div className="d-flex justify-end" onClick={() => handleNavigation('/services/businessazerbaijan')}>
              <RoundedButton className={`${styles.doing_business_button} text-white `} />
            </div>
          </div>
        </div>

        <div className={`${styles.carier} text-white `}>
          <img src={career} alt="Home content description testimonials" />
          <div className={`${styles.carier_side2} text-white `}>
            <p>Karyera</p>
            <h3 className='text-white'>Karyeranıza bizimlə başlayın</h3>
            <p className="mb-text-justify mt-15">
              TWC-də məqsədimizin yeganə sütunu bizim{' '}
              <span className={`${styles.line_home_divider} text-white `}></span>
              insanlarımızdır. Bizim dinamik mühitdə siz komanda{' '}
              <span className={`${styles.line_home_divider} text-white `}></span>
              tərəfindən ilk gündən dəstək görməyinizə baxmayaraq,
              <span className={`${styles.line_home_divider} text-white `}></span>
              siz öz yolunuzu müəyyən edəcəksiniz.
            </p>
            <DefaultButton
              contentData={'Karyera'}
              handleNavigation={handleCarrerRouting}
              classData={`button-detailed-dark ${styles.default_button_margin_top} ${styles.shadow_button} text-white `}            />

            <div
              onClick={() => handleNavigation('/career')}
              className={`display-mb-flex justify-mb-end mt-mb-2 mb-padding-right-home ${styles.mt_40_1} text-white `}
            ></div>
          </div>
        </div>

        <div className={`${styles.articles} text-white `}>
          <div className={`${styles.articles_A} text-white `}>
            <h3>Məqalələr</h3>
            <p className="text-white">
              Saytımızdan qeydiyyatdan keçərək sən <br /> də bizim məqalə yazarı ola bilərsən
            </p>
            <DefaultButton
              contentData={'Ətraflı'}
              handleNavigation={handleNavigateArticle}
              classData={`button-detailed-dark ${styles.default_button_margin_top} ${styles.shadow_button} text-white `}
            />
          </div>

          <div className={`${styles.articles_B} text-white `}>
            <div className={`${styles.articles_card1} text-white `} onClick={() => handleNavigation('/ideas')}>
              <img src={article1} alt="think wise business articles" />
              <div className={`${styles.articles_card1_body} text-white `}>
                <h1>NETFLIX | MƏQALƏ</h1>
                <h2>
                  Netflix biznes modelini <br /> necə dəyişdi...
                </h2>
                <p>
                  1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan
                  çox ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən
                  böyük subscription-əsaslı kontent izləmə oyunçusudur.
                </p>
              </div>
              <p>24 Avqust, 2021</p>
            </div>

            <div className={`${styles.articles_card2_container} text-white `}>
              <div
                className={`${styles.articles_card2} mt-mb-2   text-white `}
                onClick={() => handleNavigation('/ideas/startup')}
              >
                <img src={article4} alt="think wise business articles" />
                <div className={`${styles.articles_card2_body} text-white `}>
                  <h2>STARTAP | MƏQALƏ</h2>
                  <p>Azərbaycanın startap ekosisteminin çətinliyi hansılardır?</p>
                  <p>7 Sentyabr, 2021</p>
                </div>
              </div>

              <div
                className={`${styles.articles_card2} text-white `}
                onClick={() => handleNavigation('/ideas/alcohol')}
              >
                <img src={article2} alt="think wise business articles" />
                <div className={`${styles.articles_card2_body} text-white `}>
                  <h2>ALKOQOL | MƏQALƏ</h2>
                  <p>Böyüyən qlobal industriya satışları istehlak dalğası üzərində deyil</p>
                  <p>14 Oktyabr, 2021</p>
                </div>
              </div>

              <div
                className={`${styles.articles_card2} text-white `}
                onClick={() => handleNavigation('/ideas/logistics')}
              >
                <img src={article3} alt="Home content description testimonials" />
                <div className={`${styles.articles_card2_body} text-white `}>
                  <h2>KARQO | MƏQALƏ</h2>
                  <p>Azərbaycanda karqo şirkətləri üzrə bazar araşdırması</p>
                  <p>23 Dekabr, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.client_projects} text-white `}>
          <p>PORTFOLİO</p>
          <h2 className='text-white'>Müştəri layihələrimiz</h2>
          <div className={`${styles.slide_dot} text-white `}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="galler-container">
            <GalleryTestimonials
              testimonialsData={testimonialsData}
              localeClassData={`${styles.span_img_container} text-white `}
            />
          </div>
        </div>
        <ContactForm isBlackBG={true} />
      </div>
    </main>
  );
};

export default Home;
