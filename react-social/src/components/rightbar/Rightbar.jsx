import "./rightbar.css";
import { useContext, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import Ratepopup from "../ratepopup/Ratepopup"
import { AuthContext } from "../../context/AuthContext";
import { renderMatches } from "react-router";

export default function Rightbar({ user }) {
 
  const { user: currentUser} = useContext(AuthContext);
  const color = user.rate<=1  // would be cleaner with switches cases
  ? '#EBE007'
  : user.rate <= 2 
    ? '#F2F20C' 
    : user.rate <=3
      ? '#D0D40B'
      : user.rate <=4 
        ? '#B7DB00'
        : '#ABF513';
  const ProfileRightbar = () => {
    return (
      <>
        <h2 data-css-nypl32="">Sommaire</h2>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ville:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Pays:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">profession:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Etudiant"
                : user.relationship === 2
                ? "Proffeseur"
                : "-"}
            </span>
          </div>
          <div className='rightbarRate'>
              <Rating className="ratedisplay"
                      fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                      readonly={true}
                      initialValue={user.rate}
                      fillColor={color}
                      allowHalfIcon={true}
                      transition={true}
                      size={55}
              />
          </div>
          { user.username !== currentUser.username ? 
          <Ratepopup user ={user}/>  : <button className="rightbarRatingButton"> 
          {user.rate <= 2.5
          ? "Bienvenue "
          : "Bravo "} 
          {user.username} </button> }
        
        
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
