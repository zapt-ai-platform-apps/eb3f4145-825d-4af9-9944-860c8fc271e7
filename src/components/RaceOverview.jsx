import React from 'react';
import RaceDetails from './RaceDetails';

export default function RaceOverview({ roles, buttonLoading, onStartRace }) {
  return (
    <main className="w-full max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
      <RaceDetails roles={roles} />
      <button
        className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50"
        onClick={onStartRace}
        disabled={buttonLoading}
      >
        {buttonLoading ? 'Loading...' : 'Start Race'}
      </button>
    </main>
  );
}