import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  firstname: string;
  lastname: string;
  iban: string;

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
  }

  public addContact(): void {
    var contact = {
      firstname: this.firstname, 
      lastname: this.lastname, 
      iban: this.iban
    };
    this.contactsService.addContact(contact).subscribe(
      {
        next: res => {
          alert("Contact has been created!");
          this.router.navigate(['/contacts']);
        },
        error: err => {
          console.log("Error: " + err);
          alert("Oops... Something wrong happens...");
        },
        complete: () => console.log('Observer got a complete notification'),
      }
    );
  }
}
