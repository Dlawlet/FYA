import "./feed.css";
import Statdiv from "../../components/statdiv/Statdiv"
import Rightbar from "../../components/rightbar/Rightbar";


export default function Feed({ user }) {
  

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
          <h2 className="css-nypl324">Activités</h2>
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
