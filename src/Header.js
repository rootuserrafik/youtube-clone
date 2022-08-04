import React, {useState} from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import Notifications from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";


// es7 snippets (Go download as an extension on VSC)

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon>Menu</MenuIcon>
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt=""/>
                </Link>
            </div>
            <div className="search__area">     
                <input 
                onChange={(e) => setInputSearch (e.target.value)}
                value={inputSearch}
                className="search__input" 
                type="text" 
                placeholder="Search"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="search__btn">Search Icon</SearchIcon>
                </Link>
            </div>
            <div className="header__right">     
                <VideoCallIcon className="header__right__icons">Video Call Icon</VideoCallIcon>
                <Apps className="header__right__icons">Apps Icon</Apps>
                <Notifications className="header__right__icons">Notifications</Notifications>
                <AccountCircleIcon src="lh6.googleusercontent.com/-0QYhZKU9Lxg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck0JvMKsk3Qn7RvnNBbS4t3JofAwA/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg" alt="">Account Circle Icon</AccountCircleIcon>
            </div>
            
            

        </div>
    )
}

export default Header
