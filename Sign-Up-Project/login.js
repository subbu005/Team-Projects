document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values .
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    // Perform password validation
    // For demonstration purposes, let's assume password should be at least 6 characters long
    if (password.length < 6) {
        alert("Wrong password! Please enter a valid password.");
        return; // Exit function early if password is invalid
    }

    // Perform login process
    // Here you can send the form data to a server for authentication
    // For now, let's just log the user ID to the console
    console.log("User ID:", userId);
    console.log("Password:", password);
    let cond = checkInfo(userId,password);
    if(cond){
        alert("You are verfied user \nWelcome to Webssite");
    }else{
        alert("Error invalid UserId or Password\nYfffffou dont have an account \nDo signup");
    }
    // Optionally, you can redirect the user to another page after successful login
    // window.location.href = "dashboard.html";
});

function checkInfo(usid, pswd){
    let cond = false;
        
    return cond ;
}