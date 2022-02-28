class Login {
  loginHandler() {
    window.location.href = "chat.html";
  }
}

document
  .getElementById("login-btn")
  .addEventListener("click", new Login().loginHandler);
