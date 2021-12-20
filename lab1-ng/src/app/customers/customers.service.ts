import { Injectable } from '@angular/core'
import { BehaviorSubject, NEVER, Observable } from 'rxjs'
import { Customer } from './models/customer.model'

const initCustomers = [
  new Customer('山田', '太郎'),
  new Customer('佐藤', '浩一'),
  new Customer('清水', '雄二'),
]

@Injectable()
export class CustomersService {
  private _customersSubject$ = new BehaviorSubject<Customer[]>([])
  get customers$(): Observable<Customer[]> {
    return this._customersSubject$.asObservable()
  }

  constructor() {
    this._customersSubject$.next(initCustomers)
  }

  fetchCustomers(): Observable<never> {
    this._customersSubject$.next(this._customersSubject$.value)
    return NEVER
  }

  add(customer: Customer): Observable<never> {
    this._customersSubject$.next([...this._customersSubject$.value, customer])
    return NEVER
  }
}
