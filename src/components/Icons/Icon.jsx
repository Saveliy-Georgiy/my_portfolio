import React from 'react';
import styles from './Icon.module.css';

function Icon(props) {
  return (
    <div>
      <img className={styles.square} src={props.picture}/>
    </div>
  );
}

export default Icon;
