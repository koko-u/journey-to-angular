import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CustomersComponent } from './customers.component'
import { CustomerFormComponent } from './customer-form/customer-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CustomerListComponent } from './customer-list/customer-list.component'
import { CustomersService } from './customers.service'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerFormComponent,
    CustomerListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [CustomersComponent],
  providers: [CustomersService],
})
export class CustomersModule {}
