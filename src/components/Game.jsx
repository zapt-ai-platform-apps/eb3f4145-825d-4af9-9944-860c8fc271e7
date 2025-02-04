import React from 'react';
import RaceOverview from './RaceOverview';
import RaceInProgress from './RaceInProgress';

export default function GameContent({ raceStarted, roles, buttonLoading, onStartRace, onNextRace }) {
  return (
    <>
      {!raceStarted ? (
        <RaceOverview roles={roles} buttonLoading={buttonLoading} onStartRace={onStartRace} />
      ) : (
        <RaceInProgress roles={roles} buttonLoading={buttonLoading} onNextRace={onNextRace} />
      )}
    </>
  );
}