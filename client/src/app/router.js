import loginView from "../views/auth/loginView.js";
import registerView from "../views/auth/registerView.js";
import homeView from "../views/home.js";

const app = document.querySelector("#app");

const routes = [
    { path :"/login", mount: loginView},
    { path :"/register", mount: registerView},
    { path :"/home", mount: homeView}
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