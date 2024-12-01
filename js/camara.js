export function gradosARadianes(grados) {
    return (grados * Math.PI) / 180;
}

export const CAMARA = { x: 0, y: 0, z: -500, rotX: 0, rotY: 0, rotZ: 0 };

export function rotarCamaraX(punto, grados) {
    const radianes = gradosARadianes(grados);
    const cosTheta = Math.cos(radianes);
    const sinTheta = Math.sin(radianes);

    return {
        x: punto.x,
        y: punto.y * cosTheta - punto.z * sinTheta,
        z: punto.y * sinTheta + punto.z * cosTheta,
    };
}

export function rotarCamaraY(punto, grados) {
    const radianes = gradosARadianes(grados);
    const cosTheta = Math.cos(radianes);
    const sinTheta = Math.sin(radianes);

    return {
        x: punto.x * cosTheta + punto.z * sinTheta,
        y: punto.y,
        z: -punto.x * sinTheta + punto.z * cosTheta,
    };
}

export function rotarCamaraZ(punto, grados) {
    const radianes = gradosARadianes(grados);
    const cosTheta = Math.cos(radianes);
    const sinTheta = Math.sin(radianes);

    return {
        x: punto.x * cosTheta - punto.y * sinTheta,
        y: punto.x * sinTheta + punto.y * cosTheta,
        z: punto.z,
    };
}

export function aplicarCamara(punto) {
    let relativoCamara = {
        x: punto.x - CAMARA.x,
        y: punto.y - CAMARA.y,
        z: punto.z - CAMARA.z,
    };

    relativoCamara = rotarCamaraX(relativoCamara, CAMARA.rotX);
    relativoCamara = rotarCamaraY(relativoCamara, CAMARA.rotY);
    relativoCamara = rotarCamaraZ(relativoCamara, CAMARA.rotZ);

    return relativoCamara;
}
document.addEventListener("keydown", manejarTeclas);
export function manejarTeclas(event) {
    const velocidad = 10;
    const velocidadRotacion = 1;

    switch (event.key) {
        case "w": 
            CAMARA.z += velocidad; 
        break;
        case "s": 
            CAMARA.z -= velocidad; 
        break;
        case "a": 
            CAMARA.x -= velocidad; 
        break;
        case "d": 
            CAMARA.x += velocidad; 
        break;
        case "ArrowUp": 
            CAMARA.y -= velocidad; 
        break;
        case "ArrowDown": 
            CAMARA.y += velocidad; 
        break;
        case "ArrowLeft": 
            CAMARA.rotY -= velocidadRotacion; 
        break;
        case "ArrowRight": 
            CAMARA.rotY += velocidadRotacion; 
        break;
        case "q": 
            CAMARA.rotX -= velocidadRotacion; 
        break;
        case "e": 
            CAMARA.rotX += velocidadRotacion; 
        break;
        case "z": 
            CAMARA.rotZ -= velocidadRotacion; 
        break;
        case "x": 
            CAMARA.rotZ += velocidadRotacion; 
        break;
    }
}