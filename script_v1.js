const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre")

     
            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta")
            }, 500);
        }
    }
})
