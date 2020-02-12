import React from 'react';
import styles from './Greeting.module.css';

function Greeting() {
  return (
    <div className={styles.greeting}>
        <span>Привет!</span>
        <span>Меня зовут Савелий-Георгий</span>
        <span>Я front-end developer</span>
    </div>
  );
}

export default Greeting;
