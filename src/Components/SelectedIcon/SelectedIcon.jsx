import React from 'react';
import styles from './SelectedIcon.module.css';
import {FaUserAlt} from 'react-icons/fa';

const SelectedIcon = (props) => {

  function team(input)
  {
    if(input == 1)
    {
      return styles.title1;
    }
    else
    {
      return styles.title2;
    }
  }

  return (
    <div className={styles.player}>
      <div className={styles.pic}>
        <FaUserAlt/>
      </div>
      <div className={team(props.player.Team)}>
        {props.player.Name}
      </div>
      <div className={styles.credits}>
        {props.player.Credits}
      </div>
    </div>
  );
}

export default SelectedIcon;
