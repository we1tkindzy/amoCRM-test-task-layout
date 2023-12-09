import React from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import Social from 'components/Social/Social';
import Information from 'components/Information/Information';
import Gifts from 'components/Gifts/Gifts';
import FooterNavigation from 'components/FooterNavigation/FooterNavigation';
import Copyright from 'components/Copyright/Copyright';

import DesktopBgImg from 'assets/images/bg-desktop.png';
import MobileBgImg from 'assets/images/bg-mobile.png';

import './style.scss';

const App = () => {
  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${DesktopBgImg})`,
      }}
    >
      <header className="header">
        <div className="header__wrapper">
          <Logo />

          <Navigation />

          <Social />
        </div>
      </header>

      <main
        className="main"
        style={{
          backgroundImage: `url(${MobileBgImg})`,
        }}
      >
        <div className="main__wrapper">
          <Information />

          <Gifts />
        </div>
      </main>

      <footer className="footer">
        <div className="footer__wrapper">
          <FooterNavigation />

          <Copyright />
        </div>
      </footer>
    </div>
  );
};

export default App;
