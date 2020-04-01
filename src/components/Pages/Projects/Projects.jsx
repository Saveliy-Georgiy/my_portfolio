import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project/Project";
import H2 from "../../H2/H2";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.myProjectsContainer}>
               <H2 name="Мои работы"/>
                <div className={styles.listOfMyProjects}>
                    <Project picture={styles.picture1} name='Соц сеть' description='Описание соц сети'/>
                    <Project picture={styles.picture2} name='Второй проект' description='Описание второго проекта'/>
                    <Project picture={styles.picture3} name='Третий проект' description='Описание третьего проекта'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
