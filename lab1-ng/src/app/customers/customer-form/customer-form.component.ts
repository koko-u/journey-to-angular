import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import {
  ControlsOf,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@ngneat/reactive-forms'
import { Customer } from '../models/customer.model'
import { Validators } from '@angular/forms'
import { CustomersService } from '../customers.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'

type CustomerFormType = {
  firstName: string
  lastName: string
}

@Component({
  selector: 'lab1-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent {
  customerForm: FormGroup<ControlsOf<CustomerFormType>>

  @Output() addCustomer = new EventEmitter<Customer>()

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.customerForm = new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
    })
  }

  async Save() {
    if (this.customerForm.invalid) return

    const customer = new Customer(
      this.customerForm.controls.firstName.value,
      this.customerForm.controls.lastName.value
    )

    this.customersService.add(customer)
    await this.router.navigate([''], { relativeTo: this.route })
  }

  onCancel() {
    this.location.back()
  }
}
