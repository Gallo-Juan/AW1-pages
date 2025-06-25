import { setSessionItem } from "./utils/sessionstorageController.js";
import { getData } from "./utils/localstorageController.js";  // Importá tu función para leer localStorage

const form = document.getElementById("login");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const pass = document.getElementById("pass").value.trim();

    fetch("./usuarios.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error cargando usuarios.json");
            }
            return res.json();
        })
        .then((users) => {
            // Buscar en JSON
            let user = users.find(u => u.email.toLowerCase() === email && u.pass === pass);

            if (!user) {
                // Si no está en JSON, buscar en localStorage
                const localUsers = getData('usuarios') || [];  // Asumí que guardás usuarios nuevos en la clave 'usuarios'
                user = localUsers.find(u => u.email.toLowerCase() === email && u.password === pass);
            }

            if (user) {
                setSessionItem("userData", user);
                window.location.href = "pages/inicio/principal.html";
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        })
        .catch((error) => {
            console.error("Error en fetch:", error);
            alert("No se pudo validar el usuario.");
        });
});
