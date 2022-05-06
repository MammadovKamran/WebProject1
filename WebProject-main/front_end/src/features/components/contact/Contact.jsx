// @ts-nocheck
import React, { useState } from 'react';
import styles from './contact.module.css';
// !----------------------------------------------------------
import GoogleMapApiExample from '../../toolbox/googleapis/googlemap/GoogleMapApiExample';
import { useDispatch } from 'react-redux';
import { addContacts } from './contactsSlice';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


const Contact = () => {

  Contact.defaultProps = {
    
  }

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const isDisabled = [fullName, email, emailConfirm, title, message].every(Boolean) && email === emailConfirm;

  const handleSocialRouting = (paramsSocialMedia) => {
    window.location = `https://${paramsSocialMedia}`;

    
  };

  const handleSubmitContactForm = (e) => {
    if (isDisabled) {
      dispatch(addContacts(fullName, email, title, message));

      setTimeout(() => {
        setFullName('');
        setEmail('');
        setTitle('');
        setMessage('');
      }, 3000);
    }

    e.preventDefault();
  };

  return (
    <main>
      <section className={`${styles.map_numbers}`}>
        {/* !GOOGLE MAP LOADER SETTED HERE SOURCE FROM TOOLBOX GOOGLEMAP */}

        <div className={`${styles.bg_gradient}`}>
          <h5>
            Daha da yaxşısı gəlin, <span>üz üzə görüşək</span>
          </h5>
          <p>Müştərilərimizə dəyər veririk. iş saatları daxilində bizi istədiyiniz zaman ziyarət edə bilərsiniz</p>
        </div>
        <div>
          <GoogleMapApiExample />
        </div>
      </section>
      <section className={`${styles.pic_form}`}>
        <div className={`${styles.pic}`}>
          <div>
            <h1>
              Sizin Biznesiniz üçün
              <span>ən yaxşı təklif!</span>
            </h1>
            <p>
              Biznesiniz üçün bazar araşdırması, satış, marketing, management <br /> consulting və.s bir çox kompleks
              həllər üçün TWC komandası sizin ən <br /> yaxin dostunuzdur.
            </p>
          </div>
        </div>
        <div className={`${styles.form}`}>
          {/* Reactstrap */}
          <form onSubmit={handleSubmitContactForm} autoComplete="off" className="gradient-custom">
            <p className="h2 text-center mb-4">Bizimlə əlaqə</p>

            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              pattern="(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$"
              placeholder="Ad Soyad"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <br />

            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email Adres"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              type="text"
              id="email-confirm"
              name="email-confirm"
              className="form-control"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              placeholder="Email Adres Təkrar"
              value={emailConfirm}
              onChange={(e) => setEmailConfirm(e.target.value)}
            />
            <br />

            <input
              type="text"
              id="title"
              name="title"
              className="form-control focus"
              placeholder="Movzu başlığı"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />

            <textarea
              type="text"
              id="message"
              name="message"
              className="form-control"
              placeholder="Mesaj Mətniniz..."
              rows={10}
              maxLength="500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                resize: 'none'
              }}
            ></textarea>
            <div className="text-center mt-4">
              <button className="btn bg-primary  btn-block btn-lg" type="submit">
                Göndər
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className={`${styles.section_contact_us}`}>
        <h3>Daim bizimlə əlaqədə qal</h3>
        <h4>Sosial mediada bizi izlə</h4>
        <div>
          <button onClick={() => handleSocialRouting('www.instagram.com')}>
            <FaInstagram className="mr-2" />
            İnstagram
          </button>
          <button onClick={() => handleSocialRouting('www.facebook.com/thinkwiseazerbaijan')}>
            <FaFacebookF className="mr-2" />
            facebook
          </button>
          <button onClick={() => handleSocialRouting('www.linkedin.com/company/think-wise-business-consulting/')}>
            <FaLinkedinIn className="mr-2" />
            linkedin
          </button>
        </div>
      </section>
    </main>
  );
};

export default React.memo(Contact);
