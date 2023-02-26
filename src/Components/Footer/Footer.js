import React from "react";
import './Footer.css'
function Footer(props) {

    return (
        <div>
            <div className="app_footer">
                <p className="marg_curent">Active tasks: {props.active}</p>
                <p className="marg_curent">Finished tasks: {props.finished}</p>
                <p className="marg_by">Kanban Board by Darina, 2023</p>
            </div>
        </div>
    );
}

export default Footer;
