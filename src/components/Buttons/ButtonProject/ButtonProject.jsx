import React from "react";
import styles from "./ButtonStyles.module.css";

const ButtonProject = (props) => {
    let href = props.name === "Социальная сеть"
        ? "https://Saveliy-Georgiy.github.io/my_social_network"
        : props.name === "Счетчик"
            ? "https://Saveliy-Georgiy.github.io/counter"
            : "https://saveliy-georgiy.github.io/homework4/";
    return (
        <div>
            <a href={href}>
                     <button className={styles.btnSubmit} >Смотреть</button>
            </a>
        </div>
    );
};

export default ButtonProject;
