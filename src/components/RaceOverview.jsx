import React from 'react';

export default function RaceOverview({ roles, buttonLoading, onStartRace }) {
  return (
    <main className="w-full max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Race Overview</h2>
        <div className="space-y-4 text-gray-800">
          <div>
            <strong>Plot:</strong>
            <p>
              In Speed Legends: Horizon Pursuit, players take on the role of elite racers competing in the world's most prestigious and high-stakes racing league. The competition spans iconic locations from Tokyo to California and the Swiss Alps, demanding speed, strategy, and adaptability.
            </p>
          </div>
          <div>
            <strong>Objective:</strong>
            <p>
              Become the ultimate champion by winning races, completing special challenges, and upgrading your vehicles.
            </p>
          </div>
          <div>
            <strong>Gameplay Features:</strong>
            <ul className="list-disc list-inside">
              <li><strong>Career Mode:</strong> Progress through racing tiers and unlock new cars and tracks.</li>
              <li><strong>Customizable Cars:</strong> Personalize your vehicle with unique paint jobs, decals, and performance upgrades.</li>
              <li><strong>Dynamic Weather and Time:</strong> Adapt to races held under varying weather conditions and times of day.</li>
              <li><strong>Special Challenges:</strong> Engage in time trials, drift challenges, and escape missions for extra rewards.</li>
              <li><strong>Multiplayer Mode:</strong> Compete against friends and racers worldwide in thrilling tournaments.</li>
              <li><strong>Open World Exploration:</strong> Discover hidden tracks and side missions between races.</li>
              <li><strong>Story Mode:</strong> Experience an engaging narrative with rivalries and unexpected twists.</li>
            </ul>
          </div>
          <div>
            <strong>Controls:</strong>
            <ul className="list-disc list-inside">
              <li><strong>Accelerate:</strong> Hold the right trigger.</li>
              <li><strong>Brake/Reverse:</strong> Hold the left trigger.</li>
              <li><strong>Steer:</strong> Use the left joystick to navigate turns.</li>
              <li><strong>Nitro Boost:</strong> Press the "A" button for a speed surge.</li>
              <li><strong>Handbrake:</strong> Press the "X" button to execute sharp drifts.</li>
              <li><strong>Camera View:</strong> Press the "Y" button to switch camera angles.</li>
            </ul>
          </div>
          <div>
            <strong>Tips for Success:</strong>
            <ul className="list-disc list-inside">
              <li>Master drifting to maintain speed on sharp turns.</li>
              <li>Use nitro boost strategically to overtake competitors.</li>
              <li>Monitor weather conditions and adjust your racing strategy.</li>
              <li>Upgrade your vehicle regularly for peak performance.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Crew Roles</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Winning Tips</h2>
        <ul className="list-disc list-inside text-gray-800">
          <li>Fine-tune your drifting skills to maintain speed.</li>
          <li>Manage your nitro boost wisely during crucial moments.</li>
          <li>Constantly upgrade your car to stay ahead in the race.</li>
        </ul>
      </section>
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