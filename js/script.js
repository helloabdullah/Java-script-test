let usersEmail = [];
let userPassword = [];

let email;
let password;

function registration() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    if (!email || !password) {
        alert("Enter both Email and Password");
        return;
    }
    
    let emailIndex = usersEmail.indexOf(email);
    if (emailIndex !== -1) {
        alert("Your Email is already Registered");
        return;
    }
    
    usersEmail.push(email);
    userPassword.push(password);
        
    localStorage.setItem("usersEmail", JSON.stringify(usersEmail));
    localStorage.setItem("userPassword", JSON.stringify(userPassword));
    
    console.log("Registered Email:", email);
    console.log("Registered Password:", password);
}

const loginCheck = () => {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    usersEmail = JSON.parse(localStorage.getItem("usersEmail")) || [];
    userPassword = JSON.parse(localStorage.getItem("userPassword")) || [];
    
    let emailIndex = usersEmail.indexOf(email);
    
    if (emailIndex !== -1 && userPassword[emailIndex] === password) {
        alert("You are successfully logged in");
    } else {
        alert("Incorrect Email or Password. Please try again or Register first.");
    }
};