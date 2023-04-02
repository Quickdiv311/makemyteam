import React, { useEffect, useState } from 'react';
import styles from './TeamList.module.css';
import PlayerIcon from '../../Components/PlayerIcon/PlayerIcon';
import { useDispatch, useSelector } from 'react-redux';
import { generate, initialize, teamSelector } from '../../store/reducers/TeamReducer';
import { useNavigate } from 'react-router-dom';

const TeamList = () => {

  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedTeam = useSelector(teamSelector);

  function generateTeam()
  {
    if(selectedTeam.length < 11)
    {
      dispatch(generate());
    }
    navigate('/select');
  }

  useEffect(() => {
    fetch("TeamList.json")
    .then((res) => res.json())
    .then((res) => 
       {
        let ind = 1;
        res.forEach(i => {
          i.id = ind;
          ind++;
        });

        dispatch(initialize(res));
        let res1 = res.filter(i => i.Team === 1);
        let res2 = res.filter(i => i.Team === 2);

        setTeamA(res1);
        setTeamB(res2);
      }
    )
  },[]);

  return (
    <div className={styles.teamList}>
      <h1>Here is playing 11 of both teams</h1>
      <h3>Click on the players to pre Select team in you team</h3>
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
     <div className={styles.generate}>
      <button className="btn btn-success" onClick={() => {generateTeam()}}>Create my Team</button>
      </div>
    </div>
  );
}

export default TeamList;
