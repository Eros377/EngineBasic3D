import { gradosARadianes } from './camara.js';
import { aplicarCamara} from './camara.js';
export class Modelo {
    constructor(vertices, aristas, color = "white") {
        this.vertices = vertices;
        this.aristas = aristas;
        this.color = color;
    }
    ubicacion(uX, uY, uZ) {
        this.vertices = this.vertices.map(vertice => ({
            x: vertice.x + uX,
            y: vertice.y + uY,
            z: vertice.z + uZ,
        }));
    }
    rotarX(grados) {
        let radianes = gradosARadianes(grados);
        let cosTheta = Math.cos(radianes);
        let sinTheta = Math.sin(radianes);

        this.vertices = this.vertices.map(vertice => ({
            x: vertice.x,
            y: vertice.y * cosTheta - vertice.z * sinTheta,
            z: vertice.y * sinTheta + vertice.z * cosTheta,
        }));
    }
    rotarY(grados) {
        let radianes = gradosARadianes(grados);
        let cosTheta = Math.cos(radianes);
        let sinTheta = Math.sin(radianes);

        this.vertices = this.vertices.map(vertice => ({
            x: vertice.x * cosTheta + vertice.z * sinTheta,
            y: vertice.y,
            z: -vertice.x * sinTheta + vertice.z * cosTheta,
        }));
    }
    rotarZ(grados) {
        let radianes = gradosARadianes(grados);
        let cosTheta = Math.cos(radianes);
        let sinTheta = Math.sin(radianes);

        this.vertices = this.vertices.map(vertice => ({
            x: vertice.x * cosTheta - vertice.y * sinTheta,
            y: vertice.x * sinTheta + vertice.y * cosTheta,
            z: vertice.z,
        }));
    }
    dibujar(CTX) {
        CTX.strokeStyle = this.color;
        CTX.beginPath();
        this.aristas.forEach(cara => {
            let mostrar = cara.map(indice => {
                let verticeCamara = aplicarCamara(this.vertices[indice]);
                return this.proyectar(verticeCamara, CTX.canvas.width, CTX.canvas.height);
            });

            CTX.moveTo(mostrar[0].x, mostrar[0].y);
            mostrar.forEach(p => CTX.lineTo(p.x, p.y));
            CTX.closePath();
        });
        CTX.stroke();
    }
    proyectar(vertice, ancho, alto) {
        let distancia = 1000;
        let escala = distancia / (distancia + vertice.z);
        return {
            x: vertice.x * escala + ancho / 2,
            y: vertice.y * escala + alto / 2,
    };
    }
}
