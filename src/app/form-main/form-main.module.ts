import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormMainPageComponent } from './form-main-page/form-main-page.component'
import { RouterModule } from '@angular/router'
import { FormUsersComponent } from './form-users/form-users.component'
import { FormOptionsComponent } from './form-options/form-options.component'

@NgModule({
  declarations: [
    FormMainPageComponent,
    FormUsersComponent,
    FormOptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FormMainPageComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FormMainModule { }
