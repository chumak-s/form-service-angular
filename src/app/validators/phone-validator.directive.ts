import { FormControl } from '@angular/forms'

export class PhoneValidator {
  static phoneValidator (control: FormControl): {[key: string]: boolean} {
    const str = '89'
    return !control.value.startsWith(str) ? { phoneValidator: true } : null
  }
}
