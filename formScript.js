//Exchange access between forms.
document.addEventListener("DOMContentLoaded", function () {
    const formOpenBtn = document.getElementById("signup"),
          formCloseBtn = document.querySelector(".form_close"),
          loginBtn = document.getElementById("login"),
          signupForm = document.querySelector(".signup_form"),
          loginForm = document.querySelector(".login_form");

    formOpenBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    formCloseBtn.addEventListener("click", function () {
        signupForm.style.display = "none";
        loginForm.style.display = "none";
    });
});

//Swap icons to display the password.

document.addEventListener("DOMContentLoaded", function () {
    const pwShowHide = document.querySelectorAll(".pw_hide");

    pwShowHide.forEach(icon => {
        icon.addEventListener("click", () => {
            let getPwInput = icon.previousElementSibling;

            if (getPwInput.type === "password") {
                getPwInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                getPwInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    });
});

//Validation system.

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector('.signup_form form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
        const email = document.querySelector('.signup_form input[type="email"]');
        const username = document.querySelector('.signup_form input[type="text"]');
        const password = document.querySelectorAll('.signup_form input[type="password"]')[0];
        const password2 = document.querySelectorAll('.signup_form input[type="password"]')[1];

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters');
        } else {
            setSuccess(password);
        }

        if (password2Value === '') {
            setError(password2, 'Please confirm your password');
        } else if (password2Value !== passwordValue) {
            setError(password2, "Passwords don't match");
        } else {
            setSuccess(password2);
        }
    };
});
