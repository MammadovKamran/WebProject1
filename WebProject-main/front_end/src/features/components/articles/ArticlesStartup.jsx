// @ts-nocheck
import React from 'react';
import ArticleHeaderDash from './ArticleHeaderDash';
import Footer from './../../footer/Footer';
import { useNavigate } from 'react-router-dom';
import styles from './articles.module.css';
// !----------------------------------------------------------
import articleImgPng1 from './assets/img/alcohol-small.png';
import articleImgPng2 from './assets/img/cargo-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import coverImgPng from './assets/img/startup-cover.png';
import sectionImgPng from './assets/img/startup-section.png';
import SearchForm from './SearchForm';
import ParticlesBg from 'particles-bg';
const ArticlesStartup = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };
  return (
    <div className={`text-white`}>
       <ParticlesBg type={"tadpole"} bg={true} color={"#123499"} />
      <ArticleHeaderDash
        headerText="məqalələr/Startap/Azərbaycanın startap ekosİstemİnİn çətİnlİyİ hansılardır?"
        isArticle={true}
      />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}  text-white`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}  text-white`}>
            Azərbaycanın startap ekosisteminin çətinliyi hansılardır?
          </p>
          <section className={`${styles.article_paragraph}  text-white`}>
            <p>
              1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan çox
              ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən böyük
              subscription-əsaslı kontent izləmə oyunçusudur. Şirkətin bu müddətə qədərki inkişaf strategiyasını 4
              mərhələyə bölmək olar.
            </p>
            <p className={`${styles.paragraph_title}  text-white`}>
              TWC-də biz inanırıq ki, startap yaratmaq ən çətin, ancaq qurucuların karyeralarında özlərindən daha böyük
              bir şey yarada biləcəkləri ən vacib təşəbbüsdür.
            </p>
          </section>
          <img src={sectionImgPng} alt="" className={`${styles.section_image}  text-white`} />
          <section className={`${styles.article_paragraph}  text-white`}>
            <p className={`${styles.paragraph_title}  text-white`}>Qlobal və yerli:</p>
            <p>
              Qlobal bazarlarda startaplara olan marağın dollar baxımından trendi son illərlə müqayisədə hazırda hər
              dörd startap böyümə mərhələsi üçün rekord həddədir. Ancaq TWC-yə görə Azərbaycanın startap ekosistemi üç
              səbəbə əsasən qlobal tempi tutmaqdan bir xeyli uzaqdır, baxmayaraq ki, son onillikdə startaplara olan
              maraq həm sahibkarlarda, həm də istiqamətlənməsi mükəmməlikdən uzaq olan dövlət institutlarında
              yaranmışdır.
              <ul className={`${styles.list_group}  text-white`}>
                <li>
                  Birincisi, sahibkarlar tərəfindən sürətli MVP-lərin və sürətli feedback loopların yaradıla
                  bilinməməsidir.
                </li>
                <li>İkincisi, yerli investorlara keçidin limitli olması.</li>
                <li>
                  Üçüncü, dövlət institutları tərəfindən açıq olan maliyyələşmə kriteriyalarının sərt və qeyri-müəyyən
                  olması.
                </li>
              </ul>
            </p>
            <p className={`${styles.paragraph_title}  text-white`}>Bizim dəstəyimiz:</p>
            <p>
              TWC-nin peşəkar və startap təcrübəsi olan biznes konsultantlarının həm yerli həm də xarici bazarlarda
              startaplara fərqli böyümə mərhələlərində dəstəyi var. Əməliyyat tərəfdən, buna ideyanın qiymətlədirilməsi,
              MVP-nin yaradılması, ilk istifadəçilərin cəlb edilməsi, maliyyələşməyə hazırlanma, PMF-ə çatma və online &
              offline auditoriyanın qurulması daxildir. Maliyyələşmə tərəfdən, buna pre-seed, seed, Stage A, Stage A+ və
              Exit (VC, PE, Strateji Alıcı və IPO) maliyyələşməsi daxildir.
            </p>
            <p>TWC-də bizim şüarımız qeyri-müəyyənliyi qucaqlamaqdır.</p>
          </section>

          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}  text-white`}>
              <p className={`${styles.last_edited_time}  text-white`}> 7 Sentyabr, 2021</p>
              <p className={`${styles.author_name}  text-white`}>Anar İsmayılov</p>
            </div>
          </section>
        </section>
        <section className={`${styles.aside_container}  text-white`}>
          <div className={`${styles.aside_latest_articles}  text-white`}>
            <p className={`${styles.aside_latest_articles_title}  text-white`}>Ən son məqalələr</p>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/alcohol')}
            >
              <img className={`${styles.aside_latest_articles_img}  text-white`} src={articleImgPng1} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}  text-white`}>14.10.2021</p>
                <p className={`${styles.aside_latest_articles_desc}  text-white`}>
                  Böyüyən qlobal industriya satışları...
                </p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/logistics')}
            >
              <img className={`${styles.aside_latest_articles_img}  text-white`} src={articleImgPng2} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}  text-white`}>23.12.2021</p>
                <p className={`${styles.aside_latest_articles_desc}  text-white`}>Azərbaycanda karqo şirkətləri...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/finance')}
            >
              <img className={`${styles.aside_latest_articles_img}  text-white`} src={articleImgPng3} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}  text-white`}>18.01.2022</p>
                <p className={`${styles.aside_latest_articles_desc}  text-white`}>
                  Söhbət şirkətlərin özlərini maliyyə...
                </p>
              </div>
            </div>
            <SearchForm />
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default ArticlesStartup;
