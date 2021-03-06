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
            <p>Daha ??ox</p>
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
            <h3 className='text-white'>Karyeran??za biziml?? ba??lay??n</h3>
            <p className="mb-text-justify mt-15">
              TWC-d?? m??qs??dimizin yegan?? s??tunu bizim{' '}
              <span className={`${styles.line_home_divider} text-white `}></span>
              insanlar??m??zd??r. Bizim dinamik m??hitd?? siz komanda{' '}
              <span className={`${styles.line_home_divider} text-white `}></span>
              t??r??find??n ilk g??nd??n d??st??k g??rm??yiniz?? baxmayaraq,
              <span className={`${styles.line_home_divider} text-white `}></span>
              siz ??z yolunuzu m????yy??n ed??c??ksiniz.
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
            <h3>M??qal??l??r</h3>
            <p className="text-white">
              Sayt??m??zdan qeydiyyatdan ke????r??k s??n <br /> d?? bizim m??qal?? yazar?? ola bil??rs??n
            </p>
            <DefaultButton
              contentData={'??trafl??'}
              handleNavigation={handleNavigateArticle}
              classData={`button-detailed-dark ${styles.default_button_margin_top} ${styles.shadow_button} text-white `}
            />
          </div>

          <div className={`${styles.articles_B} text-white `}>
            <div className={`${styles.articles_card1} text-white `} onClick={() => handleNavigation('/ideas')}>
              <img src={article1} alt="think wise business articles" />
              <div className={`${styles.articles_card1_body} text-white `}>
                <h1>NETFLIX | M??QAL??</h1>
                <h2>
                  Netflix biznes modelini <br /> nec?? d??yi??di...
                </h2>
                <p>
                  1997-ci ild?? bir DVD kiray?? ma??aza kimi i???? ba??layan Netflix, 2020-ci ilin sonundan etibar??n, 190-dan
                  ??ox ??lk??d?? f??aliyy??t g??st??r??rk??n 204 milyon istifad????isi v?? 25 milyard AB?? dollar?? g??liri olan ??n
                  b??y??k subscription-??sasl?? kontent izl??m?? oyun??usudur.
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
                  <h2>STARTAP | M??QAL??</h2>
                  <p>Az??rbaycan??n startap ekosisteminin ????tinliyi hans??lard??r?</p>
                  <p>7 Sentyabr, 2021</p>
                </div>
              </div>

              <div
                className={`${styles.articles_card2} text-white `}
                onClick={() => handleNavigation('/ideas/alcohol')}
              >
                <img src={article2} alt="think wise business articles" />
                <div className={`${styles.articles_card2_body} text-white `}>
                  <h2>ALKOQOL | M??QAL??</h2>
                  <p>B??y??y??n qlobal industriya sat????lar?? istehlak dal??as?? ??z??rind?? deyil</p>
                  <p>14 Oktyabr, 2021</p>
                </div>
              </div>

              <div
                className={`${styles.articles_card2} text-white `}
                onClick={() => handleNavigation('/ideas/logistics')}
              >
                <img src={article3} alt="Home content description testimonials" />
                <div className={`${styles.articles_card2_body} text-white `}>
                  <h2>KARQO | M??QAL??</h2>
                  <p>Az??rbaycanda karqo ??irk??tl??ri ??zr?? bazar ara??d??rmas??</p>
                  <p>23 Dekabr, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.client_projects} text-white `}>
          <p>PORTFOL??O</p>
          <h2 className='text-white'>M????t??ri layih??l??rimiz</h2>
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
