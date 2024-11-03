import { MarkerType } from "reactflow"

let initialEdges =[
    { 
        id: 'n1-1', 
        source:"1",
        target:"5",
        markerEnd:{
            type:MarkerType.ArrowClosed
        }
    },
    { 
        id: 'n1-2', 
        source:"2",
        target:"10",
        markerEnd:{
            type:MarkerType.ArrowClosed
        }
    },
    { 
        id: 'n1-3', 
        source:"3",
        target:"15",
        markerEnd:{
            type:MarkerType.ArrowClosed
        }
    },
    { 
        id: 'n1-4', 
        source:"4",
        target:"10",
        markerEnd:{
            type:MarkerType.ArrowClosed
        }
    }
]
let initialNodes =[
    { id: 'n1-1', position:{x:100, y:100},data:{label:"a",component:<span>click me</span>},type:"circle"},
    { id: 'n1-2', position:{x:200, y:200},data:{label:"b",component:<span>click me</span>},type:"rectangle"},
    { id: 'n1-3', position:{x:300, y:300},data:{label:"c",component:<span>click me</span>},type:"triangle"},
    { id: 'n1-4', position:{x:400, y:400},data:{label:"d",component:<span>click me</span>},type:"trapezoid"},
]
export {initialEdges,initialNodes}