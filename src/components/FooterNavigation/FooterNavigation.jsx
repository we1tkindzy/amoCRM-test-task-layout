import React from 'react';
import TelegramIcon from 'assets/icons/icon-telegram.svg';
import ViberIcon from 'assets/icons/icon-viber.svg';
import WhatsAppIcon from 'assets/icons/icon-whatsapp.svg';
import './style.scss';

const FooterNavigation = () => {
  return (
    <ul className="footer-navigation">
      <li className="footer-navigation__item footer-navigation__item--about">
        <span className="footer-navigation__title">О&nbsp;компании</span>

        <ul>
          <li className="footer-navigation__link-item">
            <a href="/#">Партнёрская программа</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Вакансии</a>
          </li>
        </ul>
      </li>

      <li className="footer-navigation__item footer-navigation__item--menu">
        <span className="footer-navigation__title">Меню</span>

        <ul className="footer-navigation__menu">
          <li className="footer-navigation__link-item">
            <a href="/#">Расчёт стоимости</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#" className="footer-navigation__link">
              Кейсы
            </a>
            <a
              href="/#"
              className="footer-navigation__link footer-navigation__link--mobile"
            >
              Благодарность клиентов
            </a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Услуги</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#" className="footer-navigation__link">
              Благодарственные письма
            </a>

            <a
              href="/#"
              className="footer-navigation__link footer-navigation__link--mobile"
            >
              Кейсы
            </a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Виджеты</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Сертификаты</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Интеграции</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Блог на Youtube</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Наши клиенты</a>
          </li>

          <li className="footer-navigation__link-item">
            <a href="/#">Вопрос / Ответ</a>
          </li>
        </ul>
      </li>

      <li className="footer-navigation__item footer-navigation__item--contacts">
        <span className="footer-navigation__title">Контакты</span>

        <a className="footer-navigation__phone-number" href="tel:+75555555555">
          +7&nbsp;555&nbsp;555-55-55
        </a>

        <ul className="footer-navigation__social">
          <li className="footer-navigation__social-item">
            <a className="footer-navigation__social-link" href="/#">
              <img
                className="footer-navigation__social-img"
                src={TelegramIcon}
                alt="Телеграмм"
              />
            </a>
          </li>

          <li className="footer-navigation__social-item">
            <a className="footer-navigation__social-link" href="/#">
              <img
                className="footer-navigation__social-img"
                src={ViberIcon}
                alt="Вайбер"
              />
            </a>
          </li>

          <li className="footer-navigation__social-item">
            <a className="footer-navigation__social-link" href="/#">
              <img
                className="footer-navigation__social-img"
                src={WhatsAppIcon}
                alt="Ватсап"
              />
            </a>
          </li>
        </ul>

        <a
          href="https://yandex.ru/maps/?text=Москва, Путевой проезд 3с1, к 902"
          className="footer-navigation__address"
        >
          Москва, Путевой&nbsp;проезд&nbsp;3с1, к&nbsp;902
        </a>
      </li>
    </ul>
  );
};

export default FooterNavigation;
