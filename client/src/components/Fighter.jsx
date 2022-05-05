import React, { useState, useEffect } from 'react';
import FighterList from './FighterList';
import axios from 'axios';

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
    <div className="fighter-container flex-row">
      <div className="flex justify-center">
        <div className="flex flex-col w-46.875 items-center justify-center">
          <header className="add-fighter">Add Fighter</header>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Name or Nickname"
                value={addFighter}
                onChange={(e) => setAddFighter(e.target.value)}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={postFighter}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <FighterList fighters={fighterData} />
    </div>
  );
}

export default Fighter;
