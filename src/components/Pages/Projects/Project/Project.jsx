import React from 'react';
import styles from './Project.module.css';
import ButtonProject from "../../../Buttons/ButtonProject/ButtonProject";

function Project(props) {
    return (

        <div className={styles.container}>
            <div className={styles.picture + ' ' + props.picture}>
                <ButtonProject name={props.name}/>
            </div>
            <div className={styles.containerNameAndDescription}>
                <div className={styles.name}>
                        {props.name}
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
        </div>


    );
}

export default Project;
