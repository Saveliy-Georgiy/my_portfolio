import React from 'react';
import styles from './MyPhoto.module.css';
import MyAvatar from './MyAvatar.jpg'

function MyPhoto() {
  return (
    <div className={styles.photoContainer}>
      <img className={styles.myPhoto} src={MyAvatar} alt="Моё фото"/>
    </div>
  );
}

export default MyPhoto;
