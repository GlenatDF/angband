export class GodModeStateManager {
  private static instance: GodModeStateManager;
  private active: boolean = false;

  private constructor() {}

  public static getInstance(): GodModeStateManager {
    if (!GodModeStateManager.instance) {
      GodModeStateManager.instance = new GodModeStateManager();
    }
    return GodModeStateManager.instance;
  }

  public activate() {
    this.active = true;
    this.notifyChange();
  }

  public deactivate() {
    this.active = false;
    this.notifyChange();
  }

  public isActive(): boolean {
    return this.active;
  }

  private notifyChange() {
    document.dispatchEvent(new CustomEvent('godModeChange', { detail: this.active }));
  }
}