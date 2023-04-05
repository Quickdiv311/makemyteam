import React, { useEffect, useState } from 'react';
import styles from './Subs.module.css';
import SubsIcon from '../../SubsIcon/SubsIcon';
import { useDispatch, useSelector } from 'react-redux';
import { teamSelector } from '../../../store/reducers/TeamReducer';
import { canAnnounceSub, canAnnounceSubItem, canSelectSub, canSelectSubItem } from '../../../store/reducers/CanReducer';

const Subs = () => {

    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
  const teams = useSelector(teamSelector);
  const dispatch = useDispatch();

    useEffect(() => {
            let res1 = teams.filter(i => i.Team === 1 && (i.Status.includes("Sub")));
            let res2 = teams.filter(i => i.Team === 2 && (i.Status.includes("Sub")));
    
            setTeamA(res1);
            setTeamB(res2);
      },[teams]);

  return (
    <div className={styles.teamList}>
      <h2>Here are Subs of both teams</h2>
          <div className={styles.generate}>
      <button className="btn btn-success" onClick={() => {dispatch(canSelectSubItem())}}>Select a Sub</button>
      <button className="btn btn-primary" onClick={() => {dispatch(canAnnounceSubItem())}}>Add Sub For Selection</button>
      </div>
         <div className={styles.list}>
      <div className={styles.list1}>
           {
            teamA.map((player) => (
              <SubsIcon player={player}/>
            ))
           }
      </div>
      <div className={styles.list2}>
           {
            teamB.map((player) => (
              <SubsIcon player={player}/>
            ))
           }
      </div>
    </div>

    </div>
  );
}

export default Subs;
