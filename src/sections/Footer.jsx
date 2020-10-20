import React from "react";
import "../sass/sections/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className='container-footer'>
      <div className='names-box'>
        <h3>Designed and built by</h3>
        <div className='container-list'>
          <ul>
            <li>
              <div>Rocío</div>
              <div>Esteban</div>
              <div>
                <a
                  href={`https://www.linkedin.com/in/rocio-esteban/`}
                  className='links-footer'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={`https://github.com/hrchioest`}
                  className='links-footer'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </li>
            <li>
              <div>Dolores</div>
              <div>Perez</div>
              <div>
                <a
                  href={`https://www.linkedin.com/in/dolores-perez-laborda/`}
                  className='links-footer'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={`https://github.com/dperezlaborda`}
                  className='links-footer'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </li>
            <li>
              <div>Giuliana</div>
              <div>Cecchetto</div>
              <div>
                <a
                  href={`https://www.linkedin.com/in/giuliana-cecchetto/`}
                  className='links-footer'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={`https://github.com/giuli3022`}
                  className='links-footer'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='rights-box'>
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
          Data provided by
          <a
            target='_blank'
            href='https://www.themoviedb.org/'
            rel='noopener noreferrer'
          >
            TMDb
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
