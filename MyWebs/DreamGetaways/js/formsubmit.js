function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("First Name must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["lname"].value;
    if (x == null || x == "") {
        alert("Last Name must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["phone"].value;
    if (x == null || x == "") {
        alert("Phone number must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["email"].value;
    if (x == null || x == "") {
        alert("Email must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["#guest"].value;
    if (x == null || x == "") {
        alert("Number of Guests must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["sdate"].value;
    if (x == null || x == "") {
        alert("Start Date must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["edate"].value;
    if (x == null || x == "") {
        alert("End Date must be filled out");
        return false;
    }
	else {
        return confirm('Is the information provided is accurate?');
    }
};