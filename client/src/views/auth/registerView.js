import { callAPI, BASE_API } from "../../infra/repoAuth.js";

/**
 * 
 * @param {HTMLElement} root 
 */
export async function registerView(root)
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

       const payload =
       {
            firstName,
            email,
            password
       }

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
            const response = await callAPI(`${BASE_API}register`, params);
            console.log(response);
       } 
       catch (error) 
       {
            console.log(error);
       }
    })
}