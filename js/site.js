const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

var previouslyClickedElement = null;

function displayMessage() {
  let msg = document.getElementById("message").value;
  //alert(msg);

  Swal.fire({
    backdrop: false,
    title: "App Name",
    text: msg,
  });
}

// function navTogglerClicker(navToggler)
// {
//   let togglerType = navToggler;
//   let toggler = navToggler
//   if (toggler )
// }