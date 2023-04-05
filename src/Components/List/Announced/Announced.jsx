import React, { useEffect, useState } from 'react';
import styles from './Announced.module.css';
import PlayerIcon from '../../PlayerIcon/PlayerIcon';
import { useDispatch, useSelector } from 'react-redux';
import { teamSelector } from '../../../store/reducers/TeamReducer';
import { canRejectAnnounced, canRejectAnnouncedItem, canSelectAnnounced, canSelectAnnouncedItem } from '../../../store/reducers/CanReducer';

const Announced = () => {

    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
  const teams = useSelector(teamSelector);
  const dispatch = useDispatch();

  useEffect(() => {     
            let res1 = teams.filter(i => i.Team === 1 && (i.Status.includes("Announced")));
            let res2 = teams.filter(i => i.Team === 2 && (i.Status.includes("Announced")));
             
            setTeamA(res1);
            setTeamB(res2);
  },[teams]);


  return (
    <div className={styles.teamList}>
    <h2>Here is playing 11 of both teams</h2>
    <div className={styles.generate}>
      <button className="btn btn-success" onClick={() => {dispatch(canSelectAnnouncedItem())}}>Pre-Select a Player</button>
      <button className="btn btn-danger" onClick={() => {dispatch(canRejectAnnouncedItem())}}>Reject a Player</button>
      </div>
      <div className={styles.list}>
      <div className={styles.list1}>
           {
            teamA.map((player) => (
              <PlayerIcon player={player}/>
            ))
           }
      </div>
      <div className={styles.list2}>
           {
            teamB.map((player) => (
              <PlayerIcon player={player}/>
            ))
           }
      </div>
    </div>
    </div>
  );
}

export default Announced;
