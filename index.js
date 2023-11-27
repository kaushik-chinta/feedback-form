const emojis = document.querySelectorAll('.emojis');

emojis.forEach(emoji => { 
    emoji.addEventListener('click', () => {
        emojis.forEach(emoji => emoji.classList.remove('active'));
        emoji.classList.add('active');
    });
});

document.getElementById("feedback-form").addEventListener("submit", (event)  => {
    event.preventDefault();
    document.querySelector("#feedback-form").classList.add("hidden");
    document.getElementById("thank-you").classList.add("visible");
});
