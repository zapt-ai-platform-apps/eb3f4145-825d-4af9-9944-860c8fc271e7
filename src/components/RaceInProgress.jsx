import React from 'react';

export default function RaceInProgress({ roles, buttonLoading, onNextRace }) {
  return (
    <main className="w-full max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Race In Progress</h2>
        <div className="bg-white bg-opacity-30 rounded-lg p-4 shadow-lg">
          <h3 className="text-xl font-bold">Current Role: {roles[0].name}</h3>
          <p>{roles[0].instruction}</p>
        </div>
      </section>
      <button
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50"
        onClick={onNextRace}
        disabled={buttonLoading}
      >
        {buttonLoading ? 'Preparing...' : 'Next Race'}
      </button>
    </main>
  );
}