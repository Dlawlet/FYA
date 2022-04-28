import "./search.css"
import Topbar from "../../components/topbar/Topbar";
import React, { useContext} from 'react';
import Footbar from "../../components/footbar/Footbar";
import Searchbar from "../../components/searchbar/Searchbar";
import { AuthContext } from "../../context/AuthContext";


export default function Search(){
    const { user: searchedUser} = useContext(AuthContext);

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

        </div>
    </div>
    <div>
    <Footbar/>
    </div>
    </>)
    }