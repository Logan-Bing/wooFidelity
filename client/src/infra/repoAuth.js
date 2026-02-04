export const BASE_API = "http://localhost:3000/"

export async function callServer(endpoint, params)
{
    try
    {
        const response = await fetch(`${BASE_API}${endpoint}`, params);
        const data = await response.json();
        return data;
    } catch (error) 
    {
        console.log(error);
        return error;
    }
}