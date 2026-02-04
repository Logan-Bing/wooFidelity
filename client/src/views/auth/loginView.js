import { callServer } from "../../infra/repoAuth.js";

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

        const params = 
        {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        }

        try 
        {
            const response = await callServer("login", params);
            console.log(response);
        } 
        catch (error) 
        {
            console.log(error);
        }
    });

}
