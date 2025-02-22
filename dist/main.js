(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        global.ScrollToTop = factory();
    }
})(typeof window !== "undefined" ? window : this, function () {

    // Función para crear el botón
    function createScrollToTopButton(options = {}) {
        const defaultOptions = {
            backgroundColor: "#333",
            textColor: "#fff",
            hoverBackgroundColor: "#555",
            animationDuration: 900
        };

        // Si no se pasan opciones personalizadas, se usan las predeterminadas
        const finalOptions = Object.assign({}, defaultOptions, options);

        // Evita crear el botón si ya existe
        if (document.getElementById("scrollToTopBtn")) return;

        const button = document.createElement("button");
        button.id = "scrollToTopBtn";
        button.innerHTML = "&#8679;";

        // Los estilos ahora usan las opciones pasadas (predeterminadas o personalizadas)
        const buttonStyles = {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: finalOptions.backgroundColor,
            color: finalOptions.textColor,
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

        Object.assign(button.style, buttonStyles);

        // Efectos hover
        button.onmouseover = function () {
            button.style.background = finalOptions.hoverBackgroundColor;
            button.style.transform = "scale(1.15)";
        };

        button.onmouseout = function () {
            button.style.background = finalOptions.backgroundColor;
            button.style.transform = "scale(1)";
        };

        // Agregar el botón al cuerpo
        document.body.appendChild(button);

        // Event listener para hacer scroll hacia arriba
        button.addEventListener("click", function () {
            smoothScrollToTop(finalOptions.animationDuration);
        });

        // Mostrar/ocultar el botón según el scroll
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

    // Función para hacer el scroll suave hacia arriba
    function smoothScrollToTop(duration) {
        let currentPosition = window.scrollY;
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

    // Asegurarse de que el DOM esté completamente cargado antes de ejecutar cualquier cosa
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            createScrollToTopButton(); // Usará los valores predeterminados si no se pasa nada
        });
    } else {
        createScrollToTopButton(); // Si ya está listo el DOM, ejecuta directamente
    }

    return function (options) {
        // Solo se pasa opciones personalizadas si existen
        if (options && Object.keys(options).length > 0) {
            createScrollToTopButton(options);
        }
    };
});
