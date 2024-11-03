import {fabric} from "fabric";
import deleteIcon from "../src/assets/download-removebg-preview.png";
var img = document.createElement('img');
img.src = deleteIcon;
function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
}
function renderIcon(ctx, left, top, styleOverride, fabricObject){
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
}
let fonts = ["Andale Mono","Arial","Arial Bold","Arial Italic","Arial Bold Italic","Arial Black","Comic Sans MS","Comic Sans MS Bold","Courier New","Courier New Bold","Courier New Italic","Courier New Bold Italic","Georgia","Georgia Bold","Georgia Italic","Georgia Bold Italic","Impact","Lucida Console","Lucida Sans Unicode","Marlett","Minion Web","Symbol","Times New Roman","Times New Roman Bold","Times New Roman Italic","Times New Roman Bold Italic","Tahoma","Trebuchet MS","Trebuchet MS Bold","Trebuchet MS Italic","Trebuchet MS Bold Italic","Verdana","Verdana Bold","Verdana Italic","Verdana Bold Italic","Webdings"]
let fontStyles = [
    "italic",
    "oblique",
    "normal"
];
let fontWeight = [
    "bold",
    "bolder",
    "light",
    "lighter",
    "normal",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
]
let strokeDasharray = [
    [5,5,5,5],
    [10,10,10,10],
    [15,15,15,15],
    [20,20,20,20],
    [25,25,25,25],
    [30,30,30,30],
    [35,35,35,35],
];
let degrees = [
    0,45,90,135,180,225,270,315,360
]
let strokeWidth = [
    1,2,3,4,5,6,7,8,9,10,15,20,25,30
]
export {deleteObject,renderIcon,fonts,fontStyles,fontWeight,strokeDasharray,degrees,strokeWidth}