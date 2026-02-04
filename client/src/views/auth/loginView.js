import { BASE_API, callAPI } from "../../infra/repoAuth.js";

/**
 * 
 * @param {HTMLElement} root 
 */
export async function loginView (root)
{
    root.innerHTML = 
        `
            <form class="login-form" method="POST">
            <label>Email</label>
            <input class="email-data"></input>
            <label>Password</label>
            <input type="password"></input>
            <button type="submit">Login</button>
            </form>
        `

    const loginForm = root.querySelector(".login-form");
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const emailData = root.querySelector(".email-data");
        console.log(emailData.value)

        const data = await callAPI(BASE_API);
        console.log(data);
    });

}
