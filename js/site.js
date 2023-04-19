const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function displayMessage() {
  let msg = document.getElementById("message").value;
  //alert(msg);

  Swal.fire({
    backdrop: false,
    title: "App Name",
    text: msg,
  });
}

function toggleGlow() {
  let navbar = document.querySelector(".navbar-collapse");
  let toggler = document.querySelector(".navbar-toggler");
  if (navbar.classList.contains("show")) {
    toggler.focus();
  } else {
    toggler.blur();
  }
}
