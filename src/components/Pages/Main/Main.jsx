import React from 'react';
import styles from './Main.module.css';
import Greeting from "./Greeting/Greeting";
import MyPhoto from "./MyPhoto/MyPhoto";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Greeting />
        <MyPhoto />
      </div>
    </div>
  );
}

export default Main;
