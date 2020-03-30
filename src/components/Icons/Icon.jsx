import React from 'react';
import styles from './Icon.module.css';

function Icon(props) {
  return (
    <div className={styles.square + ' ' + props.pictureSquare}>
    </div>
  );
}

export default Icon;
