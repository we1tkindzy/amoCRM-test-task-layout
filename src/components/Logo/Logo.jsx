import React from 'react';
import LogoIcon from 'assets/icons/logo.svg';
import './style.scss';

const Logo = () => {
  return (
    <div className="logo">
      <a className="logo__link" href="/#">
        <img className="logo__img" src={LogoIcon} alt="Логотип" width="140" height="24" />
      </a>

      <p className="logo__text">
        крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё 8&nbsp;странах
      </p>
    </div>
  );
};

export default Logo;
