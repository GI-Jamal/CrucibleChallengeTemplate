import Swal from 'sweetalert2';
import * as bootstrap from "bootstrap";

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function displayMessage() {
  let msg : string = document.getElementById("message").textContent;

  Swal.fire(msg);
}