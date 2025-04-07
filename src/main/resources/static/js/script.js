$(document).ready(function() {
    // Initialize datepicker
    $("#dob").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:" + new Date().getFullYear(),
        maxDate: new Date()
    });

    // Toggle between forms
    $("#showRegister").click(function(e) {
        e.preventDefault();
        $("#loginForm").hide();
        $("#registerForm").show();
    });

    $("#showLogin").click(function(e) {
        e.preventDefault();
        $("#registerForm").hide();
        $("#loginForm").show();
    });

    // Forgot password
    $("#forgotPassword").click(function(e) {
        e.preventDefault();
        const email = prompt("Please enter your email to reset password:");
        if (email) {
            if (validateEmail(email)) {
                alert("Password reset link has been sent to " + email);
            } else {
                alert("Please enter a valid email address");
            }
        }
    });

    // Login form validation
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        let isValid = true;
        const email = $("#loginEmail").val().trim();
        const password = $("#loginPassword").val().trim();

        // Validate email
        if (!email) {
            showError("#loginEmail", "Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("#loginEmail", "Please enter a valid email");
            isValid = false;
        } else {
            clearError("#loginEmail");
        }

        // Validate password
        if (!password) {
            showError("#loginPassword", "Password is required");
            isValid = false;
        } else if (password.length < 6) {
            showError("#loginPassword", "Password must be at least 6 characters");
            isValid = false;
        } else {
            clearError("#loginPassword");
        }

        if (isValid) {
            // Simulate login request
            console.log("Login data:", { email, password });
            alert("Login successful! Redirecting...");
            // window.location.href = "dashboard.html";
        }
    });

    // Register form validation
    $("#registerForm").submit(function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate first name
        const firstName = $("#firstName").val().trim();
        if (!firstName) {
            showError("#firstName", "First name is required");
            isValid = false;
        } else {
            clearError("#firstName");
        }

        // Validate last name
        const lastName = $("#lastName").val().trim();
        if (!lastName) {
            showError("#lastName", "Last name is required");
            isValid = false;
        } else {
            clearError("#lastName");
        }

        // Validate email
        const email = $("#registerEmail").val().trim();
        if (!email) {
            showError("#registerEmail", "Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("#registerEmail", "Please enter a valid email");
            isValid = false;
        } else {
            clearError("#registerEmail");
        }

        // Validate phone
        const phone = $("#phone").val().trim();
        if (!phone) {
            showError("#phone", "Phone number is required");
            isValid = false;
        } else if (!validatePhone(phone)) {
            showError("#phone", "Please enter a valid phone number");
            isValid = false;
        } else {
            clearError("#phone");
        }

        // Validate date of birth
        const dob = $("#dob").val().trim();
        if (!dob) {
            showError("#dob", "Date of birth is required");
            isValid = false;
        } else {
            clearError("#dob");
        }

        // Validate password
        const password = $("#registerPassword").val().trim();
        if (!password) {
            showError("#registerPassword", "Password is required");
            isValid = false;
        } else if (password.length < 8) {
            showError("#registerPassword", "Password must be at least 8 characters");
            isValid = false;
        } else if (!/[A-Z]/.test(password)) {
            showError("#registerPassword", "Password must contain at least one uppercase letter");
            isValid = false;
        } else if (!/[0-9]/.test(password)) {
            showError("#registerPassword", "Password must contain at least one number");
            isValid = false;
        } else {
            clearError("#registerPassword");
        }

        // Validate confirm password
        const confirmPassword = $("#confirmPassword").val().trim();
        if (!confirmPassword) {
            showError("#confirmPassword", "Please confirm your password");
            isValid = false;
        } else if (password !== confirmPassword) {
            showError("#confirmPassword", "Passwords do not match");
            isValid = false;
        } else {
            clearError("#confirmPassword");
        }

        // Validate terms checkbox
        if (!$("#acceptTerms").is(":checked")) {
            showError(".terms .error-message", "You must accept the terms and conditions");
            isValid = false;
        } else {
            clearError(".terms .error-message");
        }

        if (isValid) {
            // Simulate registration request
            const userData = {
                firstName,
                lastName,
                email,
                phone,
                dob,
                password
            };
            console.log("Registration data:", userData);
            alert("Registration successful! Please login.");
            $("#registerForm").hide();
            $("#loginForm").show();
            $("#registerForm")[0].reset();
        }
    });

    // Helper functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10,15}$/;
        return re.test(phone);
    }

    function showError(selector, message) {
        $(selector).nextAll(".error-message").first().text(message);
        $(selector).css("border-color", "#e74c3c");
    }

    function clearError(selector) {
        $(selector).nextAll(".error-message").first().text("");
        $(selector).css("border-color", "#ddd");
    }
});