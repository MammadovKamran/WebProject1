// @ts-nocheck
import React, { useState } from 'react';
import Hamburger from '../toolbox/hamburger/Hamburger';
import Slider from '../toolbox/hamburger/Slider';
import { useSelector } from 'react-redux';
import { selectAllLinks } from './navigationSlice';
import { GoTriangleRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './navigation.module.css';
import { nanoid } from '@reduxjs/toolkit';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const Navigation = ({ logo, enable, textColor, bgColor, isArticle, isHeader, isPrivacy }) => {
  const allLinks = useSelector(selectAllLinks);
  const navigate = useNavigate();

  const [view, setView] = useState('');
  const [hidden, setHidden] = useState('');
  const [secretkey, setSecretKey] = useState(nanoid());
  const [error, setError] = useState('');

  // !modal states and functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    localStorage.setItem('crm_login', secretkey);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [userPassword, setUserPassword] = useState('');

  const handleNavigation = () => {
    navigate('/');
  };

  const clickHandler = () => {
    setView('slider-visible slider-mb-visible');
    setHidden('');
  };

  const disableSlider = () => {
    setHidden('slider-hidden slider-mb-hidden ');
  };

  const handleClickCrmLogin = () => {

    if (userPassword === secretkey) {
      navigate('/login');
    } else {
      setError('Incorrect access code');
      setTimeout(() => setError(''), 3000);
    }
  };

  const renderedLinks = allLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link
          className={`${styles.font_navigation_links} text-decoration-none relative  ${textColor} link-hover`}
          to={link.link}
        >
          {link.name}
          <span className={`${styles.padding_right_icon}`}>
            <GoTriangleRight className={`${styles.vertical_middle} `} />
          </span>
          {link.hasSubmenu && (
            <div className="absolute z-index-100">
              <div
                style={{
                  width: '200px',
                  height: '30px',
                  background: 'transparent'
                }}
              />
              <ul className="hoverable animate__animated animate__fadeIn">
                {link.subMenus.map((menu) => {
                  return (
                    <li className={`${styles.link_height}`} key={menu.name}>
                      <Link className={`${styles.link_none} text-upper`} key={menu.name} to={menu.link}>
                        {menu.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </Link>
      </li>
    );
  });

  return (
    <div
      className={`mobile-padding normalize-padding navigation-height d-flex align-center justify-between ${
        styles.navigation_padding_top
      } ${isArticle || isHeader || isPrivacy ? styles.ptAndPb : ''}`}
    >
      <Slider handleSliderClick={disableSlider} classData={view} conditionView={hidden} />
      <div className="d-flex">
        <img
          src={logo}
          alt="think wise logo  specially designed for website"
          className={styles.navigation_logo_margin_right}
          onClick={handleNavigation}
        />
        <ul className="mobile-display-none d-flex navigation-container">{renderedLinks}</ul>
      </div>
      <div className="d-flex align-center">
        <button className="glow-on-hover" onClick={handleOpen}>
          TWC CRM-ə daxil ol!
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              TWC CRM-ə daxil ol!
            </Typography>
            <br />
            <Input
              placeholder={error && error.length > 0 ? error : 'icazə kodunuz buraya...'}
              className="mb-3"
              aria-labelledby="password"
              name="password"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <br />

            <Fab variant="extended" onClick={handleClickCrmLogin}>
              <NavigationIcon size="medium" />
              Navigate
            </Fab>
          </Box>
        </Modal>
        <Hamburger bgColor={bgColor} handleClick={clickHandler} />
      </div>
    </div>
  );
};

export default Navigation;
