import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './../../css/style.css';

//
import logo from '../../images/logo-2.png';
import login from '../../images/bg-login2.png';
import loginbg from '../../images/bg-login.jpg';

const Login = (props) => {
  const [email, setEmail] = useState('');
  let errorsObj = { email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === '') {
      errorObj.email = 'Email is Required';
      error = true;
    }
    if (password === '') {
      errorObj.password = 'Password is Required';
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }

    if (email === 'demo@example.com' && parseInt(password) === 123456) {
      navigate('/crm-home-page');
    }
  }


  const handleRegisterRouting = () => {
    navigate('/register');
  }

  return (
    <div className="login-main-page" style={{ backgroundImage: 'url(' + loginbg + ')' }}>
      <div className="login-wrapper">
        <div className="login-aside-left" style={{ backgroundImage: 'url(' + login + ')' }}>
          <Link to="/dashboard" className="login-logo">
            <img src={logo} alt="" />
          </Link>
          <div className="login-description">
            <h2 className="text-black  mb-2">Statusu yoxlayın</h2>
            <p className="fs-12">
              Diqqət! əgər siz TWC əməkdaşı deyilsinizsə və ya TWC şirkətinin əməkdaşlıq etdiyi tərəf müqabillərinin
              nümayəndəsi deyilsinizsə yalnız müştəri olaraq qeydiyyatdan keçib servislərimizdən yararlana və ya uyğun
              vakansiyalarımıza müraciət edə bilərsiniz{' '}
            </p>
            <ul className="social-icons mt-4">
              <li>
                <Link to={'#'}>
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to={'#'}>
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to={'#'}>
                  <i className="fa fa-linkedin" />
                </Link>
              </li>
            </ul>
            <div className="mt-5">
              <Link to={'#'} className="text-black mr-4">
                Gizlilik Siyasəti
              </Link>
              <Link to={'#'} className="text-black mr-4">
                Əlaqə
              </Link>
              <Link to={'#'} className="text-black">
                © 2022 TWC.AZ
              </Link>
            </div>
          </div>
        </div>
        <div className="login-aside-right">
          <div className="row m-0 justify-content-center h-100 align-items-center">
            <div className="col-xl-7 col-xxl-7">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form-1">
                      <div className="mb-4">
                        <h3 className="text-primary mb-1">TWC-yə xoş gəlmisiniz!</h3>
                        <p className="">Aşağıdakı məlumatları tamamlayın</p>
                      </div>
                      {props.errorMessage && (
                        <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                          {props.errorMessage}
                        </div>
                      )}
                      {props.successMessage && (
                        <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                          {props.successMessage}
                        </div>
                      )}
                      <form onSubmit={onLogin}>
                        <div className="form-group">
                          <label className="mb-2 ">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                          <label className="mb-2 ">
                            <strong>Şifrə</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                        </div>
                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group">
                            <div className="custom-control custom-checkbox ml-1 ">
                              <input type="checkbox" className="custom-control-input" id="basic_checkbox_1" />
                              <label className="custom-control-label" htmlFor="basic_checkbox_1">
                                Tərcihimi yadda saxla
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">
                            Daxil ol
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-2">
                        <p className="">
                          Hesabınız yoxdur?{' '}
                          <span className="text-primary" onClick={handleRegisterRouting}>
                            Qeydiyyatdan keçmək
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
