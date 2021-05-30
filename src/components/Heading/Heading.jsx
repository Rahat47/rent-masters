import React from "react";
import styles from "./heading.module.css";
const Heading = ({ subtitle, title }) => {
    return (
        <div className={styles.heading}>
            <h4 title="subtitle" className={styles.subtitle}>
                {subtitle}
            </h4>
            <h2 title="title" className={styles.title}>
                {title}
            </h2>
        </div>
    );
};

export default Heading;
