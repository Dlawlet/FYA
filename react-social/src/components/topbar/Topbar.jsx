import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
    <nav className="topbar">
     
    <figure className="topbar__logo">
    <Link to="/">
      <img className="img-fluid" alt="FYA" width={162} height={43} src={PF + "Ncemtopbar.png"} />
      </Link>
      <figcaption className="sr-only">
        FYA
      </figcaption>
    </figure>
     
    <button className="topbar__nav-toggle js-menu-toggle btn-seamless d-lg-none" type="button">
              <i className="hamburger-icon" />
              <span className="sr-only">
                Ouvrir menu
              </span>
            </button>
    <div className="topbar__nav">
      <ul className="topbar__nav-list">
        <li className="topbar__nav-item">
          <a className="btn btn-border-light" href="/enterprise">
            Entreprises
          </a>
        </li>
        <li className="topbar__nav-item">
          <button className="btn"
             onClick={() => {localStorage.clear("token");window.location.href='/login'}}>
            Sign / Log
          </button>
        </li>
        <li className="topbar__nav-item">
         <Link to={user? `/profile/${user.username}` : '/login' }>
           <img title="Se connecter / S'inscrire"
              src={ user?
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
                    : PF + "person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
          <a className="btn d-block d-lg-none" href="/users/sign_in?locale=fr">
            Se connecter / S'inscrire
          </a>
        </li>
        <li className="topbar__nav-item topbar__nav-item--lang">
          <div>{/*} className="btn-dropdown js-dropdown">
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
          */}</div>
        </li>
      </ul>
    </div>
    </nav>
    </>
  );
}
