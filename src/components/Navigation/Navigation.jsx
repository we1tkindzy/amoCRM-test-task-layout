import React from 'react';
import './style.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="/#">
            Услуги
          </a>
        </li>

        <li className="navigation__item">
          <a className="navigation__link" href="/#">
            Виджеты
          </a>
        </li>

        <li className="navigation__item">
          <a className="navigation__link" href="/#">
            Интеграции
          </a>
        </li>

        <li className="navigation__item">
          <a className="navigation__link" href="/#">
            Кейсы
          </a>
        </li>

        <li className="navigation__item navigation__item--desktop">
          <a className="navigation__link" href="/#">
            Сертификаты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
