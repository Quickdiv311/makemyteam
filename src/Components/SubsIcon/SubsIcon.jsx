import React from 'react';
import styles from './SubsIcon.module.css';
import {FaUserAlt} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { add, select } from '../../store/reducers/TeamReducer';
import { canAnnounceSub, canSelectSub } from '../../store/reducers/CanReducer';


const SubsIcon = (props) => {

  const dispatch = useDispatch();
  let canSelect = useSelector(canSelectSub);
  let canAnnounce = useSelector(canAnnounceSub);
  function subNames(input)
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
    if(canSelect)
    {
      dispatch(select(input));
    }

    if(canAnnounce)
    {
      dispatch(add(input));
    }
  }

  function isSelected(input)
  {
    if(input.Status == "PreSelectedSub")
    {
      return styles.picSelected;
    }

    if(input.Status == "AnnounceSub") 
    {
      return styles.picAdded;
    }

    if(input.Status == "Sub")
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
