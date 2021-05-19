import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormSettingsPageComponent } from './form-settings-page/form-settings-page.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    FormSettingsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FormSettingsPageComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FormSettingsModule { }
