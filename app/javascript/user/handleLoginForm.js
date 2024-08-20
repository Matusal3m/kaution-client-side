import { createUser } from "./fetchUser";

function handleLoginForm() {
  const form = document.querySelector(".login__form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");

    const email = form.querySelector("input[type='email']");
    const password = form.querySelector("input[type='password']");

    const userData = {
      name: email.value.split("@")[0],
      email: email.value,
      password: password.value,
    };

    createUser(userData).then((user) => {
      if(user) {
        window.location.href = "/home";
      }
    });

  });
}

export default handleLoginForm;
