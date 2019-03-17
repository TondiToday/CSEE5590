import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  id = '';
  name: object = {
    first: <string>'',
    last: <string>''
  };
  gender = '';
  birthday = '';
  lastContact = '';
  customerLifetimeValue = '';
  customer = {name: {}};
  submitted = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
    this.customerForm = this.formBuilder.group({
      firstName: [' ', Validators.required],
      lastName: [' ', Validators.required],
      gender: [' ', Validators.required],
      birthday: [' ', Validators.required],
      lastContact: [' ', Validators.required],
      customerLifetimeValue: [' ', Validators.required],
    });
  }

  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
  }

  getCustomer(id) {
    /*** Get the Customer Details*/
    this.api.getCustomer(id)
      .subscribe(data => {
        let newCustomer = {firstName: data.name.first,
        lastName: data.name.last,
        gender: data.gender,
        birthday: new Date(data.birthday),
        lastContact: new Date(data.lastContact),
        customerLifetimeValue: data.customerLifetimeValue}
        this.customerForm.patchValue(newCustomer);
        console.log(data);
        this.customer = data;
      });
  }

  onFormSubmit(form: NgForm) {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    let customer: object = {};
    customer['customerID'] = 15;
    customer['name'] = {
      first: this.customerForm.value.firstName,
      last: this.customerForm.value.lastName
    };
    customer['gender'] = this.customerForm.value.gender;
    customer['birthday'] = this.customerForm.value.birthday;
    customer['lastContact'] = this.customerForm.value.lastContact;
    customer['customerLifetimeValue'] = this.customerForm.value.customerLifetimeValue;
    /*** On form submit update the customer details*/
    let id = this.route.snapshot.params['id'];
    console.log('Customer', customer);
    this.api.updateCustomer(id, customer)
      .subscribe(res => {
        console.log('it works')
        this.router.navigate(['/customer-details', id]);
      }, (err) => {
        console.log(err);
      });

  }
  onReset() {
    this.submitted = false;
    this.customerForm.reset();
  }
  get f() {
    return this.customerForm.controls;
  }

}
