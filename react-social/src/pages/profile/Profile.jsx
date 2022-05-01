import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Footbar from "../../components/footbar/Footbar";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../../config";


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { user: currentUser} = useContext(AuthContext);
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      ;const res = await axiosInstance.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <div className="topbar">
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
            <div className="profileInfoZone">
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc ? user.desc : "let's live in a trustable world"}</span> 
              </div>
              <div className="profileModifier">
                  {user._id === currentUser._id
                      ? <button className="profileUpdateButton" onClick={() => {window.location.href='/Update'}}> ⚙Paramètres</button>
                      : null
                      }
              </div>
            </div>
            <Feed user={user} />
      </div >
      <div>
      <Footbar/></div>
    </>
  )
}