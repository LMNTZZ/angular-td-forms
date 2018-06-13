import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;
  subscriptionTypes: string[] = ['Basic', 'Advanced', 'Pro']
  defaultSubscription: string = 'Advanced';
  submitted: boolean = false;

  subscription = {
    email: '',
    subscriptionType: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    console.log('Something got submitted!');
    this.subscription.email = this.subscriptionForm.value.email;
    this.subscription.subscriptionType = this.subscriptionForm.value.subscriptionType;
    this.subscription.password = this.subscriptionForm.value.password;

    this.subscriptionForm.reset();
  }
}
