import godModeStateManager from './GodModeStateManager';

class SinglePlayerGuard {
  constructor(sessionType) {
    this.sessionType = sessionType;
  }

  check() {
    if (this.sessionType !== 'single-player') {
      godModeStateManager.toggle(false);
      console.warn('God Mode is disabled in multiplayer sessions');
    }
  }
}

export default SinglePlayerGuard;