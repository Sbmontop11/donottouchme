let username = "Blankyiscool"
let password = "Pixeliscool"

document.getElementById("submitbtn").onclick = function(event){
    event.preventDefault();
    let usernameInput = document.getElementById("usernameinpt").value; 
    let passwordInput = document.getElementById("passwordinpt").value; 


if (usernameInput === username && passwordInput === password){
    window.location.replace("proxo.html");
}

else {

    alert("Incorrect username or password"); 
}
};
































