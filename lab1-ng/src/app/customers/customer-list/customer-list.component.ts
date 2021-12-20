import { Component, Input, OnInit } from '@angular/core'
import { Customer } from '../models/customer.model'
import { Observable } from 'rxjs'
import { CustomersService } from '../customers.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'lab1-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.customers$ = customersService.customers$
  }

  ngOnInit(): void {
    this.customersService.fetchCustomers().subscribe()
  }

  async onClick() {
    await this.router.navigate(['create'], { relativeTo: this.route })
  }
}
