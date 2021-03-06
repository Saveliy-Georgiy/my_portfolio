import React from "react";
import styles from "./Skills.module.css";
import Skill from "./Skill/Skill";
import H2 from "../../H2/H2";
import js from "../../../Icons/JS.png";
import react from "../../../Icons/reactjs.png";
import redux from "../../../Icons/redux.png";

function Skills() {
    return (
        <div className={styles.skills} id="skills">
            <div className={styles.mySkillsContainer}>
                <H2 name="Мои cкиллы"/>
                <div className={styles.listOfMySkills}>
                    <Skill picture={js} knowledge="JS"
                           descriptionOfKnowledge="Описание знания JS
                            JavaScript® (часто просто JS) — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. Наиболее широкое применение находит как язык сценариев веб-страниц, но также используется и в других программных продуктах, например, node.js или Apache CouchDB. JavaScript это прототипно-ориентированный, мультипарадигменный язык с динамической типизацией, который поддерживает объектно-ориентированный, императивный и декларативный (например, функциональное программирование) стили программирования. Подробнее о JavaScript."/>
                    <Skill picture={react} knowledge="REACT"
                           descriptionOfKnowledge="Описание знания  React — это инструмент для создания пользовательских интерфейсов. Его главная задача — обеспечение вывода на экран того, что можно видеть на веб-страницах. React значительно облегчает создание интерфейсов благодаря разбиению каждой страницы на небольшие фрагменты. Мы называем эти фрагменты компонентами.
"/>
                    <Skill picture={redux} knowledge="REDUX"
                           descriptionOfKnowledge="Описание знания Редакса Redux — это менеджер состояний. Чаще всего его используют с React, но его возможности не ограничиваются одной этой библиотекой. Хотя в React есть собственный метод управления состояниями (почитать о нём можно в руководстве по React для начинающих), он плохо масштабируется. Перемещение состояния вверх по дереву работает для простых приложений, но в более сложных архитектурах изменение состояния производится через свойства (props). Ещё лучше делать это через внешнее глобальное хранилище."/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
