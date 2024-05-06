'use strict';
const email = prompt("Enter your email:");
const password = prompt("Enter your password:");

function sendData(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() * 3 > 1 
            ? resolve("Welcome to your account") 
            : reject("Incorrect email or password");
        }, 2000);
    });
}

sendData(email, password)
    .then(response => {
        alert(response);
    })
    .catch(error => {
        alert(error);
    });

export {email, password, sendData}
