// @ts-nocheck
import React, { useState } from 'react';
import Footer from './../../footer/Footer';
import Request from '../../toolbox/modal/Request';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import { useSelector } from 'react-redux';
import { selectAllVacancies } from './careersSlice';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useNavigate } from 'react-router-dom';
import ParticlesBg from 'particles-bg';

import styles from './career.module.css';
// !----------------------------------------------------------
import ceo from './assets/img/carrer-ceo.png';
import arrow from './assets/img/arrow.png';

const Career = () => {
  const [demo_class, set_demo_class] = useState('');

  const allVacancies = useSelector(selectAllVacancies);

  const navigate = useNavigate();

  const handleNavigateVacancy = (paramsUrl) => {
    navigate(paramsUrl);
  };

  const handleStylesModal = () => {
    set_demo_class('modal_slider');
  };

  const handleRemoveSlider = () => {
    set_demo_class('');
  };

  return (
    <div>
      <div className={`${styles.career_main}`}>
        <ParticlesBg type="list" bg={true} />
        <Request classData={demo_class} classRemover={handleRemoveSlider} />
        <div className={`${styles.bg_container}`}>
          <h3>
            TWC-də məqsədimizin yeganə sütunu bizim insanlarımızdır. Bizim <span className="line_home_divider"></span>{' '}
            dinamik mühitdə siz komanda tərəfindən ilk gündən dəstək <span className="line_home_divider"></span>{' '}
            görməyinizə baxmayaraq, siz öz yolunuzu müəyyən edəcəksiniz. <span className="line_home_divider"></span>
          </h3>
        </div>
        <div>
          <img src={ceo} className={`${styles.img_w_ceo_100}`} alt="" />
          <p className={`${styles.career_quotes} text-white`}>
            Yolunuzu özünüz yaradın. Təcrübəli bir mütəxəssis və ya yeni məzun olmağınızdan asılı olmayaraq TWC-də sizi
            təşviq edəcək və qeyri-adi olmağa ruhlandıracaq komandalarla əhatələnərkən siz cəmiyyətin ən böyük
            problemlərini həll etmək üçün çalışacaqsınız.
          </p>
        </div>
        <div className={`${styles.bg_container}`}>
          <div>
            <h3>
              “TWC-də məqsədimizin yeganə sütunu bizim insanlarımızdır. Bizim{' '}
              <span className="line_home_divider"></span>
              dinamik mühitdə siz komanda tərəfindən ilk gündən dəstək <span className="line_home_divider"></span>{' '}
              görməyinizə baxmayaraq, siz öz yolunuzu yaradacaqsınız. TWC-yə <span className="line_home_divider"></span>{' '}
              xoş gəlmisiniz”.
            </h3>
            <h4>
              <strong>Çingiz Novruzzadə Təsisçi və Direktor</strong>
            </h4>
          </div>
        </div>
      </div>

      <section className={`${styles.vacantion}`}>
        <span className={`${styles.career_span}`}>Karyera</span>
        <h4>Vakansiyalar</h4>

        {/* !VACATION CONTAINER 1 */}
        {allVacancies.map((vacantion) => {
          return (
            <div className={`${styles.join_vacation} animated_controller`}>
              <h2 className="text-white">{vacantion.name}</h2>
              <p>
                <strong className="text-white">Biz kimik?</strong> <span className="line_home_divider"></span>
                Cənub-Şərqi Avropanın ilk erkən mərhələdə olan saf menecement{' '}
                <span className="line_home_divider"></span>
                konsaltinq şirkəti olan TWC gənc, dinamik və istedadlı komandası ilə hər{' '}
                <span className="line_home_divider"></span>
                çətinliyin üstəsindən gəlməyə hazırdır.
              </p>
              <button onClick={() => handleNavigateVacancy(`${vacantion.forwarding}${vacantion.id}`)}>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig animate__slow">
                  <span>Müraciət et</span>
                  <img src={arrow} alt="button icon arrow right" />
                </AnimationOnScroll>
              </button>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
};

export default Career;
