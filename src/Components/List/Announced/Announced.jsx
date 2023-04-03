import React, { useEffect, useState } from 'react';
import styles from './Announced.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PlayerIcon from '../../PlayerIcon/PlayerIcon';
import { initialize, teamSelector } from '../../../store/reducers/TeamReducer';

const Announced = () => {

    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const dispatch = useDispatch();
    const selectedTeam = useSelector(teamSelector);

    useEffect(() => {
        fetch("TeamList.json")
        .then((res) => res.json())
        .then((res) => 
           {
            let res1 = res.filter(i => i.Team === 1);
            let res2 = res.filter(i => i.Team === 2);
    
            setTeamA(res1);
            setTeamB(res2);
          }
        )
      },[]);

  return (
    <div className={styles.teamList}>
    <h2>Here is playing 11 of both teams</h2>
    <div className={styles.generate}>
      <button className="btn btn-success">Pre-Select a Player</button>
      <button className="btn btn-danger">Reject a Player</button>
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
