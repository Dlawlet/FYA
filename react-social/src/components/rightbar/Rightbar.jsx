import "./rightbar.css";
import { useState } from "react";
import { Rating } from 'react-simple-star-rating';
import Popup from 'reactjs-popup';
export default function Rightbar({ user }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate: number) => {
      setRating(rate)
      // other logic
  }
    return (
      <>
        <h2 className="rightbarTitle">User's Sommary</h2>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
          <div className='rightbarRate'>
              <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ 
                      fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                      readonly={rating >= 0}
                      initialValue={3.5}
                      fillColor={"#B7DB00"}
                      allowHalfIcon={true}
                      transition={true}
              />
          </div>
          <Popup trigger={<button className="rightbarRatingButton"> Noter {user.username} </button>}
            modal
            lockScroll={true}
            contentStyle={{maxWidth: '600px',width: '90%',}}
            nested>
          {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Noter  {user.username} </div>
        <div className="content">
            <div className='profileRating'>
              <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ 
                      fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                      transition={true}
                      size={100}
              />
            </div>
            <input
              className="rateMessage"
              type="text"
              minLength="6"
              //ref={commentaire}
            />
        </div>
        <div className="actions">
              <button type="button" className="button">
                Signaler le compte
              </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}>
            Confirmer
          </button>
        </div>
      </div>
    )}
          </Popup>      
        </div>
        
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
