import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import initialRoles from './data/roles';
import GameContent from './components/Game';

export default function App() {
  const [adventureStarted, setAdventureStarted] = useState(false);
  const [roles, setRoles] = useState(initialRoles);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleStartAdventure = async () => {
    if (buttonLoading) return;
    setButtonLoading(true);
    try {
      console.log('Starting adventure...');
      await new Promise(resolve => setTimeout(resolve, 500));
      setAdventureStarted(true);
      console.log('Adventure started');
    } catch (error) {
      console.error('Error starting adventure:', error);
      Sentry.captureException(error);
    } finally {
      setButtonLoading(false);
    }
  };

  const handleRotateRoles = async () => {
    if (buttonLoading) return;
    setButtonLoading(true);
    try {
      console.log('Rotating roles...');
      setRoles(prevRoles => {
        const [first, ...rest] = prevRoles;
        return [...rest, first];
      });
      console.log('Roles rotated. New order:', roles.map(r => r.name));
    } catch (error) {
      console.error('Error rotating roles:', error);
      Sentry.captureException(error);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div className="min-h-screen h-full bg-gradient-to-r from-blue-500 to-purple-600 text-gray-100 flex flex-col items-center p-6">
      <header className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold">the rider's experience</h1>
        <p className="mt-2 text-lg">Embark on a thrilling road trip adventure!</p>
      </header>

      <GameContent
        adventureStarted={adventureStarted}
        roles={roles}
        buttonLoading={buttonLoading}
        onStartAdventure={handleStartAdventure}
        onRotateRoles={handleRotateRoles}
      />

      <footer className="w-full mt-auto py-4 text-center">
        <span>© {new Date().getFullYear()} the rider's experience</span>
      </footer>
      
      <a href="https://www.zapt.ai" target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 text-sm text-white underline select-none">
        Made on ZAPT
      </a>
    </div>
  );
}