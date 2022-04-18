import "./post.css";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Post(post) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const sw = window.innerWidth<890 
  ? 1
  : 2;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.post.userGvId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.post.userGvId]);
  
  

  return (
    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                    user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.post.createdAt)}</span>
          </div>
        </div>
        <div className="postCenter">
          <Rating className="ratedisplay" ratingValue={post.rate} /* Available Props */ 
                        fillColorArray={['#EBE007', '#F2F20C', '#D0D40B', '#B7DB00', '#ABF513']} 
                        readonly={true}
                        initialValue={post.post.rate}
                        fillColor={"#B7DB00"}
                        allowHalfIcon={true}
                        transition={true}
                        size={21*sw}
                        showTooltip
                        tooltipStyle={{fontSize:"80%"}}
                />
          <span className="postText">{post.post?.review}</span>
        </div>
      </div>
    </div>
  );
}