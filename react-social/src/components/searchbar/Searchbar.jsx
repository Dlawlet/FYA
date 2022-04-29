import { useRef } from "react";
import "./searchbar.css"


export default function Searchbar(post) {
    const search = useRef();
    const searchHandler = async (e) =>{
        e.preventDefault()
        window.location.href='/search/'+search.current.value;
        
      }

  return (
    <form onSubmit={searchHandler} className="hero-form hero-cta">
              <div className="form-input-wrapper js-search js-search-modal-toggle">
                <input className="form-input form-input--icon"  id="search" placeholder="Quel talent recherchez-vous ?" type="text" ref={search}/>
                <button aria-labelledby="heroSearchLabel" className="btn form-input-icon" type="submit">
                  <span className="d-none d-lg-inline me-1" id="heroSearchLabel">
                    Rechercher
                  </span>
                  <svg fill="none" height={15} viewBox="0 0 14 15" width={14} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z" fill="white" />
                  </svg>
                </button>
              </div>
            </form>
  
  );
}