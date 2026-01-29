
const apiButtonPost = document.querySelector(".api_button");
const apiButtonGet = document.querySelector(".get_button")
const url = "http://localhost:3000/"

const user = {
    username: "logan",
    firstname: "logan",
    email: "test",
    isAdmin: false,
    points: 0,
}

const paramsPOST = 
{
    method: "POST",
    credentials: "include",
    body: JSON.stringify(user),
    headers: {
        "Content-Type": "application/json"
    }
}

const paramsGET = 
{
    method: "GET",
    credentials: "include",
}

async function callAPI(url, params)
{
    const response = await fetch(url, params);
    const data = await response.json();
    console.log(params.method, data);
    return data;
}
apiButtonPost.addEventListener("click", () => callAPI(url, paramsPOST))
apiButtonGet.addEventListener("click", () => callAPI(url, paramsGET))
