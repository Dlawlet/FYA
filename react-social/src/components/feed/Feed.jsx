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
              <h1 style={{ marginLeft: 10 }}> Certifications </h1>
                <h3 style={{ marginLeft: 30 , zIndex: -10}}> Carte de d'identifié : <h5 style={{ display: "inline" }}>non verifié</h5> </h3>
                <h3 style={{ marginLeft: 30 , zIndex: -10}}> Lieu d'habitation : <h5 style={{ display: "inline" }}>non verifié</h5> </h3>
                <h3 style={{ marginLeft: 30 , zIndex: -10}}> Plus haut diplome-<h6 style={{ display: "inline", color:"gray" }}>Master</h6>: <h5 style={{ display: "inline" }}>non verifié</h5> </h3>
            </div>
            <div  className="profileNote">
            <Rightbar user={user} /> </div>
          </div>
          <div className="profileStatistiques">
            <h1 style={{ marginLeft: 10 }}>Statistics </h1> 

            
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
            <h1 style={{ marginLeft: 10 }}>Activity </h1>  
            <h3 style={{ marginLeft: 30 }}>👍 Pierre Jofang vous a donné 5 étoiles </h3>
            <h3 style={{ marginLeft: 30 }}> ★ Vous avez notez l'entreprise Mbam  </h3>
            <h3 style={{ marginLeft: 30 }}> ✉ Monti Paul vous a laisser un commentaire </h3>
          </div>  
          <div className="profileLifePath">
            <h1 style={{ marginLeft: 10 }}>Life path </h1>  
            <h3 style={{ marginLeft: 30 }}> Prix et distinctions: champion régional de Karaté  </h3>
            <h3 style={{ marginLeft: 30 }}> Profession : Mangeur d'argent  </h3>
            <h3 style={{ marginLeft: 30 }}> Etudes Supérieurs  blabla blabla bla bla </h3>
            <h3 style={{ marginLeft: 30 }}> Etudes secondaires  blabla blabla bla bla </h3>
            <h3 style={{ marginLeft: 30 }}> Etudes primaires  blabla blabla bla bla </h3>
            <h3 style={{ marginLeft: 30 }}> née le 01/01/2000 Sexe M</h3>
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
