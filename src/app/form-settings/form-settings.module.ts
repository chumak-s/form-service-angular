import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormSettingsPageComponent } from './form-settings-page/form-settings-page.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    FormSettingsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FormSettingsPageComponent }
    ]),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class FormSettingsModule { }
