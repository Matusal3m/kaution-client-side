const host = "http://localhost:3000";

async function createUser({ name, email, password }) {
  try {
    const response = await fetch(`${host}/user/user-create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

async function login({ email, senha }) {
  try {
    const response = await fetch(`${host}/user/user-login`, {
      method: "POST ",
      body: JSON.stringify({
        email,
        senha,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();

    return data;
  } catch (error) {
    console.error("Error logging user:", error);
  }
}

async function verifyEmail({ email, code }) {
  try {
    const response = await fetch(`${host}/user/verify`, {
      method: "POST",
      body: JSON.stringify({
        email,
        code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.ok;
  } catch (error) {
    console.error("Error verifying user email:", error);
  }
}

async function resendCode({ email }) {
  try {
    const response = await fetch(`${host}/user/verify`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.ok;
  } catch (error) {
    console.error("Error resending code to user:", error);
  }
}

export { createUser, login, verifyEmail, resendCode };
