var link = document.querySelector(".address-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var btnForm = popup.querySelector(".button-form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

btnForm.addEventListener("click", function(evt) {
    if (!name.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } 
  });