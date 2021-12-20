import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CustomersComponent } from './customers/customers.component'
import { CustomerListComponent } from './customers/customer-list/customer-list.component'
import { CustomerFormComponent } from './customers/customer-form/customer-form.component'

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: '', component: CustomerListComponent },
      { path: 'create', component: CustomerFormComponent },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
