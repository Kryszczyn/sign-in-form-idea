const email = document.querySelector("input[type=email]"),
password = document.querySelector("input[type=password]"),
checkbox = document.querySelector("input[type=checkbox]"),
submitBtn = document.querySelector(".submit-btn-container button"),
mediaBtns = document.querySelectorAll(".media-container");

function validateEmail(email) 
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(pwd)
{
    if(pwd.value.length >= 6) return true;
    return false;
}

let emailLabel = document.querySelector("label[for=email]")
email.addEventListener("input", () => {
    if(validateEmail(email.value)){
        emailLabel.style.color = "green";
    }
    else{
        emailLabel.style.color = "#DBE3E9";
    }
})

let passwordLabel = document.querySelector("label[for=password]")
password.addEventListener("input", () => {
    if(validatePassword(password)){
        passwordLabel.style.color = "green";
    }
    else{
        passwordLabel.style.color = "#DBE3E9";
    }
})

mediaBtns.forEach(button => {
    button.addEventListener("click", () => {
        let attr = button.getAttribute("data-href");
        window.open(attr, "_blank");
    })
})