"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sweetalert2_1 = require("sweetalert2");
const bootstrap = require("bootstrap");
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
function displayMessage() {
    let msg = document.getElementById("message").textContent;
    sweetalert2_1.default.fire(msg);
}
//# sourceMappingURL=site.js.map