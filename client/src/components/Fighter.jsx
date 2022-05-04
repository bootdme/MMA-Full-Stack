import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FighterOuter, FighterWrapper } from '../styles/Fighter.styled';

function Fighter() {
  const [addFighter, setAddFighter] = useState('');
  const [fighterData, setFighterData] = useState([]);

  function postFighter(e) {
    e.preventDefault();
    axios
      .post('http://localhost:8008/fighter', { fighter: addFighter })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    </div>
  );
}

export default Fighter;
