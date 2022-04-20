import Topbar from "../../components/topbar/Topbar";
import "./home.css"
import React from 'react';
import Footbar from "../../components/footbar/Footbar";
import ReactPlayer from 'react-player'


export default function Home(){

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
    <>
       <div>
        <header className="hero">
          <Topbar/>
          <div className="wrapper hero-cta__wrapper">
            <a className="hero-banner" href="https://youtube.com" rel="opener" target="_self">
              <span className="pill theme-even bg-color">
                Nouveau
              </span>
              Ncemh est désormais disponible dans tout le Cameroun
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
            <img  alt="Des collaborateurs de confiance Ncemh" className="hero-img__img" size="150vw" src={PF+"img5.jpg"}/>
          </picture> 
        </header>
        <nav className="sticky-head js-sticky-nav">
          <div className="sticky-head__inner">
            <figure className="sticky-head__logo">
              <figcaption className="sr-only">
                Ncemh
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
                  Prof de langues à Yaoundé
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Laura, prof de langues passionnée, fait partie de nos professeurs particuliers certifiée avec un bon indice de confiance.
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "laura.jpg"} type="image/jpeg" />
                <img alt="Laura" sizes="100vw" loading="lazy" src={PF + "laura.jpg"}/>
              </picture>
            </article>
            <article className="worker x-25-lg theme-even">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Mathias
                  <span className="pill theme-pro bg-color">Pro</span>
                </h3>
                <h4>
                  Électricien à Buea
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Mathias fait partie de nos bricoleurs de confiance, prêts à rendre service à leurs collaborateurs moins habiles.
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "mathias.jpg"} type="image/jpeg" />
                <img alt="Mathias" sizes="100vw" loading="lazy" src={PF + "mathias.jpg"} />
              </picture>
            </article>
            <article className="worker x-25-lg theme-odd">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Kunge
                </h3>
                <h4>
                  Graphiste à Douala
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Comme nos autres inscrits, Kunge aime sublimer ses collaborateurs sur dessins papiers et virtuels .
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "kunge.jpg"} type="image/jpeg" />
                <img alt="Kunga" sizes="100vw" loading="lazy" src={PF + "kunge.jpg"} />
              </picture>
            </article>
            <article className="worker x-25-lg theme-even">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Sophie
                </h3>
                <h4>
                  Ingénieure civil à Balmayo
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Sophie, amoureuse des animaux, fait partie des ingénieurs de confiance qui prennent soin des projects de leurs collaborateurs.
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "sophie.jpg"} type="image/jpeg" />
                <img alt="Sophie" sizes="100vw" loading="lazy" src={PF + "sophie.jpg"} />
              </picture>
            </article>
            <article className="worker x-25-lg theme-odd d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Olivier
                </h3>
                <h4>
                  Photograph à Bonamoussadi
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Comme nos autres photographes, Olivier se dépasse chaque jour pour embellir les jardins de ses collaborateurs.
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "olivier.jpg"} type="image/jpeg" />
                <img alt="Olivier" sizes="100vw" loading="lazy" src={PF + "olivier.jpg"} />
              </picture>
            </article>
            <article className="worker x-25-lg theme-even d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Andrée
                </h3>
                <h4>
                  Esthéticienne à Japoma
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Andrée et les autres esthéticiennes, ne demandent qu'à aider leurs collaborateurs pour redonner du peps à leur apparence .
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "andre.jpg"} type="image/jpeg" />
                <img alt="Andrée" sizes="100vw" loading="lazy" src={PF + "andre.jpg"} />
              </picture>
            </article>
            <article className="worker x-25-lg theme-odd d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Loukou
                </h3>
                <h4>
                  Stagiaire comptable à Limbé
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Loukou fait partie des étudiants disponibles pour aider leurs collaborateurs suivants leurs domains d'étude.
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "loukou.jpg"} type="image/jpeg" />
                <img alt="Loukou" sizes="100vw" loading="lazy" src={PF + "loukou.jpg"} />
              </picture>
            </article>
            <article className="worker x-25-lg theme-even d-none d-lg-flex">
              <header className="worker-header x-50 x-100-lg shadow-inner">
                <h3 className="element-title">
                  Gregory
                  <span className="pill theme-pro bg-color">Pro</span>
                </h3>
                <h4>
                  Traiteur à Waga
                </h4>
              </header>
              <div className="worker-detail x-50 x-100-lg">
                <div className="round-mask bg-color worker-detail__inner">
                  <p className="worker-detail__body">
                    Gregory et les autres cuisiniers aiment mettre la main à la pâte pour régaler leurs collaborateurs les plus gourmands et gourmets.
                  </p>
                </div>
              </div>
              <picture className="worker-img">
                <source sizes="(min-width: 992px) calc(1140px/4), 50vw" srcSet={PF + "gregory.jpg"} type="image/jpeg" />
                <img alt="Gregory" sizes="100vw" loading="lazy" src={PF + "gregory.jpg"} />
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
              <figure className="  video-placeholder" >
              <ReactPlayer
              width={'100%'}
              height={'100%'}
              config={{ file: { attributes: {
                autoPlay: true,
                muted: true
              }}}}
              controls
              url = {PF + "collabvid.mp4"}/>
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
                  Vous avez des projets et souhaitez vous rassurer du sérieux de vos futurs partenaires.
                </p>
              </li>
              <li className="insentive border-bottom-sm">
                <h3 className="element-title insentive__title">
                  Consulter le profil de votre futur collaborateur
                </h3>
                <p>
                  De multiples critères de confiance tels que les avis, le profil, les certifications... viennent s'ajouter à l'indice de confiance
                </p>
              </li>
              <li className="insentive border-bottom-sm">
                <h3 className="element-title insentive__title">
                  Evaluer vos rencontres
                </h3>
                <p>
                  Laissez  un avis à ceux avec qui vous interagissez afin d'aider la communauté.
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
                    <img  alt="Michel" width={70} height={70} loading="lazy" importance="low"  />
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
                    <img alt="Carol" width={70} height={70} loading="lazy" importance="low" />
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
                    <img alt="Kalil" width={70} height={70} loading="lazy" importance="low"  />
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
                    <img alt="Emilie" width={70} height={70} loading="lazy" importance="low" />
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
                    <img srcSet={PF + "marc2.jpg"} alt="Nsop" width={70} height={70} loading="lazy" importance="low" src={PF + "marc.jpg"}/>
                  </picture>
                  <figcaption>
                    Nsop
                  </figcaption>
                </figure>
                <span className="bubble-nav__item-label">
                  Nsop
                </span>
              </button>
              <button className="bubble-nav__item btn-seamless theme-odd" type="button">
                <figure className="bubble-nav__shape bubble-shape bg-color">
                  <picture className="bubble-nav__shape-img">
                    <img  alt="Alexandre" width={70} height={70} loading="lazy" importance="low" />
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
                    <img alt="Petra" width={70} height={70} loading="lazy" importance="low"/>
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
                    <img alt="Thierry" width={70} height={70} loading="lazy" importance="low" />
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
            
              
                <div className="round-blockquote swiper-slide theme-even swiper-slide-active" type="button" style={{width: '390px', marginLeft: '6px'}}>
                  <div className="bubble-shape bg-color round-blockquote__shape">
                    <blockquote className="round-blockquote__shape-content">
                      <p>
                        <em>
                          "&nbsp;J'ai créé un lien particulier avec mes clients. Certains m'invitent même à rester manger après ma prestation.&nbsp;"
                        </em>
                      </p>
                      <cite className="round-blockquote__cite">
                        <strong>Nsop</strong>, Bertoua
                      </cite>
                    </blockquote>
                  </div>
                  <picture className="round-blockquote__img bubble-shape">
                    <source sizes="(min-width: 992px) calc(1140px / 3.5), calc(100vw - 40px)" srcSet={PF + "marc.jpg"} type="image/jpeg" />
                    <img alt="Gregory" sizes="100vw" loading="lazy" src={PF + "marc.jpg"} />
                    <figcaption className="sr-only">
                      Nsop
                    </figcaption>
                  </picture>
                </div>
              
            
          </div>
        </section>
        <section className="section pt-0 text-center floating-frame__container">
          <figure className="section__banner">
            <picture className="img-ratio img-ratio-section-banner">
              <source media="(min-width: 992px)" sizes="100vw" srcSet={PF + "collaboration.jpg"} type="image/jpeg" />
              <img srcSet={PF + "collaboration.jpg"} alt="banner" />
            </picture>
          </figure>
          <div className="floating-frame__list">
            <article className="border-bottom-sm floating-frame">
              <header>
                <h3 className="element-title text-dark floating-frame__title">
                  Je cherche un talent
                </h3>
              </header>
              <p className="mb-2 text-muted">
                Offrez-vous l'accès à une communauté  prestataires actifs avec les meilleurs indices de confiance .
              </p>

            </article>
            <article className="floating-frame">
              <header>
                <h3 className="element-title text-dark floating-frame__title">
                  Je partage mon talent
                </h3>
              </header>
              <p className="mb-2 text-muted">
                Faites savoir à vos collaborateurs présents et futurs qu'ils peuvent avoir confiance en vous.
              </p>
            </article>
          </div>
        </section>
        <article className="theme-odd bg-color wrapper article-banner">
          <figure className="article-banner__img">
            <img srcSet={PF + "footbanniere.png"} width="225" height="225" alt="contact" loading="lazy" importance="low"/>
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
      </div> 
      <Footbar/>
    </>
    );
}