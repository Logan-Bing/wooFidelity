import { loginView } from "../../views/auth/loginView.js";

const app = document.querySelector("#app");

const routes = [
    { path :"/login", mount: loginView},
]

createApp(app, routes);

/**
 * 
 * @param {HTMLElement} root
 * @param {Array} routes
 */
async function createApp(root, routes)
{
    const currentPath = window.location.pathname;
    const match = routes.find((route) => route.path = currentPath);
    await match.mount(root);
}