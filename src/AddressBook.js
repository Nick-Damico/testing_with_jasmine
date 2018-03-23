function AddressBook() {
  this.contacts = [];

  this.addContact = function(contact) {
    this.contacts = [...this.contacts, contact];
  }

  this.getContact = function(index) {
    return this.contacts[ index ];
  }
}
