export interface User {
  id: number
  name: string
  options: UserOption[]
}

export interface UserOption {
  id: number
  name: string
  price: number
  startDate?: Date
  check?: boolean
}
