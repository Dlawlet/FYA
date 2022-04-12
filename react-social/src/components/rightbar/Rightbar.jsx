import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import Popup from 'reactjs-popup';
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({ user }) {

  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  const ProfileRightbar = () => {
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate: number) => {
      setRating(rate)
      // other logic
  }
    return (
      <>
        <h2 data-css-nypl32="">Sommaire</h2>
        <div className="rightbarInfo">
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
              <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ 
                      fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                      readonly={rating >= 0}
                      initialValue={3.5}
                      fillColor={"#B7DB00"}
                      allowHalfIcon={true}
                      transition={true}
              />
          </div>
          { user.username !== currentUser.username ? 
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
                      size={200}
              />
            </div>
            <input
              className="rateMessage"
              type="textarea"
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
          </Popup>  : <button className="rightbarRatingButton"> Bien joué {user.username} </button> }
        </div>
        
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
