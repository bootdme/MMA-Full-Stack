import React from 'react';

function FighterList({ fighters }) {
  return (
    <div className="fighter-card flex">
      {fighters.map((fighter, index) => (
        <span className="bg-gray-200 w-full flex justify-center items-center flex-wrap" key={index}>
          <div className="w-60 p-2 bg-white rounded-xl">
            <img className="h-40 object-cover rounded-xl" src={`https://www.sherdog.com/${fighter.imageUrl}`} />
            <div className="p-2">
              <h2 className="font-bold text-lg">{fighter.name}</h2>
              <p className="text-sm text-gray-600">Age: {fighter.age || 'N/A'}</p>
            </div>
          </div>
        </span>
      ))}
    </div>
  );
}

export default FighterList;
