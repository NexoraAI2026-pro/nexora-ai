const form = document.querySelector(".contact form");
const formMessage = document.createElement("p");

formMessage.style.marginTop = "20px";
formMessage.style.fontWeight = "600";

form.appendChild(formMessage);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent = "Merci ! Votre message a bien été pris en compte.";

    form.reset();
});