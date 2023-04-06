import React, { useEffect } from 'react';
import styles from './SelectedTeam.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { capSelector, generate, teamSelector} from '../../store/reducers/TeamReducer';
import SelectedIcon from '../../Components/SelectedIcon/SelectedIcon';

const SelectedTeam = () => {

  const teams = useSelector(teamSelector);
  let myTeam = teams.filter(i => i.Status.includes("Selected"));
  // console.log(myTeam);
  const cap = useSelector(capSelector);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
        <h2>Selected Team</h2>
      <div className={styles.selectedTeam}>
        <div className={styles.selected}>
            <h4>Keepers</h4>
      {
        myTeam.filter(i => i.Skill === 'WK').map((player) => (
            <SelectedIcon player={player}/>
        ))
      }
      </div>

      <div className={styles.selected}>
        <h4>Batsmen</h4>
      {
        myTeam.filter(i => i.Skill === 'BAT').map((player) => (
            <SelectedIcon player={player}/>
        ))
      }
      </div>

      <div className={styles.selected}>
        <h4>All Rounders</h4>
      {
        myTeam.filter(i => i.Skill === 'ALL').map((player) => (
            <SelectedIcon player={player}/>
        ))
      }
      </div>

      <div className={styles.selected}>
        <h4>Bowlers</h4>
      {
        myTeam.filter(i => i.Skill === 'BOW').map((player) => (
            <SelectedIcon player={player}/>
        ))
      }
      </div>
      </div>
      <div className={styles.cap}>
          <h6>Captain:</h6>&nbsp;&nbsp;&nbsp;<h4> {cap.captain}</h4>
      </div>
      <div className={styles.cap}>
      <h6>Vice-Captain:</h6>&nbsp;&nbsp;&nbsp;<h4> {cap.vice}</h4>
      </div>
      <div>
        <button className="btn btn-success" onClick={() => dispatch(generate())}>Remake my Team</button>
      </div>
    </div>
  );
}

export default SelectedTeam;
