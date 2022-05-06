import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo-2.png';
import Loader from './Loader/Loader';
import { useDispatch } from 'react-redux';
import './../../css/style.css';

const Registration = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');
  let errorsObj = { email: '', password: '', username: '' };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(errorsObj);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUp = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };

    if ([username, email, password].some((stateData) => stateData === '')) {
      email === ''
        ? (errorObj.email = 'Email is required')
        : username === ''
        ? (errorObj.username = 'Username is required')
        : (errorObj.password = 'Password is required');
      setErrors(errorObj);
      error = true;
    } else if (email && password && username) {
      setSuccessMessage('Please wait...');
      navigate('/login');
    }

    setErrors(errorObj);
  };
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <img src={logo} alt="" />
                    </div>

                    <h4 className="text-center mb-4 text-white">Qeydiyyatdan keçin</h4>
                    {errors.email && (
                      <div className="bg-red-300 text-danger border border-red-900 p-1 my-2">{errors.email}</div>
                    )}
                    {successMessage && (
                      <div className="bg-green-300 text-danger text-green-900  p-1 my-2">{successMessage}</div>
                    )}
                    <form onSubmit={onSignUp}>
                      <div className="form-group">
                        <label className="mb-1 text-white">
                          <strong>Username</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="username"
                          name="name"
                          defaultValue={username || ''}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 text-white">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          defaultValue={email || ''}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                      </div>
                      <div className="form-group">
                        <label className="mb-1 text-white">
                          <strong>Şifrə</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue={password || ''}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                      <div className="text-center mt-4">
                        <input type="submit" className="btn btn-primary btn-block" value="Qeydiyyatdan keç" />
                      </div>
                    </form>
                    <div className="new-account mt-3 text-white">
                      <p>
                        Hesabınız var?{' '}
                        <Link className="text-primary" to="/login">
                          Daxil ol!
                        </Link>
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
  );
};

export default Registration;
