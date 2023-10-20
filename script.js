function getFormvalue() {
    // Get the values of the first and last name from the form
    var firstName = document.getElementById("form1").elements.fname.value;
    var lastName = document.getElementById("form1").elements.lname.value;

    // Display the first and last name using an alert
    alert("First name: " + firstName + "\nLast name: " + lastName);
}
