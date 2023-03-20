import React from "react";
import styles from "./css_modules/Navbar.module.css";
import {NavLink} from "react-router-dom";


const NavbarComponent = () => {



    return (
        <nav className={styles.navWrap}>
            <div className={styles.nav}>
                <NavLink to="/pick" className={styles.navComponent}>Pick</NavLink>
                <NavLink to="/trim" className={styles.navComponent}>Trim</NavLink>
            </div>
        </nav>
    )
}

export default NavbarComponent;