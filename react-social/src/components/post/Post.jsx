import "./post.css";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import {useEffect, useState } from "react";
import { axiosInstance } from "../../../config";

export default function Post(post) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const sw = window.innerWidth<890 
  ? 1
  : 2;
  const color =post.post.rate<=1  // would be cleaner with switches cases
  ? '#EBE007'
  : post.post.rate <= 2 
    ? '#F2F20C' 
    : post.post.rate <=3
      ? '#D0D40B'
      : post.post.rate <=4 
        ? '#91ad02'
        : '#7eb312';
  useEffect(() => {
    ;const fetchUser = async () => {
      const res = await axiosInstance.get(`/users?userId=${post.post.userGvId}`);
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
          <Rating className="ratedisplay"  /* Available Props */ 
                        readonly={true}
                        initialValue={post.post.rate}
                        fillColor={color}
                        allowHalfIcon={true}
                        size={21*sw}
                        tooltipDefaultText="Pas d'indice de confiance"
                        showTooltip
                        tooltipStyle={{fontSize:"80%"}}
                />
          <span className="postText" >{post.post?.review}</span>
        </div>
      </div>
    </div>
  );
}