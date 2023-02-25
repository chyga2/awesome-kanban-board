import React from "react";

function Footer(props) {

    return (
        <div>
            <div className="app_footer">
                <p>Active tasks: {props.active}</p>
                <p>Finished tasks: {props.finished}</p>
                <p>Kanban Board by Darina, 2023</p>
            </div>
        </div>
    );
}

export default Footer;
