// ALL OF THIS CODE HAS BEEN TAKEN AND HEAVILY MODIFIED FROM CAROLINE BARRIERE'S LAB 5 SAMPLE

// Variable stored for the selected expert (Jeremy is selected by default)
var expertForBooking = "jeremySelected"; 

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([+]?[0-9]{3,4})\) [0-9]{3}-[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}

function changeExpert(selectedExpert){
    expertForBooking = selectedExpert;
    document.getElementById("dateInput").value = "";
}

function validateCreditCard(cardNum){
    var creditCardField = document.getElementById(cardNum);
    var creditNumber = creditCardField.value;
    creditNumber = creditNumber.replace(/-/g,"");
    console.log(creditNumber);
    var filter = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

    if(filter.test(creditNumber)){
        return true
    } else {
        return false
    }
}

function validateDate(){
    var selectedDate = document.getElementById('dateInput').value;
    if (selectedDate.localeCompare("") == 0 || !selectedDate){
        return false;
    } else {
        return true; 
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // If no expert is selected
    if (!expertForBooking){
        return [false];
    }
    
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0) {
        return [false];
    }

    if (expertForBooking.localeCompare("jeremySelected") == 0) {
        if (date.getDay() == 5 || date.getDay() == 6) {
            return [false];
        }
    }

    if (expertForBooking.localeCompare("colinSelected") == 0) {
        if (date.getDay() == 1 || date.getDay() == 3 || date.getDay() == 4) {
            return [false];
        }
    }

    return [true];
}

function boookedApproved(){
    if(validateCreditCard("creditNumber") && validateDate() && validatePhone("phone")){
        alert("Booking Successful!");
        location.reload() // reload page
    } else {
        alert("Booking Error. Check the format of your inserted date, credit card number and phone number.");
    }
}
// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxx) xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );

    $("#creditNumber").on("change",function(){
        if(!validateCreditCard("creditNumber")){
            alert("Wrong Credit Card Format");
            $("#phone").val("xxxx xxxx xxxx xxxx");
            $("#creditNumber").removeClass("good")
            $("#creditNumber").addClass("error");
        }
        else{
            $("#creditNumber").removeClass("error");
            $("#creditNumber").addClass("good")
        }

    });

    // All Credit Card Tooltip Stuff 
    $("#creditNumber").on("mouseenter", function(){
        $("#creditNumber").addClass("showInput");
    });

    $("#creditNumber").on("mouseleave", function(){
        $("#creditNumber").removeClass("showInput");
    });

    $("#creditNumber").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });

    // All Phone Tooltip stuff
    $("#phone").on("mouseenter", function(){
        $("#phone").addClass("showInput");
    });

    $("#phone").on("mouseleave", function(){
        $("#phone").removeClass("showInput");
    });

    $("#phone").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });

});