import React, { useEffect, useState } from 'react';
import styles from './PlayerIcon.module.css';
import {FaUserAlt} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cancel, select, teamSelector } from '../../store/reducers/TeamReducer';


const PlayerIcon = (props) => {

  const selectedTeam = useSelector(teamSelector);
  const dispatch = useDispatch();
  function team(input)
  {
    if(input == 1 || input==11)
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
    if(input.Team==1 || input.Team==2)
    {if(selectedTeam.includes(input) && selectedTeam.length<11)
    {
    dispatch(cancel(input));
    }
    else
    {
    dispatch(select(input));
    }
    }
  }

  function isSelected(input)
  {
    if(selectedTeam.includes(input) && selectedTeam.length<11)
    {
      return styles.picSelected;
    }
   else
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
