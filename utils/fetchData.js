export default async function fetchData(url,method,body,setIsLoading){
    let requestBody = null;
    switch (method) {
        case "GET":
        case "DELETE":
            requestBody = null;
            break;
        case "POST":
        case "PUT":
            requestBody = JSON.stringify(body);
            break;
    }
    try {
        setIsLoading(true);
        const request = await fetch(import.meta.env.VITE_REQUEST_URI+url,{
            method,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${document.cookie.split(";").find((item)=>item.startsWith("auth_token=")).split("=")[1]}`,
                "Cache-Control":"no"
            },
            body: requestBody
        })
        const response = await request.json();
        return response;
    } catch (error) {
        setIsLoading(false);
        console.log(error);
    }finally{
        setIsLoading(false);
    }
}