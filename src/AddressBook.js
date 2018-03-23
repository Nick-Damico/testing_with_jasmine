function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
};

AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this;

  setTimeout(function(){
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts = [...this.contacts, contact];
};

AddressBook.prototype.getContact = function(index){
  return this.contacts[ index ];
};

AddressBook.prototype.removeContact = function(index){
  this.contacts.splice(index, 1);
};
