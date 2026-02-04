import { loginView } from "../views/auth/loginView.js";
import { registerView } from "../views/auth/registerView.js";

const app = document.querySelector("#app");

const routes = [
    { path :"/login", mount: loginView},
    { path :"/register", mount: registerView}
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
    const match = routes.find((route) => route.path === currentPath);
    await match.mount(root);
}