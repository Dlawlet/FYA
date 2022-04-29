import "./feed.css";
import Statdiv from "../statdiv/Statdiv"
import Rightbar from "../rightbar/Rightbar";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  useEffect (() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/profile/" + user.username);
      console.log(res)
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
                      <span className="rightbarInfoValue">{user.cniCheck?"vérifiée":"Non vérifée"}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Domicile</span>
                      <span className="rightbarInfoValue">{user.houseCheck?"vérifiée":"Non vérifée"}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Diplome</span>
                      <span className="rightbarInfoValue">{user.eduCheck?"vérifiée":"Non vérifée"}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Compte Bancaire</span>
                      <span className="rightbarInfoValue">{user.bankCheck?"vérifiée":"Non vérifée"}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey"> Profession</span>
                      <span className="rightbarInfoValue">{user.workCheck?"vérifiée":"Non vérifée"}</span>
                    </div>
              </div>
            <div  className="profileNote">
            <Rightbar user={user} /> </div>
          </div>
          <div className="profileStatistiques">
          <h2 className="css-nypl324">Statistiques</h2>
            {user.nbRate >=1   
            ?<div className="feedStatdiv"><Statdiv user={user}/> </div>
            :<h2 className="noStat"> {user.username} n'a pas encore d'indice de confiance </h2>}
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
                {user.parcours
                ?  user.parcours
                :  <h2 className="noStat"> Parcours de {user.username} indisponible </h2> }
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
