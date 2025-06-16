import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import DialogManager from './features/dialog-manager';
import FloorCounter from './components/floor-counter';
import MapHeader from './components/MapHeader';
import Footer from './components/footer';
import GameMenus from './features/game-menus';
import World from './features/world';
import Viewport from './components/viewport';
import useGameViewportScaling from './features/app-state/actions/use-game-viewport-scaling';
import Spellbook from './features/spellbook';
import Tutorial from './features/tutorial';
import Abilities from './features/abilities';

import JournalSide from './components/journal-side';

const App = ({ appState, world, dialog }) => {
  useGameViewportScaling();

  // disable scrolling of the page
  // prevents iOS Safari bouncing during movement
  useEffect(() => {
    disableBodyScroll(document.getElementById('react-rpg'));
    return clearAllBodyScrollLocks;
  }, []);

  const { journalSideMenu } = appState;
  const { gameMode, floorNum, currentMap } = world;
  const currentFloorId = currentMap || floorNum;
  const { gameStart, gameOver, gameRunning, journalSideMenuOpen } = dialog;

  const disableJournal =
    gameStart || gameOver || !gameRunning || !journalSideMenu || !journalSideMenuOpen;

  let showFooter = true;

  const nativeApp = window.location.search === '?nativeApp=true';
  // don't show the footer if on a mobile device
  // or using the native app query param
  if (nativeApp || isMobile) {
    showFooter = false;
  }

  return (
    <div className="game-wrapper">
      <header className="game-header">
        <MapHeader currentFloor={currentFloorId} />
      </header>

      {!disableJournal && (
        <aside className="sidebar">
          <JournalSide disabled={disableJournal} />
        </aside>
      )}

      <main className="main-canvas centered flex-row">
        <Viewport>
          <World />
          <DialogManager />
          <Tutorial />
          <Abilities />
          <Spellbook />

          {gameMode === 'endless' ? (
            <FloorCounter floor={floorNum} />
          ) : (
            currentMap && <FloorCounter floor={currentMap.replace('_', '-')} />
          )}
        </Viewport>
      </main>

      <div className="info-panel">
        <GameMenus />
      </div>

      {showFooter && (
        <footer className="game-footer">
          <Footer />
        </footer>
      )}
    </div>
  );
};

const mapStateToProps = ({ appState, world, dialog }) => ({
  appState,
  world,
  dialog,
});

export default connect(mapStateToProps)(App);
