import React, { useEffect, useState } from 'react';
import styles from './Subs.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PlayerIcon from '../../PlayerIcon/PlayerIcon';
import { initialize, teamSelector } from '../../../store/reducers/TeamReducer';
import SubsIcon from '../../SubsIcon/SubsIcon';

const Subs = () => {

    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const dispatch = useDispatch();
    const selectedTeam = useSelector(teamSelector);

    useEffect(() => {
        fetch("TeamList.json")
        .then((res) => res.json())
        .then((res) => 
           {

            let res1 = res.filter(i => i.Team === 11);
            let res2 = res.filter(i => i.Team === 22);
    
            setTeamA(res1);
            setTeamB(res2);
          }
        )
      },[]);

  return (
    <div className={styles.teamList}>
      <h2>Here are Subs of both teams</h2>
          <div className={styles.generate}>
      <button className="btn btn-success">Select a Sub</button>
      <button className="btn btn-primary">Add Sub For Selection</button>
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
