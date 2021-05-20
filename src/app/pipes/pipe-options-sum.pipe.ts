import { Pipe, PipeTransform } from '@angular/core'
import { UserOption } from '../types/user.type'

@Pipe({
  name: 'pipeOptionsSum'
})

export class PipeOptionsSumPipe implements PipeTransform {
  transform (userOption: UserOption[]): number | string {
    if (userOption) {
      return userOption.reduce((sum, option) => sum + option.price, 0)
    } else {
      return 'ошибка расчета'
    }
  }
}
