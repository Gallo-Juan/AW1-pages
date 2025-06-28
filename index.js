<<<<<<< HEAD
import { setSessionItem } from "/utils/sessionstorageController.js";
import { getData } from "/utils/localstorageController.js";  
=======
import { setSessionItem } from "/AW1-pages/utils/sessionstorageController.js";
import { getData } from "/AW1-pages/utils/localstorageController.js";  // Importá tu función para leer localStorage
>>>>>>> b86c330538ebd8decf433a7c06970c2d72137f73

const form = document.getElementById("login");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const pass = document.getElementById("pass").value.trim();

    fetch("/usuarios.json")
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
                const localUsers = getData('usuarios') || [];  
                user = localUsers.find(u => u.email.toLowerCase() === email && u.password === pass);
            }

            if (user) {
                setSessionItem("userData", user);
<<<<<<< HEAD
                window.location.href = "pages/inicio/principal.html";
=======
                window.location.href = "/AW1-pages/pages/inicio/principal.html";
>>>>>>> b86c330538ebd8decf433a7c06970c2d72137f73
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        })
        .catch((error) => {
            console.error("Error en fetch:", error);
            alert("No se pudo validar el usuario.");
        });
});
