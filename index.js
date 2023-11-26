document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    // Hide the form section
    document.querySelector(".form-section").style.display = 'none';

    // Show the thank-you section with a fade-in effect
    var thankYouSection = document.getElementById("thank-you");
    thankYouSection.style.display = "block";
    setTimeout(function() {
        thankYouSection.style.opacity = "1";
        thankYouSection.style.top = '50%';
    }, 50); // Delay the opacity change to ensure the display change takes effect
});
