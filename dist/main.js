(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        global.ScrollToTop = factory();
    }
})(typeof window !== "undefined" ? window : this, function () {
    function createScrollToTopButton(options = {}) {
        console.log("Creando botón de scroll to top...");

        // Verificar si el botón ya existe
        if (document.getElementById("scrollToTopBtn")) {
            console.log("El botón ya existe, no se creará uno nuevo.");
            return;
        }

        // Crear el botón
        const button = document.createElement("button");
        button.id = "scrollToTopBtn";
        button.innerHTML = "&#8679;";
        console.log("Botón creado");

        const defaultStyles = {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: options.backgroundColor || "#333",
            color: options.textColor || "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "34px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: "1000",
            opacity: "0",
            transform: "translateY(20px)",
            transition: "opacity 0.4s ease, transform 0.4s ease, background 0.3s ease, transform 0.3s ease",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        };

        // Aplicar los estilos al botón
        Object.assign(button.style, defaultStyles);
        console.log("Estilos aplicados al botón");

        // Efectos al pasar el ratón
        button.onmouseover = function () {
            console.log("Mouse over");
            button.style.background = options.hoverBackgroundColor || "#555";
            button.style.transform = "scale(1.15)";
        };

        button.onmouseout = function () {
            console.log("Mouse out");
            button.style.background = options.backgroundColor || "#333";
            button.style.transform = "scale(1)";
        };

        // Añadir el botón al DOM
        document.body.appendChild(button);
        console.log("Botón añadido al DOM");

        // Añadir evento al hacer clic
        button.addEventListener("click", function () {
            console.log("Botón clickeado, scroll to top");
            smoothScrollToTop();
        });

        // Mostrar el botón al hacer scroll
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                button.style.opacity = "1";
                button.style.transform = "translateY(0)";
            } else {
                button.style.opacity = "0";
                button.style.transform = "translateY(20px)";
            }
        });
    }

    function smoothScrollToTop() {
        let currentPosition = window.scrollY;
        const duration = 900;
        const start = performance.now();

        function animateScroll(timestamp) {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeInOut = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, currentPosition * (1 - easeInOut));

            if (elapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    // Llamar a la creación del botón directamente
    return function (options) {
        console.log("Iniciando ScrollToTop con opciones:", options);
        createScrollToTopButton(options);
    };
});
