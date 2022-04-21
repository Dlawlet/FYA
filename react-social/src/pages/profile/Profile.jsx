import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Footbar from "../../components/footbar/Footbar";
import { AuthContext } from "../../context/AuthContext";


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { user: currentUser} = useContext(AuthContext);
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <div className="topbar" style={{ zIndex: 10 }}>
      <Topbar /></div>
      <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc ? user.desc : "let's live in a trustable world"}</span>
                {true == true
                ? <button className="profileUpdateButton"> modifier</button>
                : null} 
            </div>
            <Feed user={user} />
      </div >
      <Footbar/>
    </>
  );
}