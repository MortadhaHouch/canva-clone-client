/* eslint-disable no-unused-vars */
import {fabric} from "fabric"
import React, { useEffect, useRef, useState } from "react"
import ToolBar from "../LayoutComponents/ToolBar";
import { deleteObject, renderIcon } from "../../../utils/fabricUtils";
import EditBar from "../LayoutComponents/EditBar";
export default function FabricRenderer() {
    let canvasRef = useRef(null);
    let fabricCanvasRef = useRef(null);
    let [isDrawingEnabled,setIsDrawingEnabled] = useState(false);
    let [shapes,setShapes] = useState([]);
    let [selectedItems,setSelectedItems] = useState([]);
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = 'blue';
    fabric.Object.prototype.cornerStyle = 'circle';
    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: -0.5,
        y: -0.5,
        offsetY: 16,
        cursorStyle: 'pointer',
        mouseUpHandler: deleteObject,
        render: renderIcon,
        cornerSize: 24
    });
    useEffect(()=>{
        let fabricCanvas = new fabric.Canvas(canvasRef.current,{
            backgroundColor:"#aaa",
            isDrawingMode:isDrawingEnabled,
            stopContextMenu:true,
            moveCursor:"grabbing",
            hoverCursor:"grab",
        })
        fabricCanvasRef.current = fabricCanvas;
        fabric.Object.prototype.objectCaching = true;
        fabricCanvas.on('path:created', function(opt){
            fabricCanvas.remove(opt.path);
        })
    },[isDrawingEnabled])
    return (
        <section className="drawing-section">
            <EditBar selectedItems={selectedItems} setSelectedItems={setSelectedItems} ref={fabricCanvasRef}/>
            <ToolBar isDrawingEnabled={isDrawingEnabled} setIsDrawingEnabled = {setIsDrawingEnabled} shapes={shapes} setShapes={setShapes} ref={fabricCanvasRef}/>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        </section>
    )
}