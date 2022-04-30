import "./usercard.css"
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Usercard(user) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const sw = window.innerWidth<890 
  ? 1
  : 2;
  const color =user.user.rate<=1  // would be cleaner with switches cases
  ? '#EBE007'
  : user.user.rate <= 2 
    ? '#F2F20C' 
    : user.user.rate <=3
      ? '#D0D40B'
      : user.user.rate <=4 
        ? '#91ad02'
        : '#7eb312';

  return (
    
    <div className="usercard">
      <div className="usercardWrapper">
        <div className="usercardTop">
          <div className="usercardTopLeft">
            <Link to={`/profile/${user.user.username}`}>
              <img
                className="usercardProfileImg"
                src={
                    user.user.profilePicture
                    ? PF + user.user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <div className="name">
            <span className="usercardUsername">{user.user.username}</span>
            <span className="usercardText">{user.user.desc}</span>
            </div>
          </div>
            
        </div>
        
        <div className="usercardCenter">
          <Rating className="ratedisplay"  /* Available Props */ 
                        readonly={true}
                        initialValue={user.user.rate}
                        fillColor={color}
                        allowHalfIcon={true}
                        size={30*sw}
                        tooltipDefaultText="Pas d'indice de confiance"
                        showTooltip
                        tooltipStyle={{fontSize:"80%"}}
                />
        </div>
      </div>
    </div>
  );
}