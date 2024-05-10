document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    
    // Holen der Eingaben
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Dummy-Benutzerdaten
    var validUsername = "admin";
    var validPassword = "password";
    
    // Überprüfung der Eingaben
    if (username === validUsername && password === validPassword) {
        alert("Login successful! Welcome, " + username + "!");
        window.location.replace("https://kalluunka.github.io/terminal/coffeshop/test.html");
        // Weiterleitung zum Mitgliederbereich oder andere Aktionen
    } else {
        alert("Invalid username or password. Please try again.");
    }
});


document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    
    // Create comment element
    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = "<strong>" + name + ":</strong> " + comment;
    
    // Append comment to comments section
    document.getElementById("comments").appendChild(commentElement);
    
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});
