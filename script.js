function getFormvalue() {
    // Get the values of the first and last name from the form
    var firstName = document.forms["form1"]["fname"].value;
    var lastName = document.forms["form1"]["lname"].value;

    // Display an alert with the user's first and last name
    alert('First name: ' + firstName + '\nLast name: ' + lastName);
}
