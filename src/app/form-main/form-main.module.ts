import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormMainPageComponent } from './form-main-page/form-main-page.component'
import { RouterModule } from '@angular/router'
import { FormUsersComponent } from './form-users/form-users.component'
import { FormOptionsComponent } from './form-options/form-options.component'
import { PipeOptionsSumPipe } from '../pipes/pipe-options-sum.pipe'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    FormMainPageComponent,
    FormUsersComponent,
    FormOptionsComponent,
    PipeOptionsSumPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FormMainPageComponent }
    ]),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class FormMainModule { }
