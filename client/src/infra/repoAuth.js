export const BASE_API = "http://localhost:3000/"

export function buildRequestParams (method, body)
{
    return (
        {
            method: method ?? "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body : JSON.stringify(body) ?? null,
        }
    )
}

export async function callServer(endpoint, params)
{
    try
    {
        return fetch(`${BASE_API}${endpoint}`, params)
    } catch (error) 
    {
        console.log(error);
        return error;
    }
}