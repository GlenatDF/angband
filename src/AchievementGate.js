import godModeStateManager from './GodModeStateManager';

function shouldAwardAchievement() {
  return !godModeStateManager.isGodModeActive();
}

export default shouldAwardAchievement;