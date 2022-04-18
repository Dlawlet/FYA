import "./post.css";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Post(post) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.post.userGvId}`);
      console.log("yolo0oooooooooooo")
      setUser(res.data);
    };
    fetchUser();
  }, [post.post.userGvId]);

  return (
    console.log(post),
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
          <span className="postText">{post.post?.review}</span>
        </div>
      </div>
    </div>
  );
}