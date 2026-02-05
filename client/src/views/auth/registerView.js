import { buildRequestParams, callServer } from "../../infra/repoAuth.js";
import { buildFormComponent } from "../../ui/components/formUI.js";

/**
 * 
 * @param {HTMLElement} root 
 */
export default async function registerView(root)
{
    const form = buildFormComponent(
    [
        {label: "Firstname", input: {name: "firstname", type: "firstname", autocomplete: "given-name", required: "true"}},
        {label: "Email", input: {name: "email", type: "email", autocomplete: "on", required: "true"}},
        {label: "Password", input: {name: "password", type: "password", required: "true"}},
    ],
        {text: "Register"}
    )

    root.appendChild(form);

    const registerForm = root.querySelector("#form");
    registerForm.addEventListener("submit", async (e) => {
       e.preventDefault();

       const firstName = root.querySelector(".input-firstname").value;
       const email = root.querySelector(".input-email").value;
       const password = root.querySelector(".input-password").value;

       const payload = { firstName, email, password }
       const params = buildRequestParams("POST", payload);

       const response = await callServer("register", params);
       if (!response.ok)
       {
            const error = await response.json();
            if (error.message === "DATABASE_ERROR")
                console.log("Email deja pris");
       }
       else
       {
            window.location.replace(`${window.location.origin}/user`);
       }
    })
}