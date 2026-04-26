export function isSinglePlayer(context: any): boolean {
  // Placeholder logic for determining single-player
  return context.mode === 'single-player';
}

export function canActivateGodMode(context: any): boolean {
  return isSinglePlayer(context);
}