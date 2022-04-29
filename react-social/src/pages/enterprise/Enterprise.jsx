import Topbar from "../../components/topbar/Topbar";
import "./enterprise.css"
import React from 'react';
import Footbar from "../../components/footbar/Footbar";

export default function Enterprise(){

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
  <>
       <div>
       <header className="hero">
          <Topbar/>
          <div className="bannerTxt">
          <h1 className="page-title1">
              Entreprises et Business
            </h1>
            <h1 className="page-title2">
             Nourrissez la confiance en vous, Montrez pattes blanches à vos clients, Investisseurs et Collaborateurs.
            </h1></div>
         
          <picture className="hero-img">
            <img  alt="Des collaborateurs de confiance Ncemh" className="hero-img__img" size="10vw" src={PF+"enterprisebanner.jpg"}/>
          </picture> 
        </header>
        <div className="EnterpriseWrapper">
        <div className="engage1">
         <div style={{backgroundImage:{PF}+"enterprisebanner.jpg", zIndex:"1"}}></div>
        <div className="Background__StyledBackground-sc-budbx4-0 dVIVHi snipcss-yaqFy">
        <div className="Spacing-sc-nd6fy-0 gtEqxs">
          <div className="LeftRight__ContentWrapper-sc-15hur3s-0 jyNkZg">
            <div className="LeftRight__ContentText-sc-15hur3s-1 eZzKrz">
              <span className="LeftRight__SubHeader-sc-15hur3s-7 bfKVzQ">
              </span>
              <h3 >
                Instaurez la confiance auprès de vos clients avec Ncemh
              </h3>
              <div className="from-markdown LeftRight__ContentTextPrimary-sc-15hur3s-2 fBRiMF">
                <p className="Markdown__Paragraph-sc-wk78ky-0 jspqsu snip-p">
                  Fondée sur l'honnêteté et la transparence, Ncemh est la plateforme d'avis par excellence.Les entreprises utilisent Ncemh pour consolider leur crédibilité et améliorer leur réputation.
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
        </div>
        <div className="engage2">
          <div className="Background__StyledBackground-sc-budbx4-0 dVIVHi snipcss-yaqFy">
          <div className="Spacing-sc-nd6fy-0 gtEqxs">
            <div className="LeftRight__ContentWrapper-sc-15hur3s-0 jyNkZg">
              <div className="LeftRight__ContentText-sc-15hur3s-1 eZzKrz">
                <span className="LeftRight__SubHeader-sc-15hur3s-7 bfKVzQ">
                </span>
                <h3>
                Collectez des avis de qualité en facilitant l'évaluation de votre entreprise pour vos clients
                </h3>
                <div className="from-markdown LeftRight__ContentTextPrimary-sc-15hur3s-2 fBRiMF">
                  <p className="Markdown__Paragraph-sc-wk78ky-0 jspqsu snip-p">
                  Utilisez le besoin de s'exprimer de vos clients à votre avantage et bâtissez votre marque sur la base de leurs expériences.
                  </p>
                </div>
              </div>
              </div>
          </div>
        </div>
        </div>
        <div className="engage3">
        <div className="Background__StyledBackground-sc-budbx4-0 dVIVHi snipcss-yaqFy">
        <div className="Spacing-sc-nd6fy-0 gtEqxs">
          <div className="LeftRight__ContentWrapper-sc-15hur3s-0 jyNkZg">
            <div className="LeftRight__ContentText-sc-15hur3s-1 eZzKrz">
              <span className="LeftRight__SubHeader-sc-15hur3s-7 bfKVzQ">
              </span>
              <h3 >
              Augmentez vos conversions grâce au pouvoir des avis clients
              </h3>
              <div className="from-markdown LeftRight__ContentTextPrimary-sc-15hur3s-2 fBRiMF">
                <p className="Markdown__Paragraph-sc-wk78ky-0 jspqsu snip-p">
                Partagez vos meilleurs avis sur les emplacements stratégiques. Renforcez votre réputation et augmentez vos ventes.
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
        </div>
      <div className="pricing"><div className="Spacing-sc-nd6fy-0 ksxGdV snipcss-fvigX">
  <div className="Spacing-sc-nd6fy-0 hFSnJW">
    <div className="HeaderSubheader__HeaderWrapper-sc-1g73br4-0 knIond plans__PageHeader-sc-r0f5tr-0 bzAUKf">
      <h4 className="Headers__Heading-sc-1lr3p22-0 Headers__H4-sc-1lr3p22-4 HeaderSubheader__Subheader-sc-1g73br4-1 iHutuI fNLbhB kgKAUB snip-h4">
        Packs et tarifs
      </h4>
      <h1 className="Headers__Heading-sc-1lr3p22-0 Headers__H1-sc-1lr3p22-1 iDtbXR lfssRb snip-h1">
        Choisissez le pack qui vous convient
      </h1>
    </div>
  </div>
  <div className="PlanColumn__PlanColumnsContainer-sc-1u5iaqg-0 jbwNnR">
    <div className="PlanColumn__PlanWrapper-sc-1u5iaqg-2 bODJcb">
      <div className="PlanColumn__Column-sc-1u5iaqg-3 fgCtYb">
        <h2 className="Headers__Heading-sc-1lr3p22-0 Headers__H2-sc-1lr3p22-2 PlanColumn__Title-sc-1u5iaqg-4 hupsSt fqRQOL UHAur snip-h2">
          Pack de Surface
        </h2>
        <div className="from-markdown PlanColumn__Pricing-sc-1u5iaqg-6 eyUuBH">
          <p className="PlanColumn__Paragraph-sc-1u5iaqg-10 cxXPwH snip-p">
            <strong>
              25'000 XAF
            </strong>
          </p>
          <blockquote>
            <p className="PlanColumn__Paragraph-sc-1u5iaqg-10 cxXPwH snip-p">
              <strong style={{color:"black"}}>
              {"->"}  par  Mois
              </strong>
            </p>
          </blockquote>
        </div>
        <div className="from-markdown ">
          <p className="Markdown__Paragraph-sc-wk78ky-0 jspqsu snip-p">
            Rapprochez-vous de vos clients et affichez vos notes.
          </p>
        </div>
        <div className="from-markdown PlanColumn__Details-sc-1u5iaqg-5 dneNaO">
          <ul className="PointsList__PointList-sc-1qu728y-0 hodkIp">
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
              Revendiquez votre page de profil
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
              Vérification des locaux 
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
              Vérifications de surface des services proposés
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
              Vérification des réseaux sociaux et sites web
            </li>
          </ul>
        </div>
        <div className="PlanColumn__ButtonText-sc-1u5iaqg-7 eFKmLr">
          <a className="Buttons__BaseButton-sc-169h683-0 Buttons__StyledOutlinedButton-sc-169h683-2 iOElCn ldDvrf plans__CTAButton-sc-r0f5tr-2 eoynLT snip-a" href="/signup?cta=free-signup_plans">
            Contactez nous
          </a>
        </div>
      </div>
    </div>
    <div className="PlanColumn__PlanWrapper-sc-1u5iaqg-2 jLJbNI">
      <div className="PlanColumn__Column-sc-1u5iaqg-3 eulwxY">
        <h2 className="Headers__Heading-sc-1lr3p22-0 Headers__H2-sc-1lr3p22-2 PlanColumn__Title-sc-1u5iaqg-4 kWcSsE fqRQOL kILYPn snip-h2">
          Pack de Croisière
        </h2>
        <div className="from-markdown PlanColumn__Pricing-sc-1u5iaqg-6 eyUuBH">
          <p className="PlanColumn__Paragraph-sc-1u5iaqg-10 cxXPwH snip-p">
            <em>
              À partir de
            </em>
            <strong>
              50'000 XAF
            </strong>
          </p>
          <blockquote>
            <p className="PlanColumn__Paragraph-sc-1u5iaqg-10 cxXPwH snip-p">
              <strong>
              {"->"} par Trimestre
              </strong>
            </p>
          </blockquote>
        </div>
        <div className="from-markdown ">
          <p className="Markdown__Paragraph-sc-wk78ky-0 kysqdF snip-p">
            Montrez vos avis dans toutes vos communications marketing.
          </p>
        </div>
        <div className="from-markdown PlanColumn__Details-sc-1u5iaqg-5 cMhHuA">
          <ul className="PointsList__PointList-sc-1qu728y-0 hodkIp">
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
              Mettez à jour votre page de profil
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
              Invitez plus de clients à laisser un avis
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
              Notre équipe Customer Success à votre disposition
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
            Vérification des status de l'entreprise
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
            Vérifications de la régularité légale de l'entreprise
            </li>
          </ul>
          <ul className="PointsList__PointList-sc-1qu728y-0 hodkIp">
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Vérification des locaux
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Vérifications précise des services proposés
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Vérification des réseaux sociaux et sites web
            </li>
          </ul>
        </div>
        <div className="PlanColumn__ButtonText-sc-1u5iaqg-7 eFKmLr">
          <a className="Buttons__BaseButton-sc-169h683-0 Buttons__Button-sc-169h683-1 iOElCn dIGfke plans__CTAButton-sc-r0f5tr-2 eoynLT snip-a" href="/request-demo?cta=request-demo_plans_standard">
            Contactez Nous
          </a>
        </div>
      </div>
    </div>
    <div className="PlanColumn__PlanWrapper-sc-1u5iaqg-2 bODJcb">
      <div className="PlanColumn__Column-sc-1u5iaqg-3 fgCtYb">
        <h2 className="Headers__Heading-sc-1lr3p22-0 Headers__H2-sc-1lr3p22-2 PlanColumn__Title-sc-1u5iaqg-4 hupsSt fqRQOL UHAur snip-h2">
          Pack de Profondeur
        </h2>
        <div className="from-markdown PlanColumn__Pricing-sc-1u5iaqg-6 eyUuBH">
          <p className="PlanColumn__Paragraph-sc-1u5iaqg-10 cxXPwH snip-p">
            <strong>
              115'000 XAF
            </strong>
          </p>
          <blockquote>
            <p className="PlanColumn__Paragraph-sc-1u5iaqg-10 cxXPwH snip-p">
              <strong style={{color:"black"}}>
                {"->"} par  Trimestre
              </strong>
            </p>
          </blockquote>
        </div>
        <div className="from-markdown ">
          <p className="Markdown__Paragraph-sc-wk78ky-0 jspqsu snip-p">
           Attrirez des investisseurs et collaborateurs avec la mention "deeply checked" (vérification en Profondeur)
          </p>
        </div>
        <div className="from-markdown PlanColumn__Details-sc-1u5iaqg-5 dneNaO">
        <ul className="PointsList__PointList-sc-1qu728y-0 hodkIp">
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
              Mettez à jour votre page de profil
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
              Analyse de vos avis et retours de performance
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
              Notre équipe Customer Success à votre disposition
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
            Vérification des finances de l'entreprise
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 sAcRU rMoXh">
            Vérification bilan trimestriel
            </li>
          </ul>
          <ul className="PointsList__PointList-sc-1qu728y-0 hodkIp">
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Vérifications de la régularité légale de l'entreprise
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Surveillance anti-spam haineux
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Ajout aux trustables Socities bilboard
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Lorem Ipsum
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Lorem Ipsum
            </li>
            <li className="PointsList__Point-sc-1qu728y-1 PlanColumn__PointListPoint-sc-1u5iaqg-8 SpAY rMoXh">
            Lorem Ipsum
            </li>
          </ul>
        </div>
        <div className="PlanColumn__ButtonText-sc-1u5iaqg-7 eFKmLr">
          <a className="Buttons__BaseButton-sc-169h683-0 Buttons__StyledOutlinedButton-sc-169h683-2 iOElCn ldDvrf plans__CTAButton-sc-r0f5tr-2 eoynLT snip-a" href="/signup?cta=free-signup_plans">
            Contactez Nous
          </a>
        </div>
      </div>
    </div>
    
    </div>
</div>
    </div>
  </div>
      <Footbar/>
  </div>
</>);}