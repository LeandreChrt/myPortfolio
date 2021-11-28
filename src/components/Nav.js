import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ Language, Text, changeLanguage, Active }) {

    return (
        <div id="nav">
            <nav>
                <Link to="/">
                    <p className={`nav_element ${Active === 0 ? 'selected' : ''}`}>{Text.nav.profile[Language]}</p>
                </Link>
                <Link to="/Projets">
                    <p className={`nav_element ${Active === 1 ? 'selected' : ''}`}>{Text.nav.projets[Language]}</p>
                </Link>
                <Link to="/Contact">
                    <p className={`nav_element ${Active === 2 ? 'selected' : ''}`}>{Text.nav.contact[Language]}</p>
                </Link>
                <div id="language">
                    <select defaultValue="en" id="languageSelect" onChange={e => changeLanguage(e)}>
                        <option>en</option>
                        <option>fr</option>
                    </select>
                </div>
            </nav>
        </div>
    )
}