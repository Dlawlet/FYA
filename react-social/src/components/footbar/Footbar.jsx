import "../../pages/home/home.css"

export default function Footbar() {
  
    return (
      <>
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
    </>);
}