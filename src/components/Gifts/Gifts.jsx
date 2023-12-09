import React from "react";
import "./style.scss";

const Gifts = () => {
  return (
    <div className="gifts">
      <p className="gifts__title">
        Вместе с&nbsp;
        <span className="gifts__title-gradient">бесплатной консультацией</span>
        &nbsp;мы&nbsp;дарим:
      </p>

      <ul className="gifts__list">
        <li className="gifts__item">
          <span className="gifts__gift gifts__gift--mobile">Skype Аудит</span>

          <span className="gifts__gift">Виджеты</span>
          <p className="gifts__text">30&nbsp;готовых решений</p>
        </li>

        <li className="gifts__item">
          <span className="gifts__gift gifts__gift--mobile">
            30&nbsp;виджетов
          </span>

          <span className="gifts__gift">Dashboard</span>
          <p className="gifts__text">с&nbsp;показателями вашего бизнеса</p>
        </li>

        <li className="gifts__item">
          <span className="gifts__gift gifts__gift--mobile">Dashboard</span>

          <span className="gifts__gift">Skype Аудит</span>
          <p className="gifts__text">отдела продаж и&nbsp;CRM системы</p>
        </li>

        <li className="gifts__item">
          <span className="gifts__gift gifts__gift--mobile">Месяц аmoCRM</span>

          <span className="gifts__gift">35&nbsp;дней</span>
          <p className="gifts__text">использования CRM</p>
        </li>
      </ul>

      <button className="gifts__button" type="button">
        Получить консультацию
      </button>
    </div>
  );
};

export default Gifts;
