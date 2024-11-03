export default async function fetchData(url,method,body,setIsLoading){
    try {
        setIsLoading(true);
        const request = await fetch(import.meta.env.VITE_REQUEST_URI+url,{
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
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