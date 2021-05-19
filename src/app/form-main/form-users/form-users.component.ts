import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from '../../types/user.type'

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUsersComponent {
  @Input() users: User[] | null = null
  @Output() selectedUserId: EventEmitter<number> = new EventEmitter<number>()
  currentId = 0

  selectUser (id: number): void {
    this.currentId = id
    this.selectedUserId.emit(id)
  }

  selected (id: number): boolean {
    return this.currentId === id
  }
}
