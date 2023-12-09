import React from 'react';
import TelegramIcon from 'assets/icons/icon-telegram.svg';
import ViberIcon from 'assets/icons/icon-viber.svg';
import WhatsAppIcon from 'assets/icons/icon-whatsapp.svg';
import './style.scss';

const Social = () => {
  return (
    <div className="social">
      <a className="social__phone-number" href="tel:+75555555555">
        +7&nbsp;555&nbsp;555-55-55
      </a>

      <ul className="social__list">
        <li className="social__item">
          <a className="social__link" href="/#">
            <img src={TelegramIcon} alt="Телеграмм" />
          </a>
        </li>

        <li className="social__item">
          <a className="social__link" href="/#">
            <img src={ViberIcon} alt="Вайбер" />
          </a>
        </li>

        <li className="social__item">
          <a className="social__link" href="/#">
            <img src={WhatsAppIcon} alt="Ватсап" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
