import React from "react";
import styles from "./header.module.css";

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.header__title}>Find your Perfect Home</h1>
            </div>
        </div>
    );
};

export default Header;
