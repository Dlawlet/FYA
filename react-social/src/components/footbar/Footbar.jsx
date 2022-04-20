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
                            <a href="/">Creer un compte</a>
                        </li>
                        <li>
                            <a href="/">Consulter des comptes</a>
                        </li>
                        <li>
                            <a href="/">Meilleures scores</a>
                        </li>
                        <li>
                            <a href="/">Fonctionnement indice</a>
                        </li>
                        <li>
                            <a href="/">Invitez vos amis</a>
                        </li>
                        </ul>
                    </div>
                    <div className="fh-links">
                        <div className="fh-title">
                        Besoin d’aide ?
                        </div>
                        <ul>
                        <li>
                            <a href="/">Comment ça marche ?</a>
                        </li>
                        <li>
                            <a href="/">Plans tarifaires</a>
                        </li>
                        <li>
                            <a href="/">Ncemh Actus</a>
                        </li>
                        <li>
                            <a href="/">Contactez-nous</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="/">Aide/FAQ</a>
                        </li>
                        </ul>
                    </div>
                    <div className="fh-links">
                        <div className="fh-title">
                        À propos
                        </div>
                        <ul>
                        <li>
                            <a href="/">Ncemh</a>
                        </li>
                        <li>
                            <a href="/">L'équipe</a>
                        </li>
                        <li>
                            <a href="/">Emplois/Stages</a>
                        </li>
                        <li>
                            <a href="/">Espace presse</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Sites partenaires</a>
                        </li>
                        </ul>
                    </div>
                    {/* <div className="fh-links">
                        <div className="fh-title">
                        Suivez-nous
                        </div>
                        <div className="social-networks">
                        <a target="_blank" title="Facebook" rel="noreferrer" href="/"><img width={11} height={20} alt="Facebook" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/facebookb2691b0406771ce5a230.svg" />
                        </a><a target="_blank" title="Linkedin" rel="noreferrer" href="/"><img width={20} height={20} alt="Linkedin" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/linkedindf4802e013e1660125fb.svg" />
                        </a><a target="_blank" title="Twitter" rel="noreferrer" href="/"><img width={20} height={16} alt="Twitter" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/twittere100d10ab607f7ed4179.svg" />
                        </a><a target="_blank" title="Instagram" rel="noreferrer" href="/"><img width={20} height={20} alt="Instagram" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/instagram12ab65942cd124d0f413.svg" />
                        </a><a target="_blank" title="Vimeo" rel="noreferrer" href="/"><img width={20} height={17} alt="Vimeo" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/vimeoc67e439a07c3bc188071.svg" />
                        </a></div>
                        <div className="fh-title fh-t-app">
                        Découvrez notre application mobile
                        </div>
                        <div className="fh-app">
                        <a target="_blank" title="AppStore" rel="noreferrer" href="https://itunes.apple.com/be/app/listminut/id1357150375?l=fr"><img width={135} height={45} alt="AppStore" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/appStore-fr0a1ec41d4075db6dfd09.svg" />
                        </a><a target="_blank" title="Google Play" rel="noreferrer" href="https://play.google.com/store/apps/details?id=be.listminut.app"><img width={135} height={45} alt="Google Play" loading="lazy" src="https://ringtwice.be/packs/assets/images/footer/googlePlay-fr0df80dceb00cabac83b5.svg" />
                        </a>
                        </div>
                    </div> */}
                    </div>
                
                    <div className="f-review">
                    <a href="/fr/testimonials" title="Avis des utilisateurs">
                        <div className="f-review-text">
                        www.Ncemh.com est évalué 4.5/5 par 1376 membres
                        </div>
                    </a>
                    </div>
                    <div className="f-legal">
                    © 2022 -HWork
                    - Ncemh -
                    <a href="/">Conditions d'utilisation</a>
                    -
                    <a href="/">Plan du site</a>
                    </div>
                </div>
                </footer>
    </>);
}