import React, { useEffect, useState } from 'react';
import styles from './Announced.module.css';
import PlayerIcon from '../../PlayerIcon/PlayerIcon';
import { useSelector } from 'react-redux';
import { teamSelector } from '../../../store/reducers/TeamReducer';

const Announced = () => {

    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
  const teams = useSelector(teamSelector);

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
