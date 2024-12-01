document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
    await import('./bucleFPS.js');
    let btnTutorial = document.getElementById("btnTutorial");
    let btnCerrar = document.getElementById("btnCerrar");
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    btnTutorial.addEventListener("click", () => {
        modal.style.display = "block";
    });

    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

