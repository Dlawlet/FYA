import "./search.css"
import Topbar from "../../components/topbar/Topbar";
import React, { useEffect, useState} from 'react';
import Footbar from "../../components/footbar/Footbar";
import Usercard from "../../components/usercard/Usercard";
import Searchbar from "../../components/searchbar/Searchbar";
import axios from "axios";
import { useParams } from "react-router";


export default function Search(){
    const searchedUser = useParams().username;

    console.log(searchedUser)
    const [users, setUsers] = useState([]);
    useEffect (() => {
        const fetchUsers = async () => {
        const res = await axios.get("/users/search/" + searchedUser);
        console.log(res)
        setUsers(res.data);
        };
        fetchUsers();
    }, [searchedUser]);

    return (
    <>
    <div className="Topbar">
    <Topbar/>
    </div>
    <div className="searchContent">
        <div className="searchbar">
        <Searchbar />
        </div>
        <div className="searchResults">
        {users.length>0
              ? users.map((p) => (
                  <Usercard key={p._id} user={p} />
                ))
              :   <h2 className="noPost"> Il n' a pas d'utilisateur nommé {searchedUser} </h2>}
        </div>
    </div>
    <div>
    <Footbar/>
    </div>
    </>)
    }