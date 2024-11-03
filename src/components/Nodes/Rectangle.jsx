/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Handle, Position } from "reactflow";

export default function Rectangle(props) {
    return (
        <div style={{ padding: 10, border: '1px solid black', borderRadius: 5 }}>
            <Handle type="target" position={Position.Top} />
            {
                props.data.component && props.data.component
            }
            <Handle type="target" position={Position.Bottom} />
            <Handle type="source" position={Position.Right} />
            <Handle type="source" position={Position.Left} />
        </div>
    )
}