import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from '../../types/user.type'

@Component({
  selector: 'app-form-options',
  templateUrl: './form-options.component.html',
  styleUrls: ['./form-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormOptionsComponent {
  @Input() user: User
  @Output() removeOption: EventEmitter<number> = new EventEmitter<number>()

  get showSelectedNotice (): boolean {
    return this.user.options.length === 0
  }

  onRemoveOption (id: number): void {
    this.removeOption.emit(id)
  }
}
