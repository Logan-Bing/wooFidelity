import loginView from "../views/auth/loginView.js";
import registerView from "../views/auth/registerView.js";
import userView from "../views/home.js";
import "../style.css";

const app = document.querySelector("#app");

const routes = [
  { path: "/login", mount: loginView },
  { path: "/register", mount: registerView },
  { path: "/user", mount: userView }
]

createApp(app, routes);

/**
 * 
 * @param {HTMLElement} root
 * @param {Array} routes
 */
async function createApp(root, routes) {
  const currentPath = window.location.pathname;
  const match = routes.find((route) => route.path === currentPath);
  await match.mount(root);
}
