function message(){
let a = document.forms["myForm"]["firstName"].value;
let b = document.forms["myForm"]["lastName"].value;
let c = document.forms["myForm"]["phoneNo"].value;
  if (a == "") {
    alert("FirstName field must be filled out");
    return false;
    }
    else if (b == "") {
    alert("LastName field must be filled");
    return false;
    }
    else if (c == "") {
    alert("PhoneNo field must be filled");
    return false;
} 
}