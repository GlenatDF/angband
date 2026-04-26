import { GodModeStateManager } from '../src/god_mode_state_manager';
import { calculateDamage } from '../src/damage_interception_layer';
import { isSinglePlayer, canActivateGodMode } from '../src/single_player_guard';

function testZeroDamage() {
  GodModeStateManager.getInstance().activate();
  const damage = calculateDamage(100);
  console.assert(damage === 0, 'God Mode should set damage to zero');
  GodModeStateManager.getInstance().deactivate();
}

testZeroDamage();

function testAchievementSuppression() {
  GodModeStateManager.getInstance().activate();
  console.log('Expect "Achievement test-achievement-id suppressed due to active God Mode."');
  processAchievement('test-achievement-id');
}

function testSinglePlayerGuard() {
  const context = { mode: 'single-player' };
  console.assert(canActivateGodMode(context), 'God Mode can be activated in single-player');
  context.mode = 'multiplayer';
  console.assert(!canActivateGodMode(context), 'God Mode cannot be activated in multiplayer');
}

// Execute tests
testZeroDamage();
testAchievementSuppression();
testSinglePlayerGuard();