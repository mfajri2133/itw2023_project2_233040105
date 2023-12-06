// Navbar
const toggleBtn = document.querySelector(".toggle");
const toggleBtnIcon = document.querySelector(".toggle i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
     dropdownMenu.classList.toggle("open");
     const isOpen = dropdownMenu.classList.contains("open");

     toggleBtnIcon.className = isOpen
          ? "fas fa-xmark"
          : "fas fa-bars-staggered";
};

document.addEventListener("DOMContentLoaded", function () {
     const checkboxes = document.querySelectorAll(
          '.accordion input[type="checkbox"]'
     );

     checkboxes.forEach((checkbox) => {
          checkbox.addEventListener("change", function () {
               checkboxes.forEach((otherCheckbox) => {
                    if (otherCheckbox !== checkbox) {
                         otherCheckbox.checked = false;
                    }
               });
          });
     });
});

// Button back to top
const btn = document.querySelector("#button");

window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
          btn.classList.add("show");
     } else {
          btn.classList.remove("show");
     }
});

btn.addEventListener("click", (e) => {
     e.preventDefault();
     window.scrollTo({
          top: 0,
          behavior: "smooth",
     });
});

function sendMessage() {
     var name = document.getElementById("name").value;
     var msg = document.getElementById("message").value;

     var whatsappUrl =
          "https://wa.me/628170270073" +
          "?text=" +
          encodeURIComponent("Halo Dhiya Motor 67, Saya " + name + ", " + msg);

     window.open(whatsappUrl);
}
