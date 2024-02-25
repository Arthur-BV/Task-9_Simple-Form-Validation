const validateEmail = function (email) {
    email = document.getElementById(email).value;

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        alert("Please enter an email address");
    } else {
        console.log(email);
    }
};
