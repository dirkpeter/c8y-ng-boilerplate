import { Component, Input } from '@angular/core';
import { IButton, IButtonState, IButtonType } from '../../models/button.model';

@Component({
  selector: 'ygg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() button?: IButton = new IButton('');
  @Input() set type(buttonType: IButtonType) {
    this.button.type = buttonType;
  }
  @Input() set state(buttonState: IButtonState) {
    this.button.state = buttonState;
  }
  @Input() set disabled(state: boolean) {
    this.button.disabled = state;
  }
  @Input() set showLabel(state: boolean) {
    this.button.showLabel = state;
  }
  @Input() set icon(iconName: string) {
    this.button.icon = iconName;
  }
}
