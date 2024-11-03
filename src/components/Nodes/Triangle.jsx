/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Handle, Position } from "reactflow";

export default function Triangle(props) {
    return (
        <div style={{ padding: 10, border: '1px solid black', borderRadius: 5 }}>
            <Handle position={Position.Top} />
            {
                props.data.component && props.data.component
            }
            <Handle position={Position.Bottom} />
            <Handle position={Position.Right} />
            <Handle position={Position.Left} />
        </div>
    )
}