/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import {BsArrowLeft,BsArrowRight,BsPencilFill,BsSquareFill,BsCircleFill,BsTriangleFill, BsEraser, BsCursor } from "react-icons/bs";
import EditedSquare from "../shapes/EditedSquare";
import Polygon from "../shapes/Polygon";
import Star from "../shapes/Star";
import TextShape from "../shapes/TextShape";
import Line from "../shapes/Line";
import {fabric} from "fabric"
import UndoArrow from "../shapes/UndoArrow";
function ToolBar(props,ref) {
    let [isShown,setIsShown] = useState(false);
    function makeAction(type){
        let shape = null;
        switch(type){
            case "line":
                shape = new fabric.Line([50, 50, 200, 200],{
                    stroke:"black",
                    fill:"black",
                    top:100,
                    left:100
                })
                ref.current.isDrawingMode = false;
                break;
            case "circle":
                shape = new fabric.Circle({
                    radius:50,
                    top:100,
                    left:100,
                    fill:"black",
                })
                ref.current.isDrawingMode = false;
                break;
            case "square":
                shape = new fabric.Rect({
                    width:50,
                    height:50,
                    top:100,
                    left:100,
                    fill:"black",
                })
                ref.current.isDrawingMode = false;
                break;
            case "polygon":
                shape = new fabric.Polygon([
                    { x: 200, y: 10 },
                    { x: 250, y: 50 },
                    { x: 200, y: 100 },
                    { x: 150, y: 50 }
                ],{
                    fill:"black",
                    top:100,
                    left:100
                })
                ref.current.isDrawingMode = false;
                break;
            case "triangle":
                shape = new fabric.Triangle({
                    width:100,
                    height:100,
                    top:100,
                    left:100,
                    fill:"black"
                })
                ref.current.isDrawingMode = false;
                break;
            case "text":
                shape = new fabric.IText("text box",{
                    textBackgroundColor:"black",
                    editingBorderColor:"red",
                    top:100,
                    left:100
                })
                ref.current.isDrawingMode = false;
                break;
            case "select":
                props.setIsDrawingEnabled(false);
                break;
            case "erase":
                ref.current.freeDrawingBrush = new fabric.EraserBrush(ref.fabricCanvasRef);
                ref.current.freeDrawingBrush.width = 10;
                ref.current.isDrawingMode = true;
                break;
            case "undo":
                ref.current.freeDrawingBrush = new fabric.EraserBrush(ref.fabricCanvasRef);
                ref.current.freeDrawingBrush.width = 10;
                ref.current.freeDrawingBrush.inverted = true;
                ref.current.isDrawingMode = true;
                break;
            case "spray":
                ref.current.freeDrawingBrush = new fabric.SprayBrush(ref.fabricCanvasRef);
                ref.current.freeDrawingBrush.width = 35;
                ref.current.isDrawingMode = true;
                break;
            default:
                break;
        }
        props.setShapes((prev)=>[...prev, shape]);
        ref.current.add(shape);
        ref.current.renderAll();
    }
    return (
        <aside className={`aside ${isShown?"shown":"hidden"}`}>
            <button className="btn btn-info aside-toggle" onClick={()=>setIsShown(!isShown)}>
                {
                    isShown?(
                        <BsArrowLeft/>
                    ):(
                        <BsArrowRight/>
                    )
                }
            </button>
            <div>
                <div>
                    <button className="btn btn-info" title="square" onClick={()=>{
                        makeAction("square");
                    }}>
                        <BsSquareFill/>
                    </button>
                    <button className="btn btn-info" title="circle" onClick={()=>{
                        makeAction("circle");
                    }}>
                        <BsCircleFill/>
                    </button>
                    <button className="btn btn-info" title="triangle" onClick={()=>{
                        makeAction("triangle")
                    }}>
                        <BsTriangleFill/>
                    </button>
                    <button className="btn btn-info" title="rounded square" onClick={()=>{
                        makeAction("square");
                    }}>
                        <EditedSquare/>
                    </button>
                    <button className="btn btn-info" title="star" onClick={()=>{
                        makeAction("star");
                    }}>
                        <Star/>
                    </button>
                    <button className="btn btn-info" title="polygon" onClick={()=>{
                        makeAction("polygon")
                    }}>
                        <Polygon/>
                    </button>
                    <button className="btn btn-info" title="text box" onClick={()=>{
                        makeAction("text")
                    }}>
                        <TextShape/>
                    </button>
                    <button className="btn btn-info" title="line" onClick={()=>{
                        makeAction("line")
                    }}>
                        <Line/>
                    </button>
                </div>
                <div>
                    <button className="btn btn-info" title="select items">
                        <BsCursor/>
                    </button>
                    <button className="btn btn-info" title={`${props.isDrawingEnabled?"enable drawing":"disable drawing"}`} onClick={()=>{
                        props.setIsDrawingEnabled(!props.isDrawingEnabled);
                    }}>
                        <BsPencilFill/>
                    </button>
                    
                    <button className="btn btn-info" title="erase" onClick={()=>{

                    }}>
                        <BsEraser />
                    </button>
                    <button className="btn btn-info" title="undo">
                        <UndoArrow/>
                    </button>
                </div>
            </div>
        </aside>
    )
}
export default React.forwardRef(ToolBar);