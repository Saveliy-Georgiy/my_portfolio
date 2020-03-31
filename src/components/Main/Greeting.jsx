import React from 'react';
import styles from './Greeting.module.css';

function Greeting() {
  return (
    <div className={styles.greeting}>
        <span>Привет!</span>
        <span>Я
            <span>&nbsp;Савелий-</span>
                <span>Георгий</span>
        </span>
        <h1>front-end developer</h1>
    </div>
  );
}

export default Greeting;
