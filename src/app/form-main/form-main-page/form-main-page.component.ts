import { ChangeDetectionStrategy, Component } from '@angular/core'
import { User, UserOption } from '../../types/user.type'

@Component({
  selector: 'app-form-main-page',
  templateUrl: './form-main-page.component.html',
  styleUrls: ['./form-main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormMainPageComponent {
  users: User[] = [
    {
      id: 0,
      name: 'Новиков Дмитрий Олегович',
      options: [
        { id: 0, name: 'Пакет минут', price: 300, startDate: new Date() },
        { id: 1, name: 'Пакет смс', price: 0, startDate: new Date() },
        { id: 2, name: 'Обслуживание', price: 60, startDate: new Date() }
      ]
    },
    {
      id: 1,
      name: 'Смирнов Евгений Михайлович',
      options: [
        { id: 0, name: 'Пакет минут', price: 300, startDate: new Date() },
        { id: 1, name: 'Обслуживание', price: 10, startDate: new Date() },
        { id: 2, name: 'Интернет', price: 20, startDate: new Date() },
        { id: 3, name: 'Гороскоп', price: 0, startDate: new Date() }
      ]
    },
    {
      id: 2,
      name: 'Новикова Ольга Алексеевна',
      options: [
        { id: 0, name: 'ТВ', price: 100, startDate: new Date() },
        { id: 1, name: 'Пакет минут', price: 150, startDate: new Date() }
      ]
    }
  ]

  selectedUserId = 0
  selectedUser: User = { ...this.users[0] }

  onChangeUser (id: number): void {
    this.selectedUserId = id
    this.selectedUser = { ...this.users[id] }
  }

  onRemoveOption (id: number): void {
    const options: UserOption[] = this.selectedUser.options.filter(option => option.id !== id)
    this.selectedUser = { ...this.selectedUser, options }
    const updatedUsers: User[] = this.users.map(user => {
      if (user.id === this.selectedUserId) {
        return {
          ...user,
          options
        }
      }
      return user
    })
    this.users = [...updatedUsers]
  }
}
