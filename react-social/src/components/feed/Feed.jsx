import "./feed.css";
import Statdiv from "../statdiv/Statdiv"
import Rightbar from "../rightbar/Rightbar";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  const postId = "625a75c85a8b91a4888d47dc"
  useEffect (() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/profile/" + user.username);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [user.username]);

  const ProfileFeed = () => {
    return (
      <div className="feed">
        <div className="feedWrapper">
          <div>
            <div className="profileCertification">
                <h2 data-css-nypl32="">Certifications</h2>
                <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Carte d'identité</span>
                      <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Domicile</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Diplome</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Casier</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Compte Bancaire</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey"> Profession</span>
                      <span className="rightbarInfoValue">
                        {user.relationship === 1
                          ? "Etudiant"
                          : user.relationship === 2
                          ? "Proffeseur"
                          : "-"}
                      </span>
          </div>
              </div>
            <div  className="profileNote">
            <Rightbar user={user} /> </div>
          </div>
          <div className="profileStatistiques">
          <h2 className="css-nypl324">Statistiques</h2>
            <div className="feedStatdiv">
            <Statdiv/> 
            </div>
          </div>
          <div className="profileActivity">
          <h2 className="css-nypl3249">Activités</h2>
            <div className="postsActivity">
              {posts.length>0
              ?    posts.map((p) => (
                  <Post key={p._id} post={p} />
                ))
              :   <h2 className="noPost"> les commentaires sur {user.username} apparaitrons ici </h2>}
            </div>
              </div> 
          <div className="profileLifePath">
          <h2 className="css-nypl324">Parcours</h2>  
                <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey2">Carte d'identité</span>
                      <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey2">Domicile</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey2">Diplome</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey2">Casier</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey2">Compte Bancaire</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey2"> Profession</span>
                      <span className="rightbarInfoValue">
                        {user.relationship === 1
                          ? "Etudiant"
                          : user.relationship === 2
                          ? "Proffeseur"
                          : "-"}
                      </span>
          </div>
              
          </div>  
        </div>
      </div>
    ); 
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        {<ProfileFeed />}
      </div>
    </div>
  );
}
