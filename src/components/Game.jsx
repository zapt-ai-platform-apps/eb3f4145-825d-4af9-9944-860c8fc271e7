import React from 'react';

export default function GameContent({ adventureStarted, roles, buttonLoading, onStartAdventure, onRotateRoles }) {
  return (
    <>
      {!adventureStarted ? (
        <main className="w-full max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <div key={index} className="bg-white bg-opacity-30 rounded-lg p-4 shadow-lg transition transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-2">{role.name}</h3>
                  <p>{role.instruction}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Bonus Points</h2>
            <ul className="list-disc list-inside">
              <li>Incorporate local culture, food, and festivals into your stories.</li>
              <li>Use creative car-related terminology and road trip lingo.</li>
              <li>Add unexpected twists and turns to keep everyone on their toes.</li>
            </ul>
          </section>
          <button
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50"
            onClick={onStartAdventure}
            disabled={buttonLoading}
          >
            {buttonLoading ? 'Loading...' : 'Start Adventure'}
          </button>
        </main>
      ) : (
        <main className="w-full max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Adventure In Progress</h2>
            <div className="bg-white bg-opacity-30 rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-bold">Current Role: {roles[0].name}</h3>
              <p>{roles[0].instruction}</p>
            </div>
          </section>
          <button
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50"
            onClick={onRotateRoles}
            disabled={buttonLoading}
          >
            {buttonLoading ? 'Rotating...' : 'Rotate Roles'}
          </button>
        </main>
      )}
    </>
  );
}