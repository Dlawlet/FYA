import { useContext, useEffect, useState } from "react";
import "./feed.css";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,} from "recharts"
import { format, parseISO, subDays } from "date-fns";



const data = [];
for (let num = 6; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: Math.random()*(5),
  });
}

export default function Feed({ username }) {
  const [, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  const HomeFeed = () => {
    return (
      <div>
          {(!username || username === user.username) }
      </div>);
  };

  const ProfileFeed = () => {
    return (
      <div className="feed">
        <div className="feedWrapper">
          <div>
            <div className="profileCertification">
                <h2 data-css-nypl32="">Certifications</h2>
                <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Carte d'identité</span>
                      <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Domicile</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Diplome</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Casier</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Compte Bancaire</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey"> ✅ | Profession</span>
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
          <h2 data-css-nypl32="">Statistiques</h2>

            
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                  <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tickFormatter={(str) => {
                  const date = parseISO(str);
                  if (date.getDate() % 7 === 0) {
                    return format(date, "MMM, d");
                  }
                  return "";
                }}
              />

                <YAxis
                  datakey="value"
                  axisLine={false}
                  tickLine={false}
                  tickCount={6}
                  tickFormatter={(number) => `${number.toFixed(1)}`}
                />

                <Tooltip content={<CustomTooltip />} />

                <CartesianGrid opacity={0.1} vertical={false} />
              </AreaChart>
          </ResponsiveContainer>

          </div>  
          <div className="profileActivity">
          <h2 data-css-nypl32="">Activités</h2>
                <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Carte d'identité</span>
                      <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Domicile</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Diplome</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Casier</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Compte Bancaire</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey"> ✅ | Profession</span>
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
          <h2 data-css-nypl32="">Parcours</h2>  
                <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Carte d'identité</span>
                      <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Domicile</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Diplome</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Casier</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">✅ | Compte Bancaire</span>
                      <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey"> ✅ | Profession</span>
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

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="tooltip">
          <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>{"★"+payload[0].value.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="feed">
      <div className="feedWrapper">
        {user ? <ProfileFeed /> : <HomeFeed/>}
      </div>
    </div>
  );
}
