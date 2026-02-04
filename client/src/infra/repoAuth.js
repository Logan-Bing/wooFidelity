export const BASE_API = "http://localhost:3000/"

export async function callAPI(url, params)
{
    try 
    {
        const response = await fetch(url, params);
        const data = await response.json();
        return data;
    } catch (error) 
    {
        console.log(error);
        return error;
    }
}