import React from "react";
import "./Header.css";
import profilePic from "../../Static/image.png"

function Header() {
    return (
        <div className="card_title back">
            <div className="app_nav">
                <h1 className="zag">Awesome Kanban Board</h1>
                <img alt="profile_pic" className="profile_pic" src={profilePic}/>

                <select className="profile_selector">
                    <option className="elect_option">  &Lambda;  </option>
                    <option>Profile</option>
                    <option>Log Out</option>
                </select>
            </div>
        </div>
    );
}

export default Header;
