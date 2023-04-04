import React from 'react';
import styles from './SelectedTeam.module.css';
import { useSelector } from 'react-redux';
import { capSelector, teamSelector} from '../../store/reducers/TeamReducer';
import PlayerIcon from '../../Components/PlayerIcon/PlayerIcon';

const SelectedTeam = () => {

  const teams = useSelector(teamSelector);
  let myTeam = teams.filter(i => i.Status.includes("Selected"));
  const cap = useSelector(capSelector);

  return (
    <div className={styles.main}>
        <h2>Selected Team</h2>
      <div className={styles.selectedTeam}>
        <div className={styles.selected}>
            <h4>Keepers</h4>
      {
        myTeam.filter(i => i.Skill === 'WK').map((player) => (
            <PlayerIcon player={player}/>
        ))
      }
      </div>

      <div className={styles.selected}>
        <h4>Batsmen</h4>
      {
        myTeam.filter(i => i.Skill === 'BAT').map((player) => (
            <PlayerIcon player={player}/>
        ))
      }
      </div>

      <div className={styles.selected}>
        <h4>All Rounders</h4>
      {
        myTeam.filter(i => i.Skill === 'ALL').map((player) => (
            <PlayerIcon player={player}/>
        ))
      }
      </div>

      <div className={styles.selected}>
        <h4>Bowlers</h4>
      {
        myTeam.filter(i => i.Skill === 'BOW').map((player) => (
            <PlayerIcon player={player}/>
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
    </div>
  );
}

export default SelectedTeam;
