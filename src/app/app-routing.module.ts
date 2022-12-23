import { GridPageComponent } from './component/grid-page/grid-page.component';
import { FlexPageComponent } from './component/flex-page/flex-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FlexPageComponent },
  { path: 'flex-page', component: FlexPageComponent },
  { path: 'grid-page', component: GridPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
