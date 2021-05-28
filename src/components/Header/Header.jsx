import React from "react";
import styles from "./header.module.css";

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.header__title}>Find your Perfect Home</h1>

                <div className={styles.header__searchbox}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className={styles.header__input}
                    />
                    <button className={styles.header__button}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
