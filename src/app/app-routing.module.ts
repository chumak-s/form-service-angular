import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', loadChildren: () => import('./form-main/form-main.module').then(m => m.FormMainModule), pathMatch: 'full' },
  { path: 'setting', loadChildren: () => import('./form-settings/form-settings.module').then(m => m.FormSettingsModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
