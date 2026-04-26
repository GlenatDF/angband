import { GodModeStateManager } from './god_mode_state_manager';

export function calculateDamage(originalDamage: number): number {
  const godModeActive = GodModeStateManager.getInstance().isActive();
  return godModeActive ? 0 : originalDamage;
}