document.getElementById("helloBtn").addEventListener("click", function() {
    alert("Hello!");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert("Logged in successfully!");
    } else {
        alert("Please fill in both fields.");
    }
});
