export default function fileReading(file){
    return new Promise((res,rej)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
            res(fileReader.result);
        }
        fileReader.onerror = ()=>{
            rej(fileReader.error);
        }
    })
}