import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.mySkillsContainer}>
                <div className={styles.mySkills}>
                    <div className={styles.text}>
                        Мои скиллы
                    </div>
                </div>
                <div className={styles.listOfMySkills}>
                    <Skill picture={styles.picture1} knowledge='React'
                           descriptionOfKnowledge = 'Описание знания Реакта' />
                   <Skill picture={styles.picture2} knowledge='Redux'
                          descriptionOfKnowledge = 'Описание знания Редакса' />
                    <Skill picture={styles.picture3} knowledge='JS'
                           descriptionOfKnowledge = 'Описание знания JS' />
                </div>
            </div>
        </div>
    );
}

export default Skills;
