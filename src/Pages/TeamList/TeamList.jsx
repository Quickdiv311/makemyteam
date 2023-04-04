import React, { useState } from 'react';
import styles from './TeamList.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { generate, teamSelector } from '../../store/reducers/TeamReducer';
import { useNavigate } from 'react-router-dom';
import Announced from '../../Components/List/Announced/Announced';
import Subs from '../../Components/List/Subs/Subs';
import {BsChevronDown} from 'react-icons/bs';

const TeamList = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showSubs, setShowSubs] = useState(false);
  const teams = useSelector(teamSelector);

  function generateTeam()
  {
  const selected = teams.filter(i => i.Status.includes("Selected"));
      if(selected.length < 11)
      {
        dispatch(generate());
      }
    navigate('/select');
  }

  return (
    <div className={styles.teams}>
      <div className={styles.portal}>
        <h3>RR</h3>
        <h3>SRH</h3>
        <button className="btn btn-success" onClick={() => generateTeam()}>Make My Team</button>
        <button className="btn btn-primary" onClick={() => setTimeout(setShowOptions(true),2000)}>Select or Reject Player</button>
      </div>
      {
        showOptions &&
        <div>
    <div className={styles.titles}>
    <h2 className={styles.title}>Announced</h2>
      <BsChevronDown size={20} className={styles.arrow} onClick={() => {setShowTeam(!showTeam)}}/>
    </div>
      <hr />
      {showTeam && <Announced/>}
      <div className={styles.titles}>
      <h2 className={styles.title}>Subtitutes</h2>
      <BsChevronDown size={20} className={styles.arrow} onClick={() => {setShowSubs(!showSubs)}}/>
      </div>
      <hr />
      {showSubs && <Subs/>}
        </div>
      }

      </div>
  );
}

export default TeamList;
