import { AiOutlineCloudUpload } from "react-icons/ai";
import fileReading from "../../../utils/fileReading";
export default function FileUpload({setAvatar,multiple,setFiles}){
    return (
        <div 
            style={{width:"100px",height:"100px",position:"relative"}}
            className="d-flex flex-row justify-content-center align-items-center"
        >
            <input
                style={{cursor:"pointer"}}
                type="file" 
                name="file" 
                id="file"
                className="w-100 h-100 position-absolute opacity-0"
                multiple={multiple}
                onChange={async(e)=>{
                    try {
                        if(multiple){
                            const filesArray = [];
                            for await (const item of e.target.files){
                                const file = await fileReading(item);
                                if(file){
                                    filesArray.push(file);
                                }
                            }
                            setFiles(filesArray);
                        }else {
                            const avatar = await fileReading(e.target.files[0]);
                            if(avatar){
                                setAvatar(avatar);
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}
            />
            <AiOutlineCloudUpload width={100} height={100} style={{pointerEvents:"none"}} className="position-absolute top-0 w-100 h-100"/>
        </div>
    )
}
