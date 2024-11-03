/* eslint-disable react/prop-types */
export default function Line(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 83.49 2" width={props.width?props.width:15} height={props.height?props.height:15}>
            <g id="Layer_1-2" data-name="Layer 1">
                <line strokeDasharray={props.strokeDasharray && props.strokeDasharray} stroke={props.color ? props.color:"black"} fill="transparent" strokeWidth={props.strokeWidth?props.strokeWidth:5} className="cls-1" y1="1" x2="83.49" y2="1"/>
            </g>
        </svg>
    )
}
