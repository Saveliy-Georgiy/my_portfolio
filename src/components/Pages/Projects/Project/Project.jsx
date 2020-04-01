import React from 'react';
import styles from './Project.module.css';
import Button from "../../../Buttons/Button";

function Project(props) {
    return (

        <div className={styles.container}>
            <div className={styles.picture + ' ' + props.picture}>
                <Button name="Смотреть"/>
            </div>
            <div className={styles.containerNameAndDescription}>
                <div className={styles.marginForName}>
                        <span className={styles.name}>
                        {props.name}
                        </span>
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
        </div>


    );
}

export default Project;
