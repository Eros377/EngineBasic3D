export const CANVAS = document.getElementById("canvas");
export const CTX = CANVAS.getContext("2d");
CANVAS.width = document.body.clientWidth;
CANVAS.height = document.body.clientHeight;
CTX.fillStyle = "black";
CTX.strokeStyle = "white";
CTX.lineCap = "round";