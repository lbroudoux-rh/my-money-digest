import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: any[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactsService.getContacts().subscribe(results => this.contacts = results);
  }

  removeContact(id: string): void {
    console.log("Removing contact with id: " + id);
    this.contactsService.removeContact(id).subscribe(
      {
        next: res => {
          alert("Contact has been removed!");
          this.getContacts();
        },
        error: err => {
          console.log("Error: " + err);
          alert("Oops... Something wrong happens...");
        },
        complete: () => console.log('Observer got a complete notification'),
      }
    )
  }
}
