/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Handle, Position } from "reactflow";

export default function Circle(props) {
    return (
        <div style={{ padding: 10, border: '1px solid black', borderRadius: "50%"}}>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Right} />
            {
                props.data.component && props.data.component
            }
            <Handle type="source" position={Position.Left} />
            <Handle type="target" position={Position.Bottom} />
        </div>
    )
}
