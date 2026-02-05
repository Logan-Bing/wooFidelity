import { buildRequestParams, callServer } from "../../infra/repoAuth.js";

/**
 * 
 * @param {HTMLElement} root 
 */
export default async function registerView(root)
{
    root.innerHTML = 
    `
    <form class="register-form" method="POST">
        <label>firstName</label>
        <input class="first-name-input"></input>
        <label>Email</label>
        <input class="email-input"></input>
        <label>Password</label>
        <input type="password" class="password-input"></input>
        <button type="submit">Login</button>
    </form>
    `

    const registerForm = root.querySelector(".register-form");
    registerForm.addEventListener("submit", async (e) => {
       e.preventDefault();

       const firstName = root.querySelector(".first-name-input").value;
       const email = root.querySelector(".email-input").value;
       const password = root.querySelector(".password-input").value;

       const payload = { firstName, email, password }
       const params = buildRequestParams("POST", payload);

       const response = await callServer("register", params);
       if (!response.ok)
       {
           
       }
       window.location.replace("http://localhost:5173/home");
    })
}