import React from 'react';
import styles from './Skill.module.css';

const Picture = (props) => {
    return (
<div></div>
    )
};

function Skill(props) {
    return (

        <div className={styles.container}>
            <div className={styles.picture + ' ' + props.picture}>
                <Picture />
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
