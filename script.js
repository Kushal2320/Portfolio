document.getElementById("year").textContent = new Date().getFullYear();

// Open Modal
document.querySelectorAll("[data-modal]").forEach(btn => {
  btn.onclick = () => {
    document.getElementById(btn.dataset.modal).classList.add("open");
  };
});

// Close Modal
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

// Contact Form Simulation
function submitForm(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";

  setTimeout(() => {
    status.textContent = "Message sent!";
    e.target.reset();
  }, 700);
}
