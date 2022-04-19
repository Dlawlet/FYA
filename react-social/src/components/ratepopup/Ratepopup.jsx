import Popup from 'reactjs-popup';
import { Rating } from 'react-simple-star-rating';
import {useRef, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';


export default function Rightbar({ user }) {
 
    const review = useRef();
    const { user: currentUser} = useContext(AuthContext);
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rated: number) => {
    setRating(rated)
    // other logic
    }

    const submitHandler = async (e) =>{
       e.preventDefault()
       const newReview = {
           userGvId: currentUser._id,
           userRcId: user._id,
           rate: rating/20,
           review : review.current.value
       }
       try {
           await axios.post("/posts",newReview);
           // calcul du nouveau rate => TODO : à remplacer par une IA qui calculera la note
           const newRate = ((user.rate*user.nbRate)+(newReview.rate * user.certifLevel))/(user.nbRate+1)
           user.nbRate++
           user.rate=newRate
           
           user.rateData.push([new Date().toLocaleDateString('en-US'),user.rate])
           await axios.put("/users/"+user._id, 
                {userId : user._id, // Attention secu vulnerability
                  nbRate: user.nbRate,
                  rate: user.rate,
                  rateData: user.rateData})
           window.location.reload()
       } catch (error) {
           
       }
    }
      return (
        <>
<Popup trigger={<button className="rightbarRatingButton"> Noter {user.username} </button>}
            modal
            lockScroll={true}
            contentStyle={{maxWidth: '600px',width: '90%',}}
            nested>
          {close => (
      <form className="modal" onSubmit={submitHandler}>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Noter  {user.username} </div>
        <div className="content">
            <div className='profileRating'>
              <Rating className="ratedisplay" onClick={handleRating} ratingValue={rating} /* Available Props */ 
                      fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                      fillColor={"#B7DB00"}
                      allowHalfIcon={true}
                      transition={true}
                      />
            </div>
            <textarea
              required
              className="rateMessage"
              placeholder={'\n \nLaissez un avis à ' + user.username + '. \nCela aidera grandement la communauté' }
              minLength="6"
              ref={review}
            />
        </div>
        <div className="actions">
              <button type="button" className="button">
                Signaler le compte
              </button>
          <button
            type="submit"
            className="button"
            >
            Confirmer
          </button>
        </div>
      </form>
    )}
          </Popup>
 </>);
}
