import React, { useEffect, useState } from 'react';
import styles from './PlayerIcon.module.css';
import {FaUserAlt} from 'react-icons/fa';
import { useDispatch, useSelector} from 'react-redux';
import { canRejectAnnounced, canSelectAnnounced } from '../../store/reducers/CanReducer';
import { select,reject, cancel } from '../../store/reducers/TeamReducer';


const PlayerIcon = (props) => {

  const dispatch = useDispatch();
  let canSelect = useSelector(canSelectAnnounced);
  let canReject = useSelector(canRejectAnnounced);

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
    if(canSelect)
    {
      dispatch(select(input));
    }

    if(canReject)
    {
      dispatch(reject(input));
    }

    if((input.Status == "PreSelectedAnnounced" && canSelect) || (input.Status == "RejectedAnnounced" && canReject))
    {
      dispatch(cancel(input));
    }
  }

  function isSelected(input)
  {
    if(input.Status.includes("Pre"))
    {
      return styles.picSelected;
    }
    if(input.Status.includes("RejectedAnnounced"))
    {
     return styles.picRejected;
    }
    if(input.Status.includes("Announced"))
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
