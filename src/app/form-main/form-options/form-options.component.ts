import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { User, UserOption } from '../../types/user.type'

@Component({
  selector: 'app-form-options',
  templateUrl: './form-options.component.html',
  styleUrls: ['./form-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormOptionsComponent {
  @Input() user: User
  @Input() filteredUserOptions: UserOption[]
  @Input() availableOptions: UserOption[]
  @Output() removeOption: EventEmitter<number> = new EventEmitter<number>()
  @Output() selectedOptionId: EventEmitter<number> = new EventEmitter<number>()
  @Output() addSelectedOptions: EventEmitter<void> = new EventEmitter<void>()
  @Output() changeInputValue: EventEmitter<string> = new EventEmitter<string>()
  inputValue: string

  get showSelectedOptionNotice (): boolean {
    return this.user.options.length === 0
  }

  get showUnselectedOptionNotice (): boolean {
    return this.availableOptions.length === 0
  }

  get showFilteredUserOptions (): UserOption[] {
    return this.filteredUserOptions.length === 0 && !this.inputValue ? this.user.options : this.filteredUserOptions
  }

  onRemoveOption (id: number): void {
    this.removeOption.emit(id)
  }

  selectAnOption (event: MouseEvent, id: number): void {
    event.preventDefault()
    this.selectedOptionId.emit(id)
  }

  onAddSelectedOptions (): void {
    this.addSelectedOptions.emit()
  }

  onChangeInputValue (): void {
    this.changeInputValue.emit(this.inputValue)
  }
}
