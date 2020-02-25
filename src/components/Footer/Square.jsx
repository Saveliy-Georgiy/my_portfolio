import React from 'react';
import styles from './Square.module.css';
import PictureSquare from "./PictureSquare";

function Square(props) {
  return (
    <div className={styles.square + ' ' + props.pictureSquare}>
       <PictureSquare />
    </div>
  );
}

export default Square;
