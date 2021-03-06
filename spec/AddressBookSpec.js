// First add new suite.

describe('Address Book', function() {
  var addressBook,
      thisContact;

  beforeEach(function(){
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function(){
    // now to add a contact to the instance of address book.
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function(){
    addressBook.addContact(thisContact);
    addressBook.removeContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

describe('Async Address Book', function() {
  var address_book = new AddressBook();

  beforeEach(function(done){
    address_book.getInitialContacts(function() {
      done();
    });
  });

  it('should grab initial contacts', function(done){
    expect(address_book.initialComplete).toBe(true);
    done();
  });
});
