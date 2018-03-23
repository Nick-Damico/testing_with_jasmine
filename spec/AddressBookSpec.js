// First add new suite.

describe('Address Book', function() {
  it('should be able to add a contact', function(){
    // using an Object Oriented Approach
    var addressBook = new AddressBook(),
        thisContact = new Contact();

    // now to add a contact to the instance of address book.
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});
