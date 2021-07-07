import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';


const routes: Routes = [
  { path: '', redirectTo: 'policies', pathMatch: 'full' },
  { path: 'policies', component: PolicyListComponent },
  { path: 'policy/:id', component: PolicyDetailsComponent },
  { path: 'add', component: AddPolicyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
