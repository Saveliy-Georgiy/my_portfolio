import React from 'react';
import styles from './MyPhoto.module.css';
import MyAvatar from './MyAvatar.jpg'

function MyPhoto() {
  return (
    <div>
        <img src={MyAvatar} alt="My photo" className={styles.my_photo}/>
    </div>
  );
}

export default MyPhoto;
