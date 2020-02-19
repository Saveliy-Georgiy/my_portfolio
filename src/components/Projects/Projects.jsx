import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.mySkillsContainer}>
                <div className={styles.mySkills}>
                    <div className={styles.text}>
                        Мои работы
                    </div>
                </div>
                <div className={styles.listOfMySkills}>
                    <Project picture={styles.picture1} name='Соц сеть' description='Описание соц сети'/>
                    <Project picture={styles.picture2} name='Второй проект' description='Описание второго проекта'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
