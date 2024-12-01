import { plano, triangulo, piramide, cubo, cilindro } from './modelos.js';
import { CANVAS, CTX } from './canvas.js';
const FPS = document.getElementById("FPS");
let timeDelta, timeLast, fps = 0;

triangulo.ubicacion(-200, 50, 0)
plano.ubicacion(-50, 0, 0)
piramide.ubicacion(100, 50, 0)
cubo.ubicacion(250, -50, 0)
cilindro.ubicacion(-300, 0, 0);
requestAnimationFrame(loop);
export function loop(timeNow) {
    timeDelta = timeNow - timeLast
    timeLast = timeNow;
    fps = 1000 / timeDelta;
    CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);

    triangulo.dibujar(CTX);
    plano.dibujar(CTX);
    piramide.dibujar(CTX);
    cubo.dibujar(CTX);
    cilindro.dibujar(CTX);
    cilindro.rotarX(0.1);

    FPS.innerHTML = "FPS: " + fps.toFixed(0)
    requestAnimationFrame(loop);
}

