 document.getElementById("signupForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            var userId = document.getElementById("userId").value;
            var name = document.getElementById("name").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            var email = document.getElementById("email").value;

            // Perform any additional validation if needed

            // Here you can send the form data to a server for processing
            // For now, let's just log the data to the console
            console.log("User ID:", userId);
            console.log("Name:", name);
            console.log("Phone Number:", phoneNumber);
            console.log("Email ID:", email);
            loadToKeyFile(userId,name,phoneNumber,email);
            // Optionally, you can redirect the user to another page after submission
            // window.location.href = "thankyou.html";
        });

