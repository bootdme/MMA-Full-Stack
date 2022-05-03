import React, { useState } from 'react';
import { FighterOuter, FighterWrapper } from '../styles/Fighter.styled';

function Fighter() {
  const [addFighter, setAddFighter] = useState('');
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
            <button type="submit">Add</button>
          </form>
        </FighterWrapper>
      </FighterOuter>
    </div>
  );
}

export default Fighter;
