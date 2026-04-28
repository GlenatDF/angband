class DungeonEventDirector {
  private static readonly EVENT_FREQUENCY: number = 0.01; // Example frequency (1%)
  private static readonly COOLDOWN_TURNS: number = 100;
  private lastEventTurn: number = 0;

  constructor(private currentTurn: number, private triggerEvent: () => void) {}

  public maybeTriggerEvent(): void {
    if (this.currentTurn - this.lastEventTurn > DungeonEventDirector.COOLDOWN_TURNS && Math.random() < DungeonEventDirector.EVENT_FREQUENCY) {
      this.triggerEvent();
      this.lastEventTurn = this.currentTurn;
    }
  }
}

export default DungeonEventDirector;