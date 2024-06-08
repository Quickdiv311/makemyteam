import React from 'react';
import styles from './SelectedTeam.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { capSelector, generate, generateCap, teamCount, teamSelector} from '../../store/reducers/TeamReducer';
import SelectedIcon from '../../Components/SelectedIcon/SelectedIcon';

const SelectedTeam = () => {

  const teams = useSelector(teamSelector);
  let myTeam = teams.filter(i => i.Status.includes("Selected"));
  const navigate = useNavigate();
  const cap = useSelector(capSelector);
  const teamsCount = useSelector(teamCount);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
        <h2>Selected Team</h2>
        <div className={styles.cap}>
          <h6>Captain:</h6>&nbsp;&nbsp;&nbsp;<h5> {cap.captain}</h5>
      </div>
      <div className={styles.cap}>
      <h6>Vice-Captain:</h6>&nbsp;&nbsp;&nbsp;<h5> {cap.vice}</h5>
      </div>
        <div className={styles.teamCount}>
          <div>
            <h5>MI</h5>
            <h5>{teamsCount[0]}</h5>
          </div>
          <div>
            <h5>VS</h5>
          </div>
          <div>
            <h5>CSK</h5>
            <h5>{teamsCount[1]}</h5>
          </div>
        </div>
        <div class="btn-group mt-3" role="group">
        <button className="btn btn-primary" onClick={() => dispatch(generateCap())}>Reselect Captains</button>
        <button className="btn btn-success" onClick={() => dispatch(generate())}>Remake my Team</button>
        <button className="btn btn-info" onClick={() => navigate('/')}>Go To Home</button>
      </div>
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

      
    </div>
  );
}

export default SelectedTeam;
