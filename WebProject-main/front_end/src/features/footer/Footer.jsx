// @ts-nocheck
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllFooterLinks } from './footerSlice';
import styles from './footer.module.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaLocationArrow } from 'react-icons/fa';
import { MdMarkEmailRead, MdAddCall } from 'react-icons/md';
import logo from './../components/common/assets/svg/navigation-black-logo.svg';

const Footer = () => {
  const allFooterData = useSelector(selectAllFooterLinks);

  // const renderedMenu = allFooterData.map((item) => {
  //   return (

  //   );
  // });

  const handleSocialRouting = (paramsSocialMedia) => {
    window.location = `https://${paramsSocialMedia}`;
  };

  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Daim bizimlə əlaqədə qal Sosial mediada bizi izlə:</span>
        </div>

        <div>
          <a className="me-4 text-reset" onClick={() => handleSocialRouting('www.instagram.com')}>
            <FaInstagram />
          </a>
          <a className="me-4 text-reset" onClick={() => handleSocialRouting('www.facebook.com/thinkwiseazerbaijan')}>
            <FaFacebookF />
          </a>
          <a
            className="me-4 text-reset"
            onClick={() => handleSocialRouting('www.linkedin.com/company/think-wise-business-consulting/')}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={logo} title="think-wise company logo" />
              </h6>
              <p>Biznesiniz inamlı etibarlı və ən əsası professional əllərdədir!</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Xidmətlərimiz</h6>
              <p>
                <a href="#!" className="text-reset">
                  Bazar Araşdırması
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Biznes Plan və TİƏ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Kapitallaşma
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Satış və Marketinq
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Strategiya və Maliyyə
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Təşkilati
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Doing Business In Azerbaijan
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4"></h6>
              <p>
                <FaLocationArrow /> &nbsp; Bakı şəhəri, Nobel prospekti 15, Azure Biznes mərkəzi, 17-ci mərtəbə, 118-ci
                otaq
              </p>
              <p>
                <a href="mailto:info@twc.az" className="text-reset">
                  <MdMarkEmailRead /> &nbsp; info@twc.az
                </a>
              </p>
              <p>
                <a href="tel:+994504471090" className="text-reset">
                  <MdAddCall /> &nbsp; +994 50 447 10 90
                </a>
              </p>
              <p>
                <a href="tel:+994124886819" className="text-reset">
                  <MdAddCall /> &nbsp; +994 12 488 68 19
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className="text-reset fw-bold" href="mailto:info@rahmanniftaliyev.com" target="_blank">
          Copyright © Designed &amp; Developed by senior developer Rahman Niftaliyev @info@rahmanniftaliyev.com 2022
        </a>
      </div>
    </footer>
  );
};

export default Footer;
