import { buildRequestParams, callServer, } from "../../infra/repoAuth.js";

/**
 * 
 * @param {HTMLElement} root 
 */
export default async function loginView (root)
{
    root.innerHTML = 
        `
            <form class="login-form" method="POST">
            <label>Email</label>
            <input class="email-input"></input>
            <label>Password</label>
            <input type="password" class="password-input"></input>
            <button type="submit">Login</button>
            </form>
        `

    const loginForm = root.querySelector(".login-form");
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = root.querySelector(".email-input").value;
        const password = root.querySelector(".password-input").value;

        const payload = { email, password}
        const params = buildRequestParams("POST", payload);

        const response = await callServer("login", params);
        if (!response.ok)
        {
            if (response.Error.cause === "INVALID_EMAIL")
                console.log("email invalide"); // change ui
            if (response.Error.cause === "INVALID_PASSWORD")
                console.log("password invalide")
        }
        await response.json();
        window.location.replace("http://localhost:5173/home");
    });

}
