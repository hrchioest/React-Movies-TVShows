import React from "react";

import "../sass/sections/footer.scss";

const Footer = () => {
  return (
    <section className='container-footer'>
      <p>
        ©2020 Ada 9° Generacion. All rights reserved
        <a
          target='_blank'
          href='https://jason.codes/cookie-policy/'
          rel='noopener noreferrer'
        >
          Cookie Policy
        </a>
      </p>
      <p>
        Designed and built by Giuli, Rocio and Dolo data provided by
        <a
          target='_blank'
          href='https://www.themoviedb.org/'
          rel='noopener noreferrer'
        >
          TMDb
        </a>
      </p>
    </section>
  );
};

export default Footer;
