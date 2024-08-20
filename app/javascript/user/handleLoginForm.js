function handleLoginForm() {
    const form = document.querySelector(".login__form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("form submitted");
    
        const email = form.querySelector("input[type='email']").value;
        const password = form.querySelector(".input[type='password']").value;

        const data = {
            email,
            password    
        };
    });
}

export default handleLoginForm;