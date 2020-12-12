export enum IButtonState {
  NEUTRAL = 'neutral',
  AFFIRMATIVE = 'affirmative',
  DESTRUCTIVE = 'destructive',
  DISMISSIVE = 'dismissive',
  DISABLED = 'disabled'
}

export enum IButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export class IButton {
  type: IButtonType = IButtonType.BUTTON;
  label: string;
  state: IButtonState = IButtonState.NEUTRAL;
  disabled = false;
  showLabel = true;
  icon?: string;

  constructor(label: string) {
    this.label = label;
  }
}
