import React from "react";

export default function Navigator(): JSX.Element {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1 className="nav-logo">Wooseok Kwon<span className="logo-end">.</span></h1>
                <ul className="nav-menu">
                    <li><a href="#Introduce">Introduce</a></li>
                    <li><a href="#Tech">Tech</a></li>
                    <li><a href="#career">Career</a></li>
                </ul>
            </div>
        </nav>
    );
}
