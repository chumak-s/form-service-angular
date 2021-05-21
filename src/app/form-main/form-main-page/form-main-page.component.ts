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
    { id: 234, name: 'Новиков Дмитрий Олегович', options: [] },
    { id: 34, name: 'Смирнов Евгений Михайлович', options: [] },
    { id: 52, name: 'Новикова Ольга Алексеевна', options: [] }
  ]

  availableOptions: UserOption[] = [
    { id: 325, name: 'Пакет минут', price: 600, check: false },
    { id: 23, name: 'Пакет смс', price: 150, check: false },
    { id: 53, name: 'Интернет', price: 250, check: false },
    { id: 6467, name: 'Обслуживание', price: 60, check: false },
    { id: 9789, name: 'Определитель номера', price: 0, check: false },
    { id: 453, name: 'Антиспам', price: 90, check: false },
    { id: 6, name: 'Гороскоп', price: 120, check: false }
  ]

  selectedUserId = this.users[0].id
  selectedUser: User = { ...this.users[0] }
  filteredUserOptions: UserOption[] = []
  selectedAvailableOptionsId: number[] = []
  filteredAvailableOptions: UserOption[] = this.getFilteredAvailableOption(this.availableOptions, this.selectedUser)
  inputValue = ''

  onChangeUser (id: number): void {
    this.selectedUserId = id
    this.selectedUser = { ...this.users.find(user => user.id === id) }
    this.filteredAvailableOptions = this.getFilteredAvailableOption(this.availableOptions, this.selectedUser)
    this.selectedAvailableOptionsId = []
    this.searchAvailableOptions()
    this.searchUserOptions()
  }

  onRemoveOption (id: number): void {
    const options: UserOption[] = this.selectedUser.options.filter(option => option.id !== id)

    this.selectedUser = { ...this.selectedUser, options }
    this.users = [...this.saveUpdateUsers(this.users, options)]
    this.filteredAvailableOptions = this.getFilteredAvailableOption(this.availableOptions, this.selectedUser)
    this.searchAvailableOptions()
    this.searchUserOptions()
  }

  selectAnOption (id: number): void {
    let idList: number[] = [...this.selectedAvailableOptionsId]

    if (!idList.includes(id)) {
      idList.push(id)
      this.selectedAvailableOptionsId = [...idList]
      this.filteredAvailableOptions = [...this.changeCheckOptions(this.filteredAvailableOptions, idList)]
    } else {
      idList = idList.filter(item => item !== id)
      this.selectedAvailableOptionsId = [...idList]
      this.filteredAvailableOptions = [...this.changeCheckOptions(this.filteredAvailableOptions, idList)]
    }
  }

  onAddSelectedOptions (): void {
    const options: UserOption[] = [...this.selectedUser.options]

    this.availableOptions.forEach(option => {
      if (this.selectedAvailableOptionsId.includes(option.id)) {
        options.push({ ...option, startDate: new Date() })
      }
    })

    this.selectedAvailableOptionsId = []
    this.selectedUser = { ...this.selectedUser, options }
    this.users = [...this.saveUpdateUsers(this.users, options)]
    this.filteredAvailableOptions = this.getFilteredAvailableOption(this.availableOptions, this.selectedUser)
    this.searchAvailableOptions()
    this.searchUserOptions()
  }

  getFilteredAvailableOption (options: UserOption[], currentUser: User): UserOption[] {
    const nameUserOptionsList: string[] = currentUser.options.map(option => option.name)
    return options.filter(option => !nameUserOptionsList.includes(option.name))
  }

  saveUpdateUsers (users: User[], options: UserOption[]): User[] {
    return users.map(user => {
      if (user.id === this.selectedUserId) {
        return { ...user, options }
      }
      return { ...user }
    })
  }

  changeCheckOptions (options: UserOption[], idList: number[]): UserOption[] {
    return options.map(option => {
      if (idList.includes(option.id)) {
        return { ...option, check: true }
      } else {
        return { ...option, check: false }
      }
    })
  }

  onChangeInputValue (inputValue: string): void {
    this.inputValue = inputValue
    this.searchAvailableOptions()
    this.searchUserOptions()
  }

  searchAvailableOptions (): void {
    this.filteredAvailableOptions = [...this.getFilteredAvailableOption(this.availableOptions, this.selectedUser)]

    const options: UserOption[] = this.filteredAvailableOptions
      .filter(option => option.name.toLowerCase().includes(this.inputValue.trim().toLowerCase()))

    this.filteredAvailableOptions = [...options]
  }

  searchUserOptions (): void {
    this.filteredUserOptions = this.selectedUser.options
      .filter(option => option.name.toLowerCase().includes(this.inputValue.trim().toLowerCase()))
  }
}
