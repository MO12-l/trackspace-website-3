const button = document.querySelector("#start-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "You’re ready to get started.";
});