
import "./home.css"
import React from 'react';


export default function Home(){

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
    <>
       <div>
        <header className="hero">
          <nav className="topbar">
            <figure className="topbar__logo">
              <img className="img-fluid" alt="FYA ex ListMinut" width={162} height={43} src="https://svgsilh.com/svg/297272-2196f3.svg" />
              <figcaption className="sr-only">
                FYA
              </figcaption>
            </figure>
            <div className="topbar__nav">
              <ul className="topbar__nav-list">
                <li className="topbar__nav-item">
                  <a className="btn btn-border-light" href="https://ringtwice.be/fr/devenir-prestataire">
                    Entreprises
                  </a>
                </li>
                <li className="topbar__nav-item">
                  <a className="btn" href="/fr/task_creation">
                    Sign / Log
                  </a>
                </li>
                <li className="topbar__nav-item">
                  <a className="btn-sso btn-light btn-seamless d-none d-lg-block" data-test="signup-page-link" href="/users/sign_in?locale=fr" title="Se connecter / S'inscrire">
                    <svg fill="currentColor" height={42} viewBox="0 0 42 42" width={42} xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 0.525024C9.39919 0.525024 0 9.68924 0 21C0 32.3108 9.39919 41.475 21 41.475C32.6008 41.475 42 32.3108 42 21C42 9.68924 32.6008 0.525024 21 0.525024ZM21 8.45083C25.1153 8.45083 28.4516 11.7037 28.4516 15.7162C28.4516 19.7286 25.1153 22.9815 21 22.9815C16.8847 22.9815 13.5484 19.7286 13.5484 15.7162C13.5484 11.7037 16.8847 8.45083 21 8.45083ZM21 36.8516C16.0294 36.8516 11.5754 34.6555 8.59476 31.221C10.1867 28.2984 13.3028 26.2839 16.9355 26.2839C17.1387 26.2839 17.3419 26.3169 17.5367 26.3747C18.6375 26.7215 19.7891 26.9444 21 26.9444C22.2109 26.9444 23.371 26.7215 24.4633 26.3747C24.6581 26.3169 24.8613 26.2839 25.0645 26.2839C28.6972 26.2839 31.8133 28.2984 33.4052 31.221C30.4246 34.6555 25.9706 36.8516 21 36.8516Z" />
                    </svg>
                  </a>
                  <a className="btn d-block d-lg-none" href="/users/sign_in?locale=fr">
                    Se connecter / S'inscrire
                  </a>
                </li>
                <li className="topbar__nav-item topbar__nav-item--lang">
                  <div className="btn-dropdown js-dropdown">
                    <button className="btn btn-light btn-dropdown__trigger js-dropdown-toggle" type="button">
                      <svg className="me-1" fill="currentColor" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 0.25C3.46875 0.25 0 3.71875 0 8C0 12.2812 3.46875 15.75 7.75 15.75C12.0312 15.75 15.5 12.2812 15.5 8C15.5 3.71875 12.0312 0.25 7.75 0.25ZM13.3438 5.25H11.25C11.0312 4.125 10.6875 3.125 10.25 2.3125C11.5938 2.90625 12.6875 3.9375 13.3438 5.25ZM7.75 1.75C8.3125 1.75 9.25 3.0625 9.71875 5.25H5.75C6.21875 3.0625 7.15625 1.75 7.75 1.75ZM1.5 8C1.5 7.59375 1.53125 7.15625 1.625 6.75H4.03125C4 7.1875 4 7.59375 4 8C4 8.4375 4 8.84375 4.03125 9.25H1.625C1.53125 8.875 1.5 8.4375 1.5 8ZM2.125 10.75H4.21875C4.4375 11.9062 4.78125 12.9062 5.21875 13.7188C3.875 13.125 2.78125 12.0625 2.125 10.75ZM4.21875 5.25H2.125C2.78125 3.9375 3.875 2.90625 5.21875 2.3125C4.78125 3.125 4.4375 4.125 4.21875 5.25ZM7.75 14.25C7.15625 14.25 6.21875 12.9688 5.75 10.75H9.71875C9.25 12.9688 8.3125 14.25 7.75 14.25ZM9.9375 9.25H5.53125C5.5 8.875 5.5 8.4375 5.5 8C5.5 7.5625 5.5 7.15625 5.53125 6.75H9.9375C9.96875 7.15625 10 7.5625 10 8C10 8.4375 9.96875 8.875 9.9375 9.25ZM10.25 13.7188C10.6875 12.9062 11.0312 11.9062 11.25 10.75H13.3438C12.6875 12.0625 11.5938 13.125 10.25 13.7188ZM11.4375 9.25C11.4688 8.84375 11.5 8.4375 11.5 8C11.5 7.59375 11.4688 7.1875 11.4375 6.75H13.875C13.9375 7.15625 14 7.59375 14 8C14 8.4375 13.9375 8.875 13.875 9.25H11.4375Z" />
                      </svg>
                      Français
                      <svg className="d-lg-none btn-dropdown__icon" fill="currentColor" height={9} viewBox="0 0 14 9" width={14} xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7812 1.25012L13.1875 0.625122C13.0312 0.468872 12.7812 0.468872 12.6562 0.625122L7 6.28137L1.3125 0.625122C1.1875 0.468872 0.9375 0.468872 0.78125 0.625122L0.1875 1.25012C0.03125 1.37512 0.03125 1.62512 0.1875 1.78137L6.71875 8.31262C6.875 8.46887 7.09375 8.46887 7.25 8.31262L13.7812 1.78137C13.9375 1.62512 13.9375 1.37512 13.7812 1.25012Z" />
                      </svg>
                    </button>
                    <ul className="btn-dropdown__list">
                      <li>
                        <a className="btn btn-bg-light" href="/nl">
                          Nederlands
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="wrapper hero-cta__wrapper">
            <a className="hero-banner" href="https://youtube.com" rel="opener" target="_self">
              <span className="pill theme-even bg-color">
                Nouveau
              </span>
              Fya est désormais disponible dans tout le Cameroun
              <i className="icon-arrow-right" />
            </a>
            <h1 className="page-title hero-cta">
              Des collaborateurs de confiance, à deux pas de chez vous.
            </h1>
            <form action="#" className="hero-form hero-cta" method="get">
              <div className="form-input-wrapper js-search js-search-modal-toggle">
                <label className="sr-only" id="search">
                  Rechercher un talent
                </label>
                <input autoComplete="off" className="form-input form-input--icon" disabled id="search" placeholder="Quel talent recherchez-vous ?" type="text" />
                <button aria-labelledby="heroSearchLabel" className="btn form-input-icon" type="button">
                  <span className="d-none d-lg-inline me-1" id="heroSearchLabel">
                    Rechercher
                  </span>
                  <svg fill="none" height={15} viewBox="0 0 14 15" width={14} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z" fill="white" />
                  </svg>
                </button>
              </div>
              <a className="link link-nowrap" href="/register"> {/* need to check if logout  */}
                Je souhaite m'inscrire
                <i className="icon-arrow-right" />
              </a>
            </form>
          </div>
          <picture className="hero-img">
            <img  alt="Des collaborateurs de confiance FYA" className="hero-img__img" size="150vw" src={PF+"img5.jpg"}/>
          </picture> 
        </header>
        <nav className="sticky-head js-sticky-nav">
          <div className="sticky-head__inner">
            <figure className="sticky-head__logo">
              <img className="img-fluid d-xl-none" alt="RingTwice" loading="lazy" width={12} height={24} src="https://ringtwice.be/packs/assets/images/logos/header-logo-bullets1f14ff386aca8123633d.svg" />
              <img className="img-fluid d-none d-xl-block" alt="RingTwice  ex ListMinut" loading="lazy" width={162} height={43} src="https://ringtwice.be/packs/assets/images/logos/header-logo-dark-ex888e0f0cc201b45ecb04.svg" />
              <figcaption className="sr-only">
                FYA
              </figcaption>
            </figure>
            <div className="form-input-wrapper form-input-wrapper__sticky js-search-modal-toggle js-search-modal-toggle-fixed">
              <label className="sr-only" id="searchSticky">
                Rechercher un talent
              </label>
              <input autoComplete="off" className="form-input form-input--icon" disabled id="searchSticky" placeholder="Quel talent recherchez-vous ?" type="text" />
              <button aria-label="Rechercher" className="btn form-input-icon" type="button">
                <span className="d-none">
                  Rechercher
                </span>
                <svg fill="none" height={15} viewBox="0 0 14 15" width={14} xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z" fill="white" />
                </svg>
              </button>
            </div>
            <button aria-label="Ouvrir menu" className="sticky-head__nav-toggle js-menu-toggle btn-seamless d-xl-none" type="button">
              <i className="hamburger-icon" />
              <span className="sr-only form-input-icon">
                Ouvrir menu
              </span>
            </button>
          </div>
        </nav>
       
        <section className="section swiper js-swiper-usps word-slider__container">
          <ul className="swiper-wrapper wrapper word-slider__item-list">
            <li className="swiper-slide word-slider__item js-tooltip-toggle">
              <svg fill="currentColor" height={23} viewBox="0 0 22 23" width={22} xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00391 10.6758C6.78906 10.4609 6.44531 10.4609 6.27344 10.6758L5.28516 11.6211C5.07031 11.8359 5.07031 12.1797 5.28516 12.3516L9.19531 16.3047C9.36719 16.5195 9.71094 16.5195 9.92578 16.3047L17.3164 8.95703C17.5312 8.74219 17.5312 8.39844 17.3164 8.22656L16.3711 7.23828C16.1562 7.02344 15.8555 7.02344 15.6406 7.23828L9.58203 13.2539L7.00391 10.6758ZM20.0234 4.35938L11.7734 0.921875C11.5156 0.835938 11.2578 0.792969 11 0.792969C10.6992 0.792969 10.4414 0.835938 10.1836 0.921875L1.93359 4.35938C1.16016 4.70312 0.6875 5.43359 0.6875 6.25C0.6875 14.8008 5.58594 20.6875 10.1836 22.6211C10.6992 22.8359 11.2578 22.8359 11.7734 22.6211C15.4688 21.0742 21.3125 15.7891 21.3125 6.25C21.3125 5.43359 20.7969 4.70312 20.0234 4.35938ZM11 20.6875C6.78906 18.9688 2.75 13.5547 2.75 6.25L11 2.8125L19.25 6.25C19.25 13.7266 14.9961 19.0117 11 20.6875Z" />
              </svg>
              Profils vérifiés
              <div className="tooltip js-tooltip">
                <div className="tooltip__inner">
                  Vous voulez savoir à qui vous avez à faire ? Nous aussi ! C’est pourquoi nous vérifions l’identité de nos membres.
                </div>
              </div>
            </li>
            <li className="swiper-slide word-slider__item js-tooltip-toggle">
              <svg fill="currentColor" height={29} viewBox="0 0 36 29" width={36} xmlns="http://www.w3.org/2000/svg">
                <path d="M34.6279 15.3665L28.3389 12.9056C28.1201 12.7962 27.6279 12.6868 27.0811 12.9056L20.792 15.3665C20.2451 15.5853 19.8623 16.1321 19.8623 16.679C19.8623 22.804 23.5811 27.015 27.0811 28.3821C27.6279 28.6009 28.0654 28.4915 28.3389 28.3821C31.1279 27.2884 35.6123 23.515 35.6123 16.679C35.6123 16.1321 35.2295 15.5853 34.6279 15.3665ZM27.7373 25.8118V15.4759L32.9326 17.4993C32.6045 22.2571 29.5967 24.8821 27.7373 25.8118ZM20.0811 25.8665H3.2373V24.4993C3.2373 21.8743 5.31543 19.7415 7.94043 19.7415C8.76074 19.7415 10.0186 20.6165 12.8623 20.6165C15.4326 20.6165 16.6904 19.9056 17.5107 19.7962C17.3467 18.9759 17.2373 18.1009 17.2373 17.1712C15.8154 17.39 15.0498 17.9915 12.8076 17.9915C10.2373 17.9915 9.52637 17.1165 7.94043 17.1165C3.89355 17.1165 0.612305 20.4525 0.612305 24.4993V25.8665C0.612305 27.3431 1.76074 28.4915 3.2373 28.4915H22.4326C21.5576 27.7806 20.792 26.9056 20.0811 25.8665ZM12.8623 16.2415C17.1826 16.2415 20.7373 12.7415 20.7373 8.36652C20.7373 4.0462 17.1826 0.491516 12.8623 0.491516C8.4873 0.491516 4.9873 4.0462 4.9873 8.36652C4.9873 12.7415 8.4873 16.2415 12.8623 16.2415ZM12.8623 3.11652C15.7061 3.11652 18.1123 5.52277 18.1123 8.36652C18.1123 11.265 15.7061 13.6165 12.8623 13.6165C9.96387 13.6165 7.6123 11.265 7.6123 8.36652C7.6123 5.52277 9.96387 3.11652 12.8623 3.11652Z" fill="currentColor" />
              </svg>
              Service assuré
              <div className="tooltip js-tooltip">
                <div className="tooltip__inner">
                  Une personne assurée en vaut deux ! C’est pourquoi tous vos services sont couverts par une assurance corporelle et matérielle.
                </div>
              </div>
            </li>
            <li className="swiper-slide word-slider__item js-tooltip-toggle">
              <svg fill="currentColor" height={28} viewBox="0 0 28 28" width={28} xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5889 27.5625C21.0264 27.5625 27.1514 21.4922 27.1514 14C27.1514 6.5625 21.0264 0.4375 13.5889 0.4375C6.09668 0.4375 0.0263672 6.5625 0.0263672 14C0.0263672 21.4922 6.09668 27.5625 13.5889 27.5625ZM7.90137 23.4062L10.8545 20.4531C12.5498 21.2188 14.5732 21.2188 16.2686 20.4531L19.2217 23.4062C15.7764 25.4844 11.3467 25.4844 7.90137 23.4062ZM17.9639 14C17.9639 16.4609 15.9951 18.375 13.5889 18.375C11.1279 18.375 9.21387 16.4609 9.21387 14C9.21387 11.5938 11.1279 9.625 13.5889 9.625C15.9951 9.625 17.9639 11.5938 17.9639 14ZM22.9404 19.6875L19.9873 16.7344C20.7529 15.0391 20.7529 13.0156 19.9873 11.3203L22.9404 8.36719C25.0186 11.8125 25.0186 16.2422 22.9404 19.6875ZM19.2217 4.64844L16.2686 7.60156C14.5732 6.83594 12.5498 6.83594 10.8545 7.60156L7.90137 4.64844C11.3467 2.57031 15.7764 2.57031 19.2217 4.64844ZM4.18262 8.36719L7.13574 11.3203C6.37012 13.0156 6.37012 15.0391 7.13574 16.7344L4.18262 19.6875C2.10449 16.2422 2.10449 11.8125 4.18262 8.36719Z" fill="#333333" />
              </svg>
              Service encadré
              <div className="tooltip js-tooltip">
                <div className="tooltip__inner">
                  Nous ne nous arrêtons pas à la mise en relation. Nous vous encadrons depuis votre inscription jusqu’à la déclaration des services.
                </div>
              </div>
            </li>
            <li className="swiper-slide word-slider__item js-tooltip-toggle">
              <svg fill="currentColor" height={26} viewBox="0 0 35 26" width={35} xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M26.6372 7.85286C31.1242 7.85286 34.0689 11.2534 34.0689 16.4065V17.6336H23.3775C23.4466 20.0881 25.4803 21.8055 28.0398 21.8055C29.6176 21.8055 30.9143 21.4201 32.3518 20.6489L33.3686 23.3476C31.51 24.6452 29.3015 25.1708 27.3385 25.1708C23.122 25.1708 20.6772 22.935 19.6599 19.9987C18.0928 23.3054 14.6016 25.1708 10.6511 25.1708C8.40772 25.1708 6.5498 24.75 5.18262 23.9792V0H9.38985V8.34368C10.371 8.06332 11.3878 7.85286 12.6144 7.85286C15.7033 7.85286 18.6318 9.36443 19.8904 12.4162C21.0353 9.71323 23.3799 7.85286 26.6372 7.85286ZM9.38985 21.42C10.0202 21.6305 10.6162 21.7354 11.4577 21.7354C14.2621 21.7354 16.3307 19.3517 16.3307 16.2662C16.3307 13.6725 14.6129 11.3935 11.7379 11.3935C10.6861 11.3935 9.98529 11.6741 9.38985 11.9195V21.42ZM26.5326 11.008C24.4989 11.008 23.2719 12.831 23.2719 14.6539H29.7222C29.653 12.8662 28.6699 11.008 26.5326 11.008Z" fillRule="evenodd" fill="#231F20" />
                <path d="M0 22.6533C0 23.9282 0.987945 24.9159 2.23113 24.9159C3.44211 24.9159 4.43003 23.9282 4.43003 22.6533C4.43003 21.3468 3.44211 20.359 2.23113 20.359C0.987945 20.359 0 21.3468 0 22.6533Z" fill="#231F20" />
              </svg>
              Plateforme agréée
            </li>
          </ul>
          <button className="swiper-button-prev btn-seamless word-slider__btn word-slider__btn-prev d-lg-none" type="button">
            <svg fill="currentColor" height={14} viewBox="0 0 8 14" width={8} xmlns="http://www.w3.org/2000/svg">
              <path d="M7.21875 13.8125L7.84375 13.2188C7.96875 13.0625 7.96875 12.8125 7.84375 12.6875L2.1875 7L7.84375 1.34375C7.96875 1.21875 7.96875 0.96875 7.84375 0.8125L7.21875 0.21875C7.0625 0.0625 6.84375 0.0625 6.6875 0.21875L0.125 6.75C0 6.90625 0 7.125 0.125 7.28125L6.6875 13.8125C6.84375 13.9688 7.0625 13.9688 7.21875 13.8125Z" />
            </svg>
            <span className="sr-only">
              Previous
            </span>
          </button>
          <button className="swiper-button-next btn-seamless word-slider__btn word-slider__btn-next d-lg-none" type="button">
            <svg fill="currentColor" height={14} viewBox="0 0 8 14" width={8} xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 0.21875L0.125 0.8125C0 0.96875 0 1.21875 0.125 1.34375L5.78125 7L0.125 12.6875C0 12.8125 0 13.0625 0.125 13.2188L0.75 13.8125C0.90625 13.9688 1.125 13.9688 1.28125 13.8125L7.84375 7.28125C7.96875 7.125 7.96875 6.90625 7.84375 6.75L1.28125 0.21875C1.125 0.0625 0.90625 0.0625 0.75 0.21875Z" />
            </svg>
            <span className="sr-only">
              Next
            </span>
          </button>
        </section>
        <section className="section">
          <header>
            <h2 className="section-title">
              Des collaborateurs de confiance, prêts à rendre service
            </h2>
          </header>
          <div className="worker-container wrapper">
            <article className="worker x-25-lg theme-odd">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Laura
                </h3>
                <h4>
                  Prof de langues à Haaltert
                </h4>
                <a className="faux-link d-lg-none" href="/fr/professeurs-particuliers" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Laura, prof de langues passionnée, fait partie de nos 5.844 professeurs particuliers.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/professeurs-particuliers">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/professeurs-particuliers" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-1__18007ef0daa271643623cf1.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-1__2858b48b7c2560fc753abdd.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-1__360b5b94535c7f464d997ad.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-1__57012f9e64b5bf0ee33b665.jpg?570w 570w" type="image/jpeg" />
                <img alt="Laura" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-1__18007ef0daa271643623cf1.jpg" />
              </picture>
            </article>
            <article className="worker x-25-lg theme-even">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Mathias
                  <span className="pill theme-pro bg-color">Pro</span>
                </h3>
                <h4>
                  Électricien à Ganshoren
                </h4>
                <a className="faux-link d-lg-none" href="/fr/bricoleur" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Mathias fait partie de nos 8.078 bricoleurs de confiance, prêts à rendre service à leurs collaborateurs moins habiles.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/bricoleur">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/bricoleur" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-2__180ebb0b9cd4e1f277eab66.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-2__28588b8dd817e64dde6e71c.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-2__3603cc50d41c679a69ff9cb.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-2__5709739ab5983504dd46cdb.jpg?570w 570w" type="image/jpeg" />
                <img alt="Mathias" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-2__180ebb0b9cd4e1f277eab66.jpg" />
              </picture>
            </article>
            <article className="worker x-25-lg theme-odd">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Kunga
                </h3>
                <h4>
                  Prof de yoga à Ixelles
                </h4>
                <a className="faux-link d-lg-none" href="/fr/soins" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Comme 3.694 autres inscrits, Kunga aime offrir des moments de détente à ses collaborateurs.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/soins">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/soins" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-3__1803131965f8cf740e49a18.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-3__285022fb4093fee38db9cb4.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-3__3606d15bd773c5da50b4528.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-3__570272c8293a42a756d8129.jpg?570w 570w" type="image/jpeg" />
                <img alt="Kunga" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-3__1803131965f8cf740e49a18.jpg" />
              </picture>
            </article>
            <article className="worker x-25-lg theme-even">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Sophie
                </h3>
                <h4>
                  Petsitter à Laeken
                </h4>
                <a className="faux-link d-lg-none" href="/fr/garde-animaux" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Sophie, amoureuse des animaux, fait partie des 11.257 gardes chien de confiance qui prennent soin des animaux de leurs collaborateurs.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/garde-animaux">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/garde-animaux" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-4__18068340c87291e9c0e9155.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-4__28572bce461d5b1742713b6.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-4__3602ddfb507b3f2ecf97be9.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-4__570a5f154464eae41312b4f.jpg?570w 570w" type="image/jpeg" />
                <img alt="Sophie" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-4__18068340c87291e9c0e9155.jpg" />
              </picture>
            </article>
            <article className="worker x-25-lg theme-odd d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Olivier
                </h3>
                <h4>
                  Jardinier à Uccle
                </h4>
                <a className="faux-link d-lg-none" href="/fr/entretien-jardin" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Comme 5.735 autres jardiniers, Olivier se dépasse chaque jour pour embellir les jardins de ses collaborateurs.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/entretien-jardin">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/entretien-jardin" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-5__18040793538b73eeb09fb75.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-5__2850e4a0bd83f80f9f8cd90.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-5__360d4542e23bb84a7cb50fb.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-5__570875dc92fd8b989b4915b.jpg?570w 570w" type="image/jpeg" />
                <img alt="Olivier" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-5__18040793538b73eeb09fb75.jpg" />
              </picture>
            </article>
            <article className="worker x-25-lg theme-even d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Andrée
                </h3>
                <h4>
                  Aide-ménagère à Jemeppe
                </h4>
                <a className="faux-link d-lg-none" href="/fr/aide-menagere" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Andrée et 9.171 autres fées du logis, ne demandent qu'à aider leurs collaborateurs pour leurs tâches ménagères.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/aide-menagere">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/aide-menagere" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-6__180827074c38314c14ed184.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-6__285781e79fa19b633f14145.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-6__36022f31b63076be71f5efd.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-6__57024024860129ca1d6aea7.jpg?570w 570w" type="image/jpeg" />
                <img alt="Andrée" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-6__180827074c38314c14ed184.jpg" />
              </picture>
            </article>
            <article className="worker x-25-lg theme-odd d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Loukou
                </h3>
                <h4>
                  Babysitter à Gembloux
                </h4>
                <a className="faux-link d-lg-none" href="/fr/garde-enfants" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Loukou fait partie des 9.945 babysitters disponibles pour s'occuper des enfants de leurs collaborateurs comme si c'était les leurs.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/garde-enfants">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/garde-enfants" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-7__180f8a28e934a64729a686b.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-7__2853f7119f964659e835906.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-7__360e77fe131d76999c41deb.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-7__5706f6f6f20e634c1b0b04b.jpg?570w 570w" type="image/jpeg" />
                <img alt="Loukou" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-7__180f8a28e934a64729a686b.jpg" />
              </picture>
            </article>
            <article className="worker x-25-lg theme-even d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Gregory
                  <span className="pill theme-pro bg-color">Pro</span>
                </h3>
                <h4>
                  Traiteur à Woluwé
                </h4>
                <a className="faux-link d-lg-none" href="/fr/chef-a-domicile" rel="nofollow" />
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Gregory et 2.277 autres cuisiniers aiment mettre la main à la pâte pour régaler leurs collaborateurs les plus gourmands et gourmets.
                  </p>
                  <a className="btn btn-sm with-faux-link" href="/fr/chef-a-domicile">
                    <span className="d-none d-lg-inline">
                      Découvrir les profils
                    </span>
                    <i className="icon-arrow-right" />
                  </a>
                  <a className="faux-link" href="/fr/chef-a-domicile" rel="nofollow">
                    Découvrir les profils
                  </a>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet="https://ringtwice.be/packs/assets/images/landing/workers/workers-8__180618ef915f3aa7a3b9ee7.jpg?180w 180w, https://ringtwice.be/packs/assets/images/landing/workers/workers-8__2853c2e1ef9dbb1910d6d72.jpg?285w 285w, https://ringtwice.be/packs/assets/images/landing/workers/workers-8__360d41a1b049e060526eb69.jpg?360w 360w, https://ringtwice.be/packs/assets/images/landing/workers/workers-8__570485248717a22a3c675db.jpg?570w 570w" type="image/jpeg" />
                <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/workers/workers-8__180618ef915f3aa7a3b9ee7.jpg" />
              </picture>
            </article>
          </div>
         
        </section>
        <section className="section">
          <header>
            <h2 className="section-title">
              Une communauté qui s'entraide
            </h2>
          </header>
          <div className="wrapper">
            <div className="video-placeholder__wrapper wrapper--lg">
              <figure className="img-ratio img-ratio-16x9 video-placeholder js-embed-placeholder" data-embed-url="https://www.youtube.com/embed/jTs0PTPv8Q8?autoplay=1&rel=0">
                <img sizes="(min-width: 1140px) calc(1140px / 1.5), 100vw" srcSet="https://ringtwice.be/packs/assets/images/landing/video/video__28046975528fd4e782e9abc.jpg 280w, https://ringtwice.be/packs/assets/images/landing/video/video__560edfd8d321c49e9d4ac34.jpg 560w, https://ringtwice.be/packs/assets/images/landing/video/video__8489c2028aea5b9c02a839c.jpg 848w, https://ringtwice.be/packs/assets/images/landing/video/video__1696cb5ab7c46d4b99cf7842.jpg 1696w" alt="FYA comment ça marche" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/video/video__28046975528fd4e782e9abc.jpg" />
                <button className="video-placeholder__cta btn-seamless js-embed-placeholder-play">
                  <i className="icon-play" />
                  <span className="sr-only">
                    Jouer la video
                  </span>
                </button>
                <figcaption className="sr-only js-embed-placeholder-title">
                  Une communauté qui s'entraide
                </figcaption>
              </figure>
              <span className="bubble-shape theme-odd bg-color video-placeholder__shape" />
              <span className="bubble-shape theme-even bg-color video-placeholder__shape" />
            </div>
            <ol className="insentive__list section section-spoiled">
              <li className="insentive border-bottom-sm">
                <h3 className="element-title insentive__title">
                  Un collaborateur a besoin d'aide
                </h3>
                <p>
                  Une demande de service est introduite et Ring&nbsp;Twice avertit les talents à proximité.
                </p>
              </li>
              <li className="insentive border-bottom-sm">
                <h3 className="element-title insentive__title">
                  Une offre est acceptée
                </h3>
                <p>
                  De multiples critères de confiance tels que les avis, le profil, le prix, ... sont mis en avant.
                </p>
              </li>
              <li className="insentive border-bottom-sm">
                <h3 className="element-title insentive__title">
                  Une belle rencontre est initiée
                </h3>
                <p>
                  La prestation a lieu en toute confiance. Le paiement en ligne également.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="section">
          <header>
            <h2 className="section-title">
              Une belle histoire vaut mieux qu'un long discours
            </h2>
          </header>
          <div className="round-blockquote__wrapper wrapper">
            <nav className="d-none d-lg-flex bubble-nav round-blockquote__nav js-swiper-user-reviews-nav">
              <button className="bubble-nav__item btn-seamless theme-even" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-1__thumb@2xe5bc7307dbc8dd3e64e5.jpg 2x" alt="Michel" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-1__thumb20140363c46822e13bff.jpg" />
                  </picture>
                  <figcaption>
                    Michel
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Michel
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-odd" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-2__thumb@2xbd39cb67f5c3b32bf661.jpg 2x" alt="Carol" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-2__thumb7019a2a2a9dcc7c7183b.jpg" />
                  </picture>
                  <figcaption>
                    Carol
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Carol
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-odd" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-3__thumb@2x1d4ad46ef3029a0b3cbc.jpg 2x" alt="Kalil" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-3__thumb924d2e696b755501b724.jpg" />
                  </picture>
                  <figcaption>
                    Kalil
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Kalil
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-even" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-4__thumb@2xab3b0a044b37dd8f4ca7.jpg 2x" alt="Emilie" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-4__thumb5faf6ebab9604fdd73f2.jpg" />
                  </picture>
                  <figcaption>
                    Emilie
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Emilie
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-even is-active" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-5__thumb@2xfdb6dcd89f062d11d7cd.jpg 2x" alt="Marc" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-5__thumba37161cbdbf1c63a031f.jpg" />
                  </picture>
                  <figcaption>
                    Marc
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Marc
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-odd" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-6__thumb@2x086b3360d0027167c533.jpg 2x" alt="Alexandre" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-6__thumbf77e0a96d0f85db4e7c0.jpg" />
                  </picture>
                  <figcaption>
                    Alexandre
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Alexandre
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-odd" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-7__thumb@2x64ddac9fa34db68bf2f9.jpg 2x" alt="Petra" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-7__thumbb99eb53cbf6615e95c4d.jpg" />
                  </picture>
                  <figcaption>
                    Petra
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Petra
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-even" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-8__thumb@2x9e1c4e77a4a171335f0a.jpg 2x" alt="Thierry" width={70} height={70} loading="lazy" importance="low" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-8__thumb059515b947a068bd026e.jpg" />
                  </picture>
                  <figcaption>
                    Thierry
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Thierry
                </span>
              </button>
            </nav>
            <div className="round-blockquote__slider js-swiper-user-reviews swiper-initialized swiper-horizontal swiper-pointer-events">
              <div className="swiper-wrapper" style={{transform: 'translate3d(-1560px, 0px, 0px)', transitionDuration: '0ms'}}>
                <div className="round-blockquote swiper-slide theme-even" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;Je suis pensionné depuis 5 ans, mais FYA me permet de rester actif en faisant ce que j'aime&nbsp;!&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Michel</strong>, Mons
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-1__30027c1a456b59a1e2c22c5.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-1__3505c0fdb065b7456de81b6.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-1__600f0d724221a43b9540167.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-1__70000ebc4c42abbfea9f48a.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-1__30027c1a456b59a1e2c22c5.jpg" />
                    <figcaption className="sr-only">
                      Michel
                    </figcaption>
                  </picture>
                </div>
                <div className="round-blockquote swiper-slide theme-odd" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;Aux USA j'utilisais une app similaire. J'étais tellement contente de découvrir FYA en rentrant&nbsp;!&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Carol</strong>, Woluwé
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-2__300548e93abcdb058803321.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-2__3506f1ac7485380d5fdad48.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-2__600c7e7e84e5abfd223ebfe.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-2__7005dd852c8788629727873.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-2__300548e93abcdb058803321.jpg" />
                    <figcaption className="sr-only">
                      Carol
                    </figcaption>
                  </picture>
                </div>
                <div className="round-blockquote swiper-slide theme-odd" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;En 4 mois j'ai atteint le plafond comme particulier. J'ai compris que j'étais prêt à devenir indépendant.&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Kalil</strong>, Deurne
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-3__3005f6d17bf5390492fc175.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-3__35044c51a5540d26df10649.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-3__60067faa5915a15e15291ad.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-3__70033cb22dc4f456b3e1fef.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-3__3005f6d17bf5390492fc175.jpg" />
                    <figcaption className="sr-only">
                      Kalil
                    </figcaption>
                  </picture>
                </div>
                <div className="round-blockquote swiper-slide theme-even swiper-slide-prev" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;C'est génial de pouvoir avoir un petit coup de main de temps en temps. En plus, c'est 100% légal&nbsp;!&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Emilie</strong>, Anvers
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-4__3004793c8ce2d231c9f49b4.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-4__350157c33c4daee13059091.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-4__60005a676d465acaaac5cfb.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-4__700120ab6f745e930b2c072.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-4__3004793c8ce2d231c9f49b4.jpg" />
                    <figcaption className="sr-only">
                      Emilie
                    </figcaption>
                  </picture>
                </div>
                <div className="round-blockquote swiper-slide theme-even swiper-slide-active" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;J'ai créé un lien particulier avec mes clients. Certains m'invitent même à rester manger après ma prestation.&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Marc</strong>, Hove
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-5__30010db24ed8ae2a1555194.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-5__350d0f3f545f7f11fb0fd62.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-5__6003ba63306fbe3072d346a.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-5__700da598b623dfa119007d0.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-5__30010db24ed8ae2a1555194.jpg" />
                    <figcaption className="sr-only">
                      Marc
                    </figcaption>
                  </picture>
                </div>
                <div className="round-blockquote swiper-slide theme-odd swiper-slide-next" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;C'est super de pouvoir trouver autant de personnes de confiance autour de chez soi.&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Alexandre</strong>, Saint-Gilles
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-6__3002900d7697d9382e934f4.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-6__3503f48fdab405c59f77aef.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-6__60021ae91e3f6fee8833ee0.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-6__700c630dbff4f125c5f65aa.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-6__3002900d7697d9382e934f4.jpg" />
                    <figcaption className="sr-only">
                      Alexandre
                    </figcaption>
                  </picture>
                </div>
                <div className="round-blockquote swiper-slide theme-odd" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;Ce que je préfère, c'est quand mon élève m'appelle en fin d'année pour m'annoncer qu'il a réussi&nbsp;!&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Petra</strong>, Woluwé
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-7__300665dade4601a0bc47c6f.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-7__350afd2cb10ed51a0b4815b.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-7__600f30536eaa7b88ea5f30d.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-7__7008d49e30a55c720895cf0.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-7__300665dade4601a0bc47c6f.jpg" />
                    <figcaption className="sr-only">
                      Petra
                    </figcaption>
                  </picture>
                </div>
                <div className="round-blockquote swiper-slide theme-even" type="button" style={{width: '390px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;J'ai trouvé très facilement de l'aide et grâce aux évaluations, je sais que je peux avoir confiance&nbsp;!&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Thierry</strong>, La Hulpe
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet="https://ringtwice.be/packs/assets/images/landing/stories/stories-8__300c0a501e84df4a95e2f1f.jpg?300w 300w, https://ringtwice.be/packs/assets/images/landing/stories/stories-8__3503628be73df4269af427e.jpg?350w 350w, https://ringtwice.be/packs/assets/images/landing/stories/stories-8__60047f76f73ea16e4301746.jpg?600w 600w, https://ringtwice.be/packs/assets/images/landing/stories/stories-8__70039b9f37f272f20e809a4.jpg?700w 700w" type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src="https://ringtwice.be/packs/assets/images/landing/stories/stories-8__300c0a501e84df4a95e2f1f.jpg" />
                    <figcaption className="sr-only">
                      Thierry
                    </figcaption>
                  </picture>
                </div>
              </div>
              <div className="swiper-pagination d-lg-none swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
            </div>
          </div>
        </section>
        <section className="section pt-0 text-center floating-frame__container">
          <figure className="section__banner">
            <picture className="img-ratio img-ratio-section-banner">
              <source media="(min-width: 992px)" sizes="100vw" srcSet="https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__9925cea436d5d510a3fb7bf.jpg?992w 992w, https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__1200939dd9c29215a2defc09.jpg?1200w 1200w, https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__1400be0b142177613f9294f3.jpg?1440w 1440w, https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__19203daa1f9fd22486ab28e0.jpg?1920w 1920w, https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__2560ad03391e461c1766ecf3.jpg?2560w 2560w" type="image/jpeg" />
              <img srcSet="https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__380f7830f2056c7443fd17d.jpg?1x 1x, https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__760f27b349b3055fb720e34.jpg?2x 2x" alt="FYA inscription" loading="lazy" className="img-fluid" sizes="100vw" src="https://ringtwice.be/packs/assets/images/landing/subscription/subscription-choice__380f7830f2056c7443fd17d.jpg" />
            </picture>
            <div className="target-mask" />
          </figure>
          <div className="floating-frame__list">
            <article className="border-bottom-sm floating-frame">
              <header>
                <h3 className="element-title text-dark floating-frame__title">
                  Je cherche un talent
                </h3>
              </header>
              <p className="mb-2 text-muted">
                Offrez-vous l'accès à une communauté de 36.587 prestataires actifs.
              </p>
              <a className="btn" href="/fr/task_creation">
                Demander un service
                <i className="icon-arrow-right" />
              </a>
            </article>
            <article className="floating-frame">
              <header>
                <h3 className="element-title text-dark floating-frame__title">
                  Je partage mon talent
                </h3>
              </header>
              <p className="mb-2 text-muted">
                Accédez gratuitement à plus de 15.000 demandes de service par mois.
              </p>
              <a className="btn btn-border" href="https://ringtwice.be/fr/devenir-prestataire">
                Proposer mes services
                <svg className="align" fill="currentColor" height={13} viewBox="0 0 13 13" width={13} xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.46387 0.722778L5.91699 1.24231C5.78027 1.37903 5.78027 1.59778 5.91699 1.70715L10.1553 5.94543H0.831055C0.639648 5.94543 0.50293 6.1095 0.50293 6.27356V7.03918C0.50293 7.23059 0.639648 7.36731 0.831055 7.36731H10.1553L5.91699 11.6329C5.78027 11.7423 5.78027 11.9611 5.91699 12.0978L6.46387 12.6173C6.57324 12.754 6.79199 12.754 6.92871 12.6173L12.6436 6.90247C12.7803 6.76575 12.7803 6.57434 12.6436 6.43762L6.92871 0.722778C6.79199 0.58606 6.57324 0.58606 6.46387 0.722778Z" fill="currentColor" />
                </svg>
              </a>
            </article>
          </div>
        </section>
        <article className="theme-odd bg-color wrapper article-banner">
          <figure className="article-banner__img">
            <img srcSet="https://ringtwice.be/assets/support/be-support-client-team@2x-582fa44ab263c252537a6d96adfd17449dd8461e77c5c8efe5e16c94ea35721f.png 2x" width={225} height={225} alt="contact" loading="lazy" importance="low" src="https://ringtwice.be/assets/support/be-support-client-team-182f71f1f990116f21f931e39ba446ec79abc2acdaece82eefc0541c7773137b.png" />
          </figure>
          <div className="article-banner__body">
            <header>
              <h2 className="section-title section-title--md article-banner__body-title">
                Vous ne trouvez pas la réponse à votre question ?
              </h2>
            </header>
            <p className="mb-1">
              Nous sommes là pour vous aider !
            </p>
            <p>
              <a className="link with-icon" href="/fr/contact_us">
                Envoyez-nous un message
              </a>
            </p>
          </div>
        </article>
        <div className="cookie-banner js-cookie-banner is-active">
          <div className="cookie-banner__inner">
            Ce site utilise aucun cookie. En utilisant FYA, vous acceptez notre <a href="/fr/p/condgen" target="_blank">utilisation des cookies</a>.
            <button className="btn-seamless cookie-banner__close js-cookie-banner-close">×</button>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="f-head">
              <div className="fh-links">
                <div className="fh-title">
                  Découvrez
                </div>
                <ul>
                  <li>
                    <a href="https://ringtwice.be/fr/devenir-prestataire">Devenir prestataire</a>
                  </li>
                  <li>
                    <a href="/fr/task_creation">Demander un service</a>
                  </li>
                  <li>
                    <a href="/fr/rankings">Meilleurs prestataires</a>
                  </li>
                  <li>
                    <a href="/fr/services-ideas">Idées de services</a>
                  </li>
                  <li>
                    <a href="/fr/share_friends">Invitez vos amis</a>
                  </li>
                </ul>
              </div>
              <div className="fh-links">
                <div className="fh-title">
                  Besoin d’aide ?
                </div>
                <ul>
                  <li>
                    <a href="/fr/howitworks">Comment ça marche ?</a>
                  </li>
                  <li>
                    <a href="/fr/pricing">Plans tarifaires</a>
                  </li>
                  <li>
                    <a href="/fr/legal_sharing_economy">FYA, c’est légal ?</a>
                  </li>
                  <li>
                    <a href="/fr/contact_us">Contactez-nous</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://listminut.zendesk.com/hc/fr">Aide/FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="fh-links">
                <div className="fh-title">
                  À propos
                </div>
                <ul>
                  <li>
                    <a href="/fr/about">FYA</a>
                  </li>
                  <li>
                    <a href="/fr/team">L'équipe</a>
                  </li>
                  <li>
                    <a href="/fr/workforus">Emplois/Stages</a>
                  </li>
                  <li>
                    <a href="/fr/press_room">Espace presse</a>
                  </li>
                  <li>
                    <a href="https://blog.ringtwice.be/">Blog</a>
                  </li>
                  <li>
                    <a href="/fr/partners">Sites partenaires</a>
                  </li>
                </ul>
              </div>
              <div className="fh-links">
                <div className="fh-title">
                  Suivez-nous
                </div>
                <div className="social-networks">
                  <a target="_blank" title="Facebook" rel="noreferrer" href="https://www.facebook.com/ringtwice.be"><img width={11} height={20} alt="Facebook" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/facebookb2691b0406771ce5a230.svg" />
                  </a><a target="_blank" title="Linkedin" rel="noreferrer" href="https://www.linkedin.com/company/2686937"><img width={20} height={20} alt="Linkedin" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/linkedindf4802e013e1660125fb.svg" />
                  </a><a target="_blank" title="Twitter" rel="noreferrer" href="https://twitter.com/RingTwiceBe"><img width={20} height={16} alt="Twitter" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/twittere100d10ab607f7ed4179.svg" />
                  </a><a target="_blank" title="Instagram" rel="noreferrer" href="https://www.instagram.com/ringtwice.be/"><img width={20} height={20} alt="Instagram" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/instagram12ab65942cd124d0f413.svg" />
                  </a><a target="_blank" title="Vimeo" rel="noreferrer" href="https://vimeo.com/ringtwice"><img width={20} height={17} alt="Vimeo" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/vimeoc67e439a07c3bc188071.svg" />
                  </a></div>
                <div className="fh-title fh-t-app">
                  Découvrez notre application mobile
                </div>
                <div className="fh-app">
                  <a target="_blank" title="AppStore" rel="noreferrer" href="https://itunes.apple.com/be/app/listminut/id1357150375?l=fr"><img width={135} height={45} alt="AppStore" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/appStore-fr0a1ec41d4075db6dfd09.svg" />
                  </a><a target="_blank" title="Google Play" rel="noreferrer" href="https://play.google.com/store/apps/details?id=be.listminut.app"><img width={135} height={45} alt="Google Play" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/googlePlay-fr0df80dceb00cabac83b5.svg" />
                  </a>
                </div>
              </div>
            </div>
        
            <div className="f-review">
              <a href="/fr/testimonials" title="Avis des utilisateurs">
                <div className="f-review-stars">
                  <img width={120} height={40} alt="Review" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/review73b3fe711c0381efb5b2.svg" />
                </div>
                <div className="f-review-text">
                  www.FYA.be est évalué 4.92/5 par 4.385 membres
                </div>
              </a>
            </div>
            <div className="f-legal">
              © 2022 -
              - FYA -
              <a href="/fr/p/condgen">Conditions d'utilisation</a>
              -
              <a href="/fr/sitemap">Plan du site</a>
            </div>
          </div>
        </footer>
        <noscript>
          &lt;div style="display:inline;"&gt;
          &lt;img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/989802098/?value=0&amp;amp;guid=ON&amp;amp;script=0"/&gt;
          &lt;/div&gt;
        </noscript>
        <noscript>
          &lt;img height='1' src='https://www.facebook.com/tr?id=1643922662518309&amp;amp;ev=PageView&amp;amp;noscript=1' style='display:none' width='1'&gt;
        </noscript>
        <noscript>
          &lt;style&gt;
          .btn-dropdown {'{'}overflow:visible;{'}'}
          .btn-dropdown__list {'{'}max-height:none; max-width:none; transform:translate(0, 0); opacity:1;{'}'}
          &lt;/style&gt;
        </noscript>
      </div>
       
    </>
    );
}