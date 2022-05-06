// @ts-nocheck
import React from 'react';
import ArticleHeaderDash from './ArticleHeaderDash';
import Footer from './../../footer/Footer';
import { useNavigate } from 'react-router-dom';
import styles from './articles.module.css';
// !----------------------------------------------------------
import articleImgPng1 from './assets/img/startup-small.png';
import articleImgPng2 from './assets/img/cargo-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import coverImgPng from './assets/img/alcohol-cover.png';
import graphImg1 from './assets/img/alcohol-graph-1.png';
import graphImg2 from './assets/img/alcohol-graph-2.png';
import SearchForm from './SearchForm';
import ParticlesBg from 'particles-bg';
const ArticlesAlcohol = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };

  return (
    <div className={`text-white`}>
       <ParticlesBg type={"tadpole"} bg={true} color={"#123499"} />
      <ArticleHeaderDash
        headerText="MəqalələR/ALKOQOL/Böyüyən qlobal İndustrİya satışları İstehlak dalğası üzərİndə deyİl"
        isArticle={true}
      />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}  text-white`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}  text-white`}>
            {' '}
            Böyüyən qlobal industriya satışları istehlak dalğası üzərində deyil
          </p>
          <section className={`${styles.article_paragraph}  text-white`}>
            <p className="text-white">
              Alkoqollu içkilər senayesinin yeni dövründə bir şey dəqiqdir: premiumizasiya bazar mənzərəsini həmişəlik
              dəyişəcək. Sürətli dəyişən istehlakçı davranışları rəqabət balansına təsir göstərdiyi üçün zəif oyunçular
              mövqelərini qorumaqda əziyyət çəkir.
            </p>
            <p className="text-white">
              Qalib olmaq üçün oyunçular cəsarətli hərəkətlər etməlidir. Ancaq, hazırki premiumizasiya dalğasını
              üstələyə bilmək üçün alkoqol istehlakı trendlərinin şirkətlərin bizneslərinə necə təsir etdiyini və hansı
              strategiyaların tətbiq edilməsini tapmalıdır.
            </p>

            <p className={`${styles.paragraph_title}  text-white`}> Hazırki trendlər</p>
            <p className="text-white">
              <span className={`${styles.bold_text}  text-white`}> Premiumizasiya:</span>
              Həm qlobal, həm də yerli perspektivdən baxdıqda dəyişən yaş strukturu və insanların səhhətlərinə olan
              diqqətləri alkoqol istehlakına mənfi təsir göstərir (aşağıdakı cədvələ nəzər yetirin); bir çox ölkədə
              alkoqol istehlakı ya mənfi ya da dəyişməz olaraq qalır.
            </p>
            <img src={graphImg1} alt="" className={`${styles.section_image}  text-white`} />
            <p className="text-white">
              Ancaq bu, şirkətlər üçün satışların azalmasına səbəb olmur, əksinə daha yüksək qiymətlərə görə satışların
              artmasına gətirib çıxarır (aşağıdakı cədvələ nəzər yetirin) xüsusilə inkişaf etmiş və sənayeləşmiş
              ölkələrdə baxmayaraq ki, inkişaf etməkdə olan ölkələr üçün son illərdə istehlakın bazar həddinin yetişməsi
              müşahidə olunur.
            </p>
            <img src={graphImg2} alt="" className={`${styles.section_image}  text-white`} />
            <p className="text-white">
              Ancaq bu, şirkətlər üçün satışların azalmasına səbəb olmur, əksinə daha yüksək qiymətlərə görə satışların
              artmasına gətirib çıxarır (aşağıdakı cədvələ nəzər yetirin) xüsusilə inkişaf etmiş və sənayeləşmiş
              ölkələrdə baxmayaraq ki, inkişaf etməkdə olan ölkələr üçün son illərdə istehlakın bazar həddinin yetişməsi
              müşahidə olunur.
            </p>
            <p className="text-white">
              AB InBev, Heineken, DIAGEO, Pernod Ricard ve Constellation Brands kimi ən böyük qlobal oyunçulara
              baxdığımızda oxşar tendensiyanı fərqli formada görürük. Məsələn bu oyunçuların hamısı satışlarının əksər
              hissəsini bir neçə bestsellerlərdən edir, hansi ki, bu bestsellerlər aqressiv şəkildə marketinq
              kampaniyaları tərəfindən dəstəklənmişdir.
            </p>
          </section>
          <p className={`${styles.article_features_desc_alcohol}  text-white`}>
            “Azərbaycanda alkoqol istehsalçılarının sayı məhduddur, lakin bazar çoxlu sayda (təxmini 120) özəl etiketlər
            (private label) tərəfindən kannibalizasiyaya uğrayır”
          </p>
          <section className={`${styles.article_paragraph}  text-white`}>
            <p className="text-white">Bir alkoqol istehsal edən şirkətin kommersiya direktoru</p>
            <p className="text-white">
              Bu cür kampaniyalar nisbətən aşağı brend məlumatlılığı ilə xarakterizə olunan sektorda olduqca təsirli
              olduğu müşahidə olunur. Məsələn, çoxlu yerli ve xarici alkoqol brendləri tərəfindən retaillərin rəflərində
              yer buraxılmayan Azerbaycan kimi bir bazarda rəqabət əsas olaraq qiymət faktoruna əsaslanır, bu səbəbdən
              də müştərilərin istəklərini və ehtiyaclarını nəzərə alan düzgün brend strategiyası müştəriləri premium
              brendlərə “trade up”-a inandıracaqdır. Rəqabətə gəldikdə isə yerli alkoqol istehsalçıları böyüməyə təkan
              verən və özəl etiketlər üzərində böyük rəqabət üstünlüyü yaradan marketinq strategiyalarını yarada biləcək
              maliyyə və daxili nou-hau-ya sahibdir.
            </p>
            <p className="text-white">
              Bu trendə əsasən istehlakçılara gəldikdə isə, ortalama olaraq, onlar daha çox içmək istəmirlər, “yaxşı”
              içmək istəyirlər. Həm qlobal, həm də yerli alkoqol istehlakçılarına gəldikdə isə onlar müştərilərə mümkün
              qədər daha yaxın olmalarını tələb edən yeni reallığa uyğunlaşmalıdırlar.
            </p>
            <p className="text-white">
              <span className={`${styles.bold_text}  text-white`}> Sağlamlığa qayğı:</span> Sağlamlıqla əlaqəli
              narahtatlığın başında olan qara kölgə, istehsalçılara istehlakçıların saglamlığına vurğu edən brendlər
              vasitəsilə əhəmiyyətli bazar payı əldə etməyə şərait yaradır. Bu cür istehlakçı qrupları əsasən üst yaş
              qrupunda olanlardan və sağlamlıqlarına diqqət yetirən Milenniallardan ve Gen Z-dən ibarətdir. Belə bir
              trend öz-özlüyündə Alkoqolsuz və Az Alkoqollu İçkilər (AAAI) doldura biləcəyi kateqoriya genişlənməsinə
              ehtiyaca gətirib çıxarır. AB InBev kimi bəzi sektor oyunçuları üçün AAAI-nin sadəcə pivə kateoqiyası üçün
              2025-ci ilə qədər ümumi satışların dörddə birini təşkil edəcəyini gözləyirlər.
            </p>
            <p className="text-white">
              Buna görə, istehlakçıya gəldikdə, ortalama olaraq, onlar sadəcə yaxşı içmək istəmirlər, həm də daha sağlam
              içmək istəyirlər.
            </p>
            <p className="text-white">
              <span className={`${styles.bold_text}  text-white`}> Satınalma tərzində dəyişiklik:</span>
              COVID-19-un başlanğıcından etibarən, e-ticarət sahəsində olan bir çox retailerlər üçün satışlar
              əhəmiyyətli dərəcədə artıb – bir çox regionda illik satışda artım 100%-in üzərində olub. Hazırda, həm
              qlobal həm də yerli bazarlarda retailerlərin illik və rüblük paylaşdığı məlumatlara əsasən alkoqolun
              onlayn satışı digər məhsul kateqoriyaları ilə müqayisədə xeyli aşağıdır. Millionarier’s Club-un
              araşdırmasına əsasən 2019-cu il ilə müqayisədə 2020-ci ildə alkoqolun qlobal e-ticaret satışları 45% artıb
              və nəzərə alsaq ki, Azerbaycanda e-ticarətə nüfuz dərəcəsi 2020-ci il üçün 33% olub (inkişaf etmiş
              ölkələrdə bu rəqəm 70%-in üzərindədir), bu isə istehsalçıların distribusiya kanallarını genişləndirərək
              satış artımı və mənfəət gətirə biləcəkləri imkanının olduğunu göstərir. Bu plan yüksək keyfiyyətli bir veb
              sayt və ya tətbiq, etibarlı logistika və dəqiq tənzimlənmiş inventar idarəçiliyini nəzərə almalıdır.
            </p>
          </section>

          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}  text-white`}>
              <p className={`${styles.last_edited_time}  text-white`}> 14 Oktyabr, 2021</p>
              <p className={`${styles.author_name}  text-white`}>Anar İsmayılov</p>
            </div>
          </section>
        </section>
        <section className={`${styles.aside_container}  text-white`}>
          <div className={`${styles.aside_latest_articles}  text-white`}>
            <p className={`${styles.aside_latest_articles_title}  text-white`}>Ən son məqalələr</p>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/startup')}
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

export default ArticlesAlcohol;
