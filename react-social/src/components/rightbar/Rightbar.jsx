import "./rightbar.css";
import { useContext, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import Ratepopup from "../ratepopup/Ratepopup"
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({ user }) {
 
  const { user: currentUser} = useContext(AuthContext);
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
              <Rating className="ratedisplay" onClick={handleRating} ratingValue={rating} /* Available Props */ 
                      fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                      readonly={true}
                      initialValue={3.5}
                      fillColor={"#B7DB00"}
                      allowHalfIcon={true}
                      transition={true}
                      size={55}
              />
          </div>
          { user.username !== currentUser.username ? 
          <Ratepopup user ={user}/>  : <button className="rightbarRatingButton"> Bien joué {user.username} </button> }
        
        
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
