// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import ContactForm from './../common/contact-form/ContactForm';
import ParticlesBg from 'particles-bg';
import styles from './services.module.css';
// !----------------------------------------------------------
import headerImage from './assets/img/biznesplanvetie/header.png';
import sectionImage from './assets/img/biznesplanvetie/section.png';
import topicImage1 from './assets/img/biznesplanvetie/topic-1.png';
import topicImage2 from './assets/img/biznesplanvetie/topic-2.png';
import topicImage3 from './assets/img/biznesplanvetie/topic-3.png';
import topicImage4 from './assets/img/biznesplanvetie/topic-4.png';
import topicImage5 from './assets/img/biznesplanvetie/topic-5.png';
import topicImage6 from './assets/img/biznesplanvetie/topic-6.png';

const ServicesBusinessPlan = () => {
  return (
    <div className={`text-white`}>
      <ParticlesBg bg={true} type={'circle'} />{' '}
      <ServicesHeaderDash
        img={headerImage}
        isBlack={false}
        textStructure={'Biznes plan və Texniki-iqtisadi əsaslandırmalar'}
        textStructureData={'Business plan, technical and economic justifications'}
      />
      <div className={`${styles.container} text-white`}>
        <section className={`${styles.header_section} d-flex`}>
          <div className={`${styles.header_section_title_container} d-flex direction-column  align-end`}>
            <div className={` d-flex direction-column`}>
              <span className={`${styles.sub_header} text-white`}>BİZNES PLAN VƏ TİƏ</span>
              <span className={`${styles.service_title} text-white`}>Biznesinizi bizimlə inkişaf etdirin</span>
            </div>
          </div>
          <div className={`${styles.paragraph_section} d-flex align-center`}>
            <p className="text-white">
              Mövcud biznes ekosistemində şirkətin xarici resurslar vasitəsilə maliyyələşdirilməsinə yüksək tələbat
              yaranmışdır. Fəaliyyətlərini maliyyələşdirmək və genişləndirmək üçün şirkətlər maliyyə institutlarından
              kredit almaq və ya investorlardan investisiya cəlb etmək üçün müəyyən çətinliklərlə üzləşirlər. Bizim
              çoxsaylı uğurlu əməkdaşlıqlardan formalaşmış biznes plan təcrübəmiz şirkətlərə maliyyə vəsaitlərini rahat
              və səmərəli şəkildə əldə etməyə kömək göstərəcəkdir.
            </p>
          </div>
        </section>

        <div className={`${styles.content_container} text-white`}>
          <section>
            <img className={`${styles.section_image} text-white`} src={sectionImage} alt="" />
            <div className={`${styles.section_image_desc} text-white`}>
              <p className="text-white">
                Biznes plan təşkilatın vizyonunu ifadə edərək, ona hansı vasitələr və zaman aralığında nail olacağını
                təsvir edən vahid biznes sənədidir. Biznes plan investorlar, partnyorlar, işçilər və idarə heyətinə
                hədəfə doğru nəticələri ölçmək üçün əsas istinad nöqtəsi hesab olunur. Bundan əlavə, biznes plan azad
                iqtisadi zonalarda rezidentura almaq, subsidiyalar əldə etmək və digər bu kimi üstünlüklərdən
                yararlanmaq üçün istifadə edilə bilər.
              </p>
              <br />
              <p className="text-white">
                Maliyyə, marketinq və əməliyyat ekspertlərindən ibarət peşəkar komandamız biznes planların müxtəlif
                məqsədlər üçün və xüsusilə sizin biznes ehtiyaclarına uyğun formatda tərtib olunmasında sizə rəhbərlik
                edəcəkdir.
              </p>
            </div>
          </section>

          <section className={`${styles.extra_services_section} d-flex direction-column align-center`}>
            <span className={`${styles.sub_header} text-white`}>BİZNES PLAN VƏ TİƏ</span>
            <span className={`${styles.service_details_title} text-white`}>
              Hazırladığımız biznes planlar özündə aşağıdakıları ehtiva edir
            </span>
            <div className={`d-flex flex-wrap businesPlan-images`}>
              <div className={`${styles.image_item_section} text-white`}>
                <img className={`${styles.image_item} text-white`} src={topicImage1} alt="" />
                <span className={`${styles.image_subtitle} text-white`}>Biznes modeli</span>
              </div>
              <div className={`${styles.image_item_section} text-white`}>
                <img className={`${styles.image_item} text-white`} src={topicImage2} alt="" />
                <span className={`${styles.image_subtitle} text-white`}>Bazar həcmi</span>
              </div>
              <div className={`${styles.image_item_section} text-white`}>
                <img className={`${styles.image_item} text-white`} src={topicImage3} alt="" />
                <span className={`${styles.image_subtitle} text-white`}>Marketinq planı</span>
              </div>
              <div className={`${styles.image_item_section} text-white`}>
                <img className={`${styles.image_item} text-white`} src={topicImage4} alt="" />
                <span className={`${styles.image_subtitle} text-white`}>Maliyyə planı</span>
              </div>
              <div className={`${styles.image_item_section} text-white`}>
                <img className={`${styles.image_item} text-white`} src={topicImage5} alt="" />
                <span className={`${styles.image_subtitle} text-white`}>Riskin qiymətləndirilməsi</span>
              </div>
              <div className={`${styles.image_item_section} text-white`}>
                <img className={`${styles.image_item} text-white`} src={topicImage6} alt="" />
                <span className={`${styles.image_subtitle} text-white`}>Texniki plan</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ContactForm isBlackBG={true} />
      <Footer />
    </div>
  );
};

export default ServicesBusinessPlan;
