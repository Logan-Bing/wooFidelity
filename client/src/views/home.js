import { buildRequestParams, callServer } from "../infra/repoAuth";

/**
 * 
 * @param {HTMLElement} root 
 */
export default function homeView(root)
{
    root.innerHTML = 
    `
        <div>Hello world</div>
        <button class="btn">GET user session</button>
    `

    const btn = root.querySelector(".btn");
    btn.addEventListener("click", async () => {
        const params = buildRequestParams();
        const response = await callServer("home", params);
        const data = await response.json();
        console.log(data);
    })
}