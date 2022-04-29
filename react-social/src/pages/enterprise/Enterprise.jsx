import Topbar from "../../components/topbar/Topbar";
import "./enterprise.css"
import React from 'react';
import Footbar from "../../components/footbar/Footbar";
import Searchbar from "../../components/searchbar/Searchbar";


export default function Enterprise(){

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
            <Searchbar />
            <a className="link link-nowrap" href="/register"> {/* need to check if logout */} 
                Je souhaite m'inscrire
                <i className="icon-arrow-right" />
            </a> 
          </div>
          <picture className="hero-img">
            <img  alt="Des collaborateurs de confiance Ncemh" className="hero-img__img" size="150vw" src={PF+"img5.jpg"}/>
          </picture> 
        </header>
      </div> 
      <Footbar/>
    </>
    );
}