import "./usercard.css"
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import {useEffect, useState } from "react";
import axios from "axios";

export default function usercard(usercard) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const sw = window.innerWidth<890 
  ? 1
  : 2;
  const color =usercard.usercard.rate<=1  // would be cleaner with switches cases
  ? '#EBE007'
  : usercard.usercard.rate <= 2 
    ? '#F2F20C' 
    : usercard.usercard.rate <=3
      ? '#D0D40B'
      : usercard.usercard.rate <=4 
        ? '#B7DB00'
        : '#ABF513';
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${usercard.usercard.userGvId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [usercard.usercard.userGvId]);
  
  

  return (
    
    <div className="usercard">
      <div className="usercardWrapper">
        <div className="usercardTop">
          <div className="usercardTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="usercardProfileImg"
                src={
                    user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="usercardUsername">{user.username}</span>
            <span className="usercardDate">{format(usercard.usercard.createdAt)}</span>
          </div>
        </div>
        <div className="usercardCenter">
          <Rating className="ratedisplay" ratingValue={usercard.rate} /* Available Props */ 
                        fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                        readonly={true}
                        initialValue={usercard.usercard.rate}
                        fillColor={color}
                        allowHalfIcon={true}
                        transition={true}
                        size={21*sw}
                        showTooltip
                        tooltipStyle={{fontSize:"80%"}}
                />
          <span className="usercardText">{usercard.usercard?.review}</span>
        </div>
      </div>
    </div>
  );
}