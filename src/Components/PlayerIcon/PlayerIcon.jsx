import React, { useEffect, useState } from 'react';
import styles from './PlayerIcon.module.css';
import {FaUserAlt} from 'react-icons/fa';
import { useDispatch, useSelector} from 'react-redux';
import { cancel, select, teamSelector} from '../../store/reducers/TeamReducer';


const PlayerIcon = (props) => {

  const dispatch = useDispatch();
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

  function preSelect(input)
  {
    dispatch(select(input));
  }

  function isSelected(input)
  {
    if(input.Status == "SelectedAnnounced")
    {
      return styles.picSelected;
    }
    if(input.Status == "Announced")
   {
    return styles.pic;
   }
  }


  return (
    <div className={styles.player} onClick={() => preSelect(props.player)}>
      <div className={isSelected(props.player)}>
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

export default PlayerIcon;
