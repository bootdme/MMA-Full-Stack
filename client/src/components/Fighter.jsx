import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FighterOuter, FighterWrapper } from '../styles/Fighter.styled';

function Fighter() {
  const [addFighter, setAddFighter] = useState('');
  const [fighterData, setFighterData] = useState([]);
  const [updateState, setUpdateState] = useState(0);

  function getFighters() {
    axios
      .get('http://localhost:8008/fighter')
      .then((res) => {
        setFighterData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function postFighter(e) {
    e.preventDefault();
    axios
      .post('http://localhost:8008/fighter', { fighter: addFighter })
      .then((res) => {
        console.log(res.data);
        setUpdateState(updateState + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getFighters();
  }, [updateState]);

  return (
    <div className="fighter-container">
      <FighterOuter>
        <FighterWrapper>
          <header className="add-fighter">Add Fighter</header>
          <form>
            <input
              type="text"
              value={addFighter}
              onChange={(e) => setAddFighter(e.target.value)}
            />
            <button type="submit" onClick={postFighter}>
              Add
            </button>
          </form>
        </FighterWrapper>
      </FighterOuter>
      {fighterData.map((fighter, index) => (
        <div>{fighter.name}</div>
      ))}
    </div>
  );
}

export default Fighter;
