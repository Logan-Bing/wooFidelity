import { buildRequestParams, callServer, } from "../../infra/repoAuth.js";
import { buildFormComponent } from "../../ui/components/formUI.js";

/**
 * 
 * @param {HTMLElement} root 
 */
export default async function loginView (root)
{
    const form = buildFormComponent(
    [
        {label: "Email", input: {name: "email", type: "email", autocomplete: "given-email", required: "true"}},
        {label: "Password", input: {name: "password", type: "password", required: "true"}},
    ],
        {text: "Login"}
    )

    root.appendChild(form);

    const loginForm = root.querySelector("#form");
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = root.querySelector(".input-email").value;
        const password = root.querySelector(".input-password").value;

        const payload = { email, password};
        const params = buildRequestParams("POST", payload);

        const response = await callServer("login", params);
        if (!response.ok)
        {
            const error = await response.json();
            if (error.message === "INVALID_USER")
                console.log("Erreur de connexion mail ou mdp incorrect");
            return;
        }
        const {user} = await response.json();
        if (!user.isAdmin)
            window.location.replace(`${window.location.origin}/user`);
        else
            window.location.replace(`${window.location.origin}/admin`);
    });
}
