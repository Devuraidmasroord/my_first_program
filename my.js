(plugin)
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

or 

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
        alert(formValues);
    });

    $(document).ready(function () {
        $("#submit1").click(function (e) {
          e.preventDefault(); // Prevent form submission
      
          // Store form fields in an object
          let form = {
            first: $("#firstname"),
            second: $("#lastname"),
            email: $("#Email"),
            phone: $("#phone"),
            zipcode: $("#Zipcode"),
            make: $("#Make"),
            model: $("#Model"),
            year: $("#Year"),
            miles: $("#Miles"),
            vin: $("#Vin")
          };
      
          let formValid = true;
      
          // Loop through each field to check if it's empty
          $.each(form, function (field, element) {
            if (element.val() === "") {
              element.css("border-color", "red");
              formValid = false;
            } else {
              element.css("border-color", "");
            }
          });
      
          // Check if any field is empty
          if (!formValid) {
            alert("Please fill all the required fields.");
          } else {
            alert("Form submitted successfully!");
            // Add your form submission code here
          }
        });
      });
    });
    $(document).ready(function () {
      // Function to add error messages
      function addErrorMessage(field, message) {
        if (field.next(".error-container").length === 0) {
          field.after('<div class="error-container"></div>');
        }
        field
          .next(".error-container")
          .html('<p class="error">' + message + '</p>'); // Replace existing message
      }
    
      // Function to clear error messages
      function clearErrorMessage(field) {
        field.next(".error-container").remove();
      }
      function validateFirstname() {
        const firstNameVal = $("#firstname").val().trim();
        if (firstNameVal === "") {
          addErrorMessage($("#firstname"), "You can not leave this field empty.");
          return false;
        } else if (/^[0-9]/.test(firstNameVal)) { // First check: Ensure the first character is not a digit
          addErrorMessage($("#firstname"), "Firstname can not start with a number.");
          return false;
        } else if (firstNameVal.length < 3 || firstNameVal.length > 12) { // Length check comes after the number check
          addErrorMessage(
            $("#firstname"),
            "Firstname should have 3 to 12 characters."
          );
          return false;
        } else {
          clearErrorMessage($("#firstname"));
          return true;
        }
      }
      
      function validateLastname() {
        const lastNameVal = $("#lastname").val().trim();
        if (lastNameVal === "") {
          addErrorMessage($("#lastname"), "You can not leave this field empty.");
          return false;
        } else if (/^[0-9]/.test(lastNameVal)) { // First check: Ensure the first character is not a digit
          addErrorMessage($("#lastname"), "Lastname can not start with a number.");
          return false;
        } else if (lastNameVal.length < 3 || lastNameVal.length > 12) { // Length check comes after the number check
          addErrorMessage(
            $("#lastname"),
            "Lastname should have 3 to 12 characters."
          );
          return false;
        } else {
          clearErrorMessage($("#lastname"));
          return true;
        }
      }
      
    
      function validateEmail() {
        const emailVal = $("#Email").val().trim();
        if (emailVal === "") {
          addErrorMessage($("#Email"), "You can not leave this field empty.");
          return false;
        } else if (!/@gmail.com/.test(emailVal)) {
          addErrorMessage($("#Email"), "Please enter a valid email address.");
          return false;
        } else {
          clearErrorMessage($("#Email"));
          return true;
        }
      }
      function validatePhone() {
        const phoneVal = $("#phone").val().trim();
        // Regex to check if phone number contains any non-digit characters
        const nonDigitRegex = /[^0-9]/;
      
        // Check if the phone number is empty
        if (phoneVal === "") {
          addErrorMessage($("#phone"), "You can not leave this field empty.");
          return false;
        } 
        // Check if phone number contains any non-digit characters (e.g., letters)
        else if (nonDigitRegex.test(phoneVal)) {
          addErrorMessage($("#phone"), "Phone number can not contain text.");
          return false;
        } 
        // Check if phone number starts with text (optional, you can remove this part)
        else if (/^[a-zA-Z]/.test(phoneVal)) {
          addErrorMessage($("#phone"), "Phone number can not start with text.");
          return false;
        } 
        // Check if phone number is exactly 11 digits
        else if (phoneVal.length !== 11) {
          addErrorMessage($("#phone"), "Phone number must be 11 digits.");
          return false;
        } 
        else {
          // Clear any existing error message if valid
          clearErrorMessage($("#phone"));
          return true;
        }
      }
      

      function validateZipcode() {
        const zipcodeVal = $("#Zipcode").val().trim();
        // Regex for US zip code: 5 digits or 5 digits followed by a hyphen and 4 more digits.
        const zipRegex = /^\d{5}(-\d{4})?$/;
        if (zipcodeVal === "") {
          addErrorMessage($("#Zipcode"), "You can not leave this field empty.");
          return false;
        } else if (!zipRegex.test(zipcodeVal)) {
          addErrorMessage($("#Zipcode"), "Please enter a valid zip code.");
          return false;
        } else {
          clearErrorMessage($("#Zipcode"));
          return true;
        }
      }
      
    
      function validateMake() {
        const makeVal = $("#Make").val().trim();
        if (makeVal === "") {
          addErrorMessage($("#Make"), "Please enter make.");
          return false;
        } else {
          clearErrorMessage($("#Make"));
          return true;
        }
      }
    
      function validateModel() {
        const modelVal = $("#Model").val().trim();
        if (modelVal === "") {
          addErrorMessage($("#Model"), "Please enter model.");
          return false;
        } else {
          clearErrorMessage($("#Model"));
          return true;
        }
      }
    
      function validateYear() {
        const yearVal = $("#Year").val().trim();
        if (yearVal === "") {
          addErrorMessage($("#Year"), "Please enter year.");
          return false;
        } else if (!/^\d{4}$/.test(yearVal)) {
          addErrorMessage($("#Year"), "Year must be a 4-digit number.");
          return false;
        } else {
          clearErrorMessage($("#Year"));
          return true;
        }
      }
    
      function validateMiles() {
        const milesVal = $("#Miles").val().trim();
        if (milesVal === "") {
          addErrorMessage($("#Miles"), "Please enter miles.");
          return false;
        } else if (!/^\d+$/.test(milesVal)) {
          addErrorMessage($("#Miles"), "Miles must be a numeric value.");
          return false;
        } else {
          clearErrorMessage($("#Miles"));
          return true;
        }
      }
    
      function validateVin() {
        const vinVal = $("#Vin").val().trim();
        if (vinVal === "") {
          addErrorMessage($("#Vin"), "Please enter serial no.");
          return false;
        } else {
          clearErrorMessage($("#Vin"));
          return true;
        }
      }
    
      // Add onblur and onfocus validation
      $("#firstname").on("blur", validateFirstname).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      $("#lastname").on("blur", validateLastname).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      $("#Email").on("blur", validateEmail).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      $("#phone").on("blur", validatePhone).on("focus", function () {
        clearErrorMessage($(this));
      });
      
      $("#Zipcode").on("blur", validateZipcode).on("focus", function () {
        clearErrorMessage($(this));
      });
      $("#Make").on("blur", validateMake).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      $("#Model").on("blur", validateModel).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      $("#Year").on("blur", validateYear).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      $("#Miles").on("blur", validateMiles).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      $("#Vin").on("blur", validateVin).on("focus", function () {
        clearErrorMessage($(this));
      });
    
      // Form submission
      $("#submit1").click(function (e) {
        e.preventDefault(); // Prevent form submission
    
        const formValid =
          validateFirstname() &&
          validateLastname() &&
          validateEmail() &&
          validatePhone() &&
          validateMake() &&
          validateModel() &&
          validateYear() &&
          validateMiles() &&
          validateVin();
    
        if (formValid) {
          alert("Form submitted successfully!");
          // Add your form submission logic here
        }
      });
    });
    









