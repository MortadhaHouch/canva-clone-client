/* eslint-disable no-unused-vars */
import { useCallback } from "react";
import ReactFlow, { addEdge, Background, ConnectionLineType, ConnectionMode, Controls, MiniMap, ReactFlowProvider, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css"
import 'reactflow/dist/base.css';
import Circle from './components/Nodes/Circle';
import Triangle from './components/Nodes/Triangle';
import Trapezoid from './components/Nodes/Trapeziod';
import Rectangle from './components/Nodes/Rectangle';
import { initialEdges, initialNodes } from '../utils/constants';
import EdgeText from './components/Nodes/EdgeText';
import Parallelogram from './components/Nodes/Parallelogram';
import CustomNodeComponent from "../Nodes/CustomNode";
const customNodeTypes = {
    circle:Circle,
    triangle:Triangle,
    trapezoid:Trapezoid,
    rectangle:Rectangle,
    parallelogram:Parallelogram,
    custom:CustomNodeComponent
};
export default function ReactFlowRenderer() {
    let [nodes,setNodes,setNodeChange] = useNodesState(initialNodes);
    let [edges,setEdges,setEdgeChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)),[setEdges]);
    return (
        <ReactFlowProvider>
            <ReactFlow 
                connectionLineType={ConnectionLineType.Straight}
                connectionMode={ConnectionMode.Strict}
                connectionLineContainerStyle={{stroke:"red"}}
                connectionRadius={20}
                autoPanOnConnect
                nodesConnectable
                nodes={nodes} 
                onNodesChange={setNodeChange} 
                onEdgesChange={setEdgeChange} 
                onNodeClick={null}
                onEdgeClick={null}
                edges={edges} 
                fitView 
                onConnect={onConnect} 
                elementsSelectable={true} 
                zoomOnScroll={false} panOnScroll={true} 
                zoomOnDoubleClick={false} 
                panOnDrag={true}
                nodeTypes={customNodeTypes}
                edgeTypes={EdgeText}
                nodesDraggable
                nodesFocusable
                zoomOnPinch
                elevateEdgesOnSelect
                edgesFocusable
                edgesUpdatable
                elevateNodesOnSelect
                snapToGrid={true}
                multiSelectionKeyCode={"a"}
                deleteKeyCode={"d"}
                selectionKeyCode={"s"}
                >
                <MiniMap pannable zoomable position="top-right"/>
                <Controls position="top-right"/>
                <Background variant="squares" color='#aaa' gap={20}/>
            </ReactFlow>
            </ReactFlowProvider>
    )
}
