import React from 'react';
import styles from './SubsIcon.module.css';
import {FaUserAlt} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cancel, select, teamSelector, teams } from '../../store/reducers/TeamReducer';


const SubsIcon = (props) => {

  const selectedTeam = useSelector(teamSelector);
  const teamsO = useSelector(teams);
  const dispatch = useDispatch();
  function subNames(input)
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
if(selectedTeam.includes(input) && selectedTeam.length<11)
    {
    dispatch(cancel(input));
    }
    else
    {
    dispatch(select(input));
    }
  }

  function isSelected(input)
  {
    if(teamsO.includes(input))
    {
        return styles.picAdded;
    }

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
      <div className={subNames(props.player.Team)}>
        {props.player.Name}
      </div>
      <div className={styles.credits}>
        {props.player.Credits}
      </div>
    </div>
  );
}

export default SubsIcon;
