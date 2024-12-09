$(document).ready(function () {
    $('#sform').submit(function (event) {    //events are actions that happen on a web page, such as clicks, hover, or keypress
        event.preventDefault();
        console.log("Form submitted");
        // Define the order of values
        const fields = [
            'firstname',
            'lastname',
            'Email',
            'Phone',
            'Zipcode',
            'contact',
            'Make',
            'Model',
            'Year',
            'Miles',
            'Vin',];

        let formValues = "";

        // fields in order and get their values
        fields.forEach(function (fieldName) {
            const value = $(`input[name="${fieldName}"]`).val(); // Get the name and value of each input field  
            //const = a keyword used to declare a variable that cannot be reassigned a new value.
            formValues += `${fieldName}: ${value}\n`; // Append(add) field name and its value to formValues
        });

        $('input[type="radio"]').each(function () {
            //The each() method specifies a function to run for each matched element.
            if ($(this).is(':checked')) {
                var name = $(this).attr('name'); // Get the name of the selected radio button
                var value = $(this).val(); // Get the value of the selected radio button
            }
        });
        //alert(formValues);

    });
});

jQuery.validator.addMethod("lettersOnly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/.test(value);
}, "Name can only contain letters");
jQuery.validator.addMethod("numbersOnly", function(value, element) {
    return this.optional(element) || /^[0-9]+$/.test(value);
}, "Phone number can only contain numbers");

$(document).ready(function() {
    // Custom method for phone number (only numbers allowed)
    jQuery.validator.addMethod("numbersOnly", function(value, element) {
        return this.optional(element) || /^[0-9]+$/.test(value);
    }, "Phone number can only contain numbers");

    // Initialize form validation
    jQuery('#sform').validate({
        rules: {
            firstname: {
                required: true,
                lettersOnly: true,
                minlength:3
            },
            lastname:{
                required: true,
                lettersOnly: true,
                minlength:4
            },
            Email: {
                required: true,
                email: true
            },
            Phone: {
                required: true,
                numbersOnly: true, // Custom validation rule for numbers only,\
                minlength: 10,
            },
            Zipcode: {
                required: true,
                minlength: 4
            },
            Make: "required",
            Model: "required",
            Year: "required",
            Miles: "required",
            Vin: "required",
            contactMethod: {
                required: "Please select your contact Method"
            },
        },
        messages: {
            firstname: {
                required: "Please enter your first name",
                lettersOnly: "Name can only contain letters",
                minlength: "Name must be 3 char long"
            },
            lastname:{
                required: "Please enter your last name",
                  lettersOnly: "Name can only contain letters",
                minlength: "Name must be 3 char long"
            },
            Email: {
                required: "Please enter your email",
                email: "Please enter a valid email"
            },
            Phone: {
                required: "Please enter your phone number",
                numbersOnly: "Phone number can only contain numbers",
                minlength: "Phone number must be at least 10 characters long",
            },
            Zipcode: {
                required: "Please enter your Zipcode",
                minlength: "Zipcode must be at least 4 characters long"
            },
            Make: "Please enter your vehicle's make",
            Model: "Please enter your vehicle's model",
            Year: "Please enter your vehicle's year",
            Miles: "Please enter the mileage",
            Vin: "Please enter the serial number",
            contactMethod: {
                required: "Please select your contact Method"
            },

        },
        submitHandler: function(form) {
            form.submit();
        },

        // Enable real-time validation by using `onkeyup` and `focusout`
        onkeyup: function(element) {
            // Trigger validation on keyup for all fields
            $(element).valid();
        },
        focusout: function(element) {
            // Trigger validation when the user leaves the field
            $(element).valid();
        }
    });
});









