import React from 'react';
import styles from './Skill.module.css';
import Icon from "../../../Icons/Icon";

function Skill(props) {
    return (

        <div className={styles.container}>
            <div>
                <Icon className={styles.picture} picture={props.picture}/>
            </div>
            <div className={styles.knowledge}>
               {props.knowledge}
            </div>
            <div className={styles.borderOfDescription}>
                <div className={styles.descriptionOfKnowledge}>
                {props.descriptionOfKnowledge}
                </div>
            </div>
        </div>


    );
}

export default Skill;
