// @ts-nocheck
import React from 'react';
import ArticleHeaderDash from './ArticleHeaderDash';
import Footer from './../../footer/Footer';
import { useNavigate } from 'react-router-dom';
import { SiInstagram } from 'react-icons/si';
import { ImLinkedin2, ImFacebook } from 'react-icons/im';
import styles from './articles.module.css';
// !----------------------------------------------------------
import articleImgPng1 from './assets/img/alcohol-small.png';
import articleImgPng2 from './assets/img/cargo-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import coverImgPng from './assets/img/ntflx.png';
import SearchForm from './SearchForm';
import ParticlesBg from 'particles-bg';

const Articles = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };

  return (
    <div className={`text-white`}>
       <ParticlesBg type={"tadpole"} bg={true} color={"#123499"} />
      <ArticleHeaderDash headerText="məqalələr/NETFLix/NETFLix BİZNES MODELİNİ NECƏ DƏYİŞDİ" isArticle={true} />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}  text-white`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}  text-white`}> Netflix biznes modelini necə dəyişdi</p>
          <section className={`${styles.article_paragraph}  text-white`}>
            <p className="text-white">
              1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan çox
              ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən böyük
              subscription-əsaslı kontent izləmə oyunçusudur. Şirkətin bu müddətə qədərki inkişaf strategiyasını 4
              mərhələyə bölmək olar.
            </p>
            <p className={`${styles.paragraph_title} text-white`}>
              {' '}
              “Hər-DVD icarəsi üçün ödəniş konsepsiyasından aylıq sabit ödənişli subscription-a keçid”
            </p>

            <p className="text-white">
              Birinci mərhələdə, idarə heyəti, sürətli böyüyən e-ticarətə addım atmaq üçün DVD’lərin VHS lentləri ilə
              müayisədə inventarlaşdırma və göndərmə xərclərinin üstünlüyünü nəzərə alaraq Netflixi dünyanın ilk DVD
              kirayə mağazası olaraq qurdular. Daha sonra biznes modeli hər-icare-üçün-ödənişdən
              aylıq-sabit-ödənişli-subscription konsepsiyasına çevrildi və bu nəticədə Blockbuster üzərində rəqabət
              üstünlüyü (limitsiz kirayə, son tarixsiz kirayə, cəriməsiz gecikmə, eyni gündə çatdırılma və s.) ilə
              nəticələndi. 2002-ci ildəki IPO-dan (İlkin Kütləvi Təklif) sonra, şirkət hələ də mənfəətə çatmasada,
              təxminən 1 milyon aylıq abunəçiyə sahib idi.
            </p>
            <p className={`${styles.paragraph_title}  text-white`}>
              {' '}
              “Online məhdudiyyətsiz kontent izləmənin industriyada inqilabı”
            </p>
            <p className="text-white">
              İkinci mərhələdə, Netflix abunəçilərinə 2007-ci ildə fərdi kompüterlərdən anında məhdudiyyətsiz kontent
              izləmə imkanı təqdim edərək Media və Əyləncə industriasında inqilab etdi və 2019-cu ilin sonunda DVD
              seqmenti ümumi satışların 2%-dən azını təşkil etdi. Əlavə olaraq, Netflix-in strategiyası ABŞ-dan qonşu
              bazarlara genişlənmək idi. Demək olar ki, potensial bazarları ev-bazarına bənzər istifadəçi
              xüsusiyyətlərinə malik olanlara limitləmək məcburiyyətində qaldılar. Məsələn, coğrafi, iqtisadi və
              sosial-demoqrafik xüsusiyyətlərinə görə Kanadaya 2010-cu ildə daxil oldular.
            </p>
            <p className={`${styles.paragraph_title}  text-white`}> “Netflix Originals ilə unikal satış üstünlüyü”</p>
            <p className="text-white">
              Üçüncü mərhələdə, komanda 2015-ci ilə qədər 50 ölkəyə genişlənərək daha sürətli genişlənmə strategiyası
              həyata keçirməyə başladı. Burada, genişlənmə strategiyasının mümkünlüyü üçün maliyyə cəhətdən dayanıqlı
              istifadəçi bazası, yüksək sürətli internetin mövcudluğu və ağıllı telefonlardan, tabletlərdən və smart
              televizorlardan geniş istifadə əsas faktorlar idi. Bununla birlikdə, başlanğıcda genişlənmənin sürəti bir
              neçə çətinliyə görə limitli idi. Birincisi, 2012 -ci ilə qədər Netflix öz kontentini istehsal etmirdi,
              buna görə də şirkət, kontent platformasını digər kontent izləmə vasitələrindən (məsələn, kabel TV)
              fərqləndirmək və müştəriləri Netflix-ə abunə olmağa inandırmaq üçün sadəcə özünə məxsus kontent təklif
              etməli idi. Bunun üçün isə qlobal lisenziya hüquqlarına sahib olmalı idi. İkincisi, Asiyada axın edən
              pirat kontent izləmı çox sıradandır. Buna görə də kontent Netflix-ə məxsus olmadıqda, Netflix-in unikal
              satış üstünlüyü o qədər də cəlbedici deyildi. Bu səbəbdən idarəetmə qrupunun bu problemlərə həlli,
              şirkətin kontent lisenziyasından müstəsna genişlik və keyfiyyətə malik kontent yaradıcısına çevrilməsini
              təmin edən Netflix Originals-ı (+1.500 kontent 2021 May etibarilə) yaradıb, ona fokuslanmaq idi.
            </p>
            <p className={`${styles.paragraph_title}  text-white`}>
              {' '}
              “İstifadəçi ehtiyaclarını qarşılayaraq qlobal genişlənmə”
            </p>

            <p className="text-white">
              {' '}
              Dördüncü mərhələdə Netflix, daha çox hədəflənmiş bir məzmun istehsal modeli və daha hədəflənmiş bir
              marketinq modeli ilə çox sürətlə genişlənməsini dəstəkləmək üçün əlindən gələn hər şeyi etdi və nəticədə
              2020-ci ilə qədər 190-dan çox ölkəyə genişləndi. Keçən on illiyin əvvələrindən industrilaşmış ölkələrdə
              kabel kəsmə inqilabının bir hissəsi olaraq istifadəçilərin məzmun istehlakı zövqlərinin dəyişməsi
              səbəbindən bir çox rəqib artıq tədricən artan itki dərəcələri (churn rate) ilə üzləşməyə başladığı üçün
              Netflixin böyüməsi sadəcə müstəqil təkliflərdən deyil, həm də rəqib kabel televiziyaları ilə əməkdaşlıdan
              (məsələn, T-Mobile, Comcast) gəldi. Bundan əlavə, istifadəçi bazasının artması ilə Netflix iki istiqamətdə
              əhəmiyyətli sıçrayışlar etdi. Birincisi, istifadəçi məlumatları üzərində aparılan təcrübələr, kontentin
              orijinal olaraq yerli olarsa, platformanın qlobal auditoriya cəlb edə biləcəyi aşkar olundu. İkincisi,
              Netflix, inkişaf etməkdə olan bazarlarda istifadəçilərin mobil telefonları vasitəsi ilə internetə daxil
              olmağa meyilli olduqlarını aşkar etdi. Buna görə də şirkət daha aşağı sürətli internet ilə daha səmərəli
              content izləmə və daha rəqabətli aylıq abunə haqqı təklif etdi. Bu səbəbdən Asiya və Sakit Okean ölkələri
              istifadəçilərinin sayı 2017-ci ildə 7 milyondan 2021-ci ilin birinci yarısına 28 milyona yüksəldi.
            </p>
            <p className="text-white">
              BigTechs (Amazon, Google, Apple və ənənəvi Media və Əyləncə şirkətləri tərəfindən hazirda axın edilən bir
              sənayedə, Netflix-in rəqabət üstünlüyünü qoruya biləcəyi və son on ildən bəri kabel kəsənlər tərəfindən
              dəstəklənən bazar artımını daha da ələ ala bilib ya da bilməyəcəyi qlobal Telekommunikasiya, Media və
              Əyləncə industriasının dinamikasının necə formalaşması üçün çox maraqlıdır.
            </p>
          </section>

          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}  text-white`}>
              <p className={`${styles.last_edited_time}  text-white`}> 8 Oktyabr, 2021</p>
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
              <img
                className={`${styles.aside_latest_articles_img}  text-white`}
                src={articleImgPng1}
                alt="think wise business articles"
              />
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
              <img
                className={`${styles.aside_latest_articles_img}  text-white`}
                src={articleImgPng2}
                alt="think wise business articles"
              />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}  text-white`}>23.12.2021</p>
                <p className={`${styles.aside_latest_articles_desc}  text-white`}>Azərbaycanda karqo şirkətləri...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/finance')}
            >
              <img
                className={`${styles.aside_latest_articles_img}  text-white`}
                src={articleImgPng3}
                alt="think wise business articles"
              />
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

export default Articles;
