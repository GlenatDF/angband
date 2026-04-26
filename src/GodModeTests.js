import godModeStateManager from './GodModeStateManager';
import overrideDamageHandler from './DamageHandlerOverride';
import shouldAwardAchievement from './AchievementGate';

function testGodMode() {
  // Test zero damage in God Mode
  const originalDamageHandler = (damage) => damage;
  const damageHandler = overrideDamageHandler(originalDamageHandler);

  godModeStateManager.toggle();
  console.assert(damageHandler(10) === 0, 'Damage should be zero when God Mode is active');
  godModeStateManager.toggle();
  console.assert(damageHandler(10) === 10, 'Damage should be normal when God Mode is inactive');

  // Test achievement suppression
  godModeStateManager.toggle();
  console.assert(!shouldAwardAchievement(), 'Achievement should be suppressed in God Mode');
  godModeStateManager.toggle();
  console.assert(shouldAwardAchievement(), 'Achievement should be awarded when God Mode is inactive');

  console.log('All tests passed');
}

testGodMode();