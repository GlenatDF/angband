import { GodModeStateManager } from './god_mode_state_manager';

export function processAchievement(achievementId: string) {
  if (GodModeStateManager.getInstance().isActive()) {
    console.log(`Achievement ${achievementId} suppressed due to active God Mode.`);
    return;
  }

  // Normal achievement processing logic...
}