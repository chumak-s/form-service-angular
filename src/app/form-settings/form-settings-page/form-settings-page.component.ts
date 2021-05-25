import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PhoneValidator } from '../../validators/phone-validator.directive'
import { isEqual } from 'lodash'
import { UserSettings } from '../../types/settings.type'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-form-settings-page',
  templateUrl: './form-settings-page.component.html',
  styleUrls: ['./form-settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormSettingsPageComponent implements OnInit, OnDestroy {
  form: FormGroup
  showNotificationsWays: boolean

  notificationsSubscription: Subscription
  notificationsTypeSubscription: Subscription

  user: UserSettings = {
    name: 'Доронин Сергей Леонидович',
    userName: 'Псевдоним',
    email: 'a@a.ru',
    phone: '89005555555',
    notifications: true,
    notificationsType: 'email'
  }

  get disabledButton (): boolean {
    const user: UserSettings = {
      name: this.form.get('fullName').value,
      userName: this.form.get('userName').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      notifications: this.form.get('notifications').value,
      notificationsType: this.form.get('notificationsType').value
    }
    return isEqual(user, this.user)
  }

  get userName (): AbstractControl {
    return this.form.get('userName')
  }

  get email (): AbstractControl {
    return this.form.get('email')
  }

  get phone (): AbstractControl {
    return this.form.get('phone')
  }

  constructor (private readonly fb: FormBuilder) {
  }

  ngOnInit (): void {
    if (localStorage.getItem('user')) {
      this.user = { ...JSON.parse(localStorage.getItem('user')) }
    }
    this.initForm()
    this.createFormListeners()
    this.showNotificationsWays = this.user.notifications
  }

  initForm (): void {
    this.form = this.fb.group({
      fullName: [{ value: this.user?.name, disabled: true }, [Validators.maxLength(200), Validators.required]],
      userName: [this.user.userName, [Validators.maxLength(200), Validators.required]],
      email: [
        { value: this.user.email, disabled: this.user.notificationsType !== 'email' },
        [
          Validators.email,
          Validators.required,
          Validators.maxLength(200)
        ]
      ],
      phone: [
        { value: this.user.phone, disabled: this.user.notificationsType !== 'phone' },
        [
          Validators.maxLength(11),
          Validators.minLength(11),
          PhoneValidator.phoneValidator,
          Validators.required
        ]
      ],
      notifications: [this.user.notifications],
      notificationsType: [this.user.notificationsType]
    })
  }

  createFormListeners (): void {
    this.notificationsSubscription = this.form.controls.notifications.valueChanges.subscribe(value => {
      this.showNotificationsWays = value
    })

    this.notificationsTypeSubscription = this.form.controls.notificationsType.valueChanges.subscribe(value => {
      if (value === 'phone') {
        this.form.controls.phone.enable()
        this.form.controls.email.disable()
      } else {
        this.form.controls.email.enable()
        this.form.controls.phone.disable()
      }
    })
  }

  submit (): void {
    const user: UserSettings = {
      name: this.form.get('fullName').value,
      userName: this.form.get('userName').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      notifications: this.form.get('notifications').value,
      notificationsType: this.form.get('notificationsType').value
    }

    localStorage.setItem('user', JSON.stringify(user))
    this.user = { ...JSON.parse(localStorage.getItem('user')) }
  }

  cancelChanges (): void {
    this.user = { ...JSON.parse(localStorage.getItem('user')) }

    this.form.get('fullName').setValue(this.user.name)
    this.form.get('userName').setValue(this.user.userName)
    this.form.get('email').setValue(this.user.email)
    this.form.get('phone').setValue(this.user.phone)
    this.form.get('notifications').setValue(this.user.notifications)
    this.form.get('notificationsType').setValue(this.user.notificationsType)
  }

  ngOnDestroy (): void {
    this.notificationsSubscription.unsubscribe()
    this.notificationsTypeSubscription.unsubscribe()
  }
}
