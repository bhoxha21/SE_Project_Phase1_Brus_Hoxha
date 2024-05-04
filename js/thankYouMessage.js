document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the email input value
    var email = document.getElementsByName("email")[0].value;
    
    document.getElementById("thankYouMessage").style.display = "block";
});
