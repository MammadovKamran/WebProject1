// @ts-nocheck
import React from 'react';
import ArticleHeaderDash from './ArticleHeaderDash';
import Footer from './../../footer/Footer';
import { useNavigate } from 'react-router-dom';
import styles from './articles.module.css';
// !----------------------------------------------------------
import articleImgPng1 from './assets/img/alcohol-small.png';
import articleImgPng2 from './assets/img/startup-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import coverImgPng from './assets/img/cargo-cover.png';
import sectionImgPng from './assets/img/cargo-section.png';
import SearchForm from './SearchForm';
import ParticlesBg from 'particles-bg';
const ArticlesStartup = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };
  return (
    <div className={` text-white`}>
       <ParticlesBg type={"tadpole"} bg={true} color={"#123499"} />
      <ArticleHeaderDash
        headerText="Məqalələr/Logİstİka/Komandamızın apardığı İlkİn araşdırmalara görə, Azərbaycanda hava..."
        isArticle={true}
      />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}  text-white`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}  text-white`}>Logistika</p>

          <section className={`${styles.article_paragraph}  text-white`}>
            <p className="text-white">
              Komandamızın apardığı ilkin araşdırmalara görə, Azərbaycanda hava yükdaşıma şirkətlərini seçərkən qiymət,
              qəbul məntəqələri və sürət aparıcı amillərdir.
            </p>
            <p className="text-white">
              Sənayedə nəzərə çarpacaq dərəcədə gərgin rəqabət aparıcı firmaları bazar payını artırmaq üçün yeni bir
              dəyər təklifi formalaşdırmağı tələb edir.
            </p>

            <p className="text-white">
              Hal-hazırda təqribən 55 hava yükdaşıma şirkəti mövcuddur. Bununla belə, onların əksəriyyəti eyni dəyər
              təklifləri üzərində rəqabət aparır. 1A rəqabət meyarları:
            </p>
          </section>
          <img src={sectionImgPng} alt="" className={`${styles.section_image}  text-white`} />
          <section className={`${styles.article_paragraph}  text-white`}>
            <p className="text-white">
              Qrafikdən də göründüyü kimi, firmaların əksəriyyəti dıyır təklifini bəyannamə doldurulma və konkret hədəf
              qruplarına müxtəlif tanıtım kampaniyaları təklif etməklə həyata keçirir. Karqo firmalarının əldə etməyə
              çalışdıqları digər mühüm amillər bölgələr daxilində qəbul məntəqələrinin sayını artırmaqdır.
            </p>

            <p className="text-white">
              Bununla belə, bizim mövzu ilə bağlı ilkin və ikinci dərəcəli araşdırmalarımız Azərbaycanda yükdaşıma
              sənayesinin gələcəyinin firmaların öz müştərilərinə daha çox fərdiləşdirilmiş təkliflər həyata
              keçirəcəyini proqnozlaşdırır. Daha dəqiq desək, müştərilərinizi digərlərindən daha yaxşı tanımaq vaxtı
              artıq yetişib!
            </p>

            <p className="text-white">
              Böyük onlayn B2C platformaları artıq bu strategiyanı qəbul ediblər. Məsələn, Amazon, Facebook və YouTube
              istifadəçilərinin nə istədiklərini onların özlərindən daha yaxşı bilir.
            </p>
          </section>
          <p className={`${styles.article_features_desc}  text-white`}>
            “Yüksək rəqabət və müştərilərin fərqlənən tələbləri Azərbaycandakı hava yükdaşıma şirkətlərini daha çox
            fərdiləşdirilmiş kampaniyalar təklif etmək üçün öz müştərilərinin məlumat bazasını toplayıb
            kateqoriyalaşdırmağın əhəmiyyətini artıracaq.”
          </p>
          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}  text-white`}>
              <p className={`${styles.last_edited_time}  text-white`}> 23 Dekabr, 2021</p>
              <p className={`${styles.author_name}  text-white`}>Çingiz Novruzzadə</p>
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
              onClick={() => handleNavigation('/ideas/startup')}
            >
              <img className={`${styles.aside_latest_articles_img}  text-white`} src={articleImgPng2} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}  text-white`}>07.09.2021</p>
                <p className={`${styles.aside_latest_articles_desc}  text-white`}>Azərbaycanın startap ekosis...</p>
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
