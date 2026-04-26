import godModeStateManager from './GodModeStateManager';

function overrideDamageHandler(originalDamageHandler) {
  return function(damage, ...args) {
    if (godModeStateManager.isGodModeActive()) {
      return 0; // Player takes zero damage
    }
    return originalDamageHandler(damage, ...args);
  };
}

export default overrideDamageHandler;