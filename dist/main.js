/**
 * Scrollixtop.js - A customizable "Scroll to Top" button for web pages.
 * @version 2.0.0
 * @author Plenix Network
 * @license MIT
 *
 * Usage: 
 * 1. Include this script in your HTML file.
 * 2. Call `ScrollToTop()` to create the button with default settings.
 * 3. Pass an options object to `ScrollToTop(options)` to customize the button.
 * Example:
 * ScrollToTop({ 
 *   backgroundColor: "#000",
 *   textColor: "#fff",
 *   hoverBackgroundColor: "#444",
 *   hoverTextColor: "#fff",
 *   hoverBorderColor: "#fff",
 *   borderColor: "#fff",
 *   borderSize: "2px",
 *   animationDuration: 500,
 *   bottom: "30px",
 *   right: "30px",
 *   width: "60px",
 *   height: "60px",
 *   borderRadius: "50%",
 *   fontSize: "36px",
 *   icon: "&#8679;", // Unicode for up arrow
 *   zIndex: "1000",
 *   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)"
 * });
 *
 * This script creates a "Scroll to Top" button that appears when the user scrolls down the page.
 */

(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        global.ScrollToTop = factory();
    }
})(typeof window !== "undefined" ? window : this, function () {

    function createScrollToTopButton(options = {}) {
        const defaultOptions = {
            backgroundColor: "#333",
            textColor: "#fff",
            hoverBackgroundColor: "#555",
            hoverTextColor: "#fff",
            hoverBorderColor: "#fff",
            borderColor: "#fff",
            borderSize: "2px",
            animationDuration: 900,
            bottom: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            fontSize: "34px",
            icon: "&#8679;",
            zIndex: "1000",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)"
        };

        const finalOptions = Object.assign({}, defaultOptions, options);

        if (document.getElementById("scrollToTopBtn")) return;

        const button = document.createElement("button");
        button.id = "scrollToTopBtn";
        button.innerHTML = finalOptions.icon;

        const buttonStyles = {
            position: "fixed",
            bottom: finalOptions.bottom,
            right: finalOptions.right,
            width: finalOptions.width,
            height: finalOptions.height,
            borderRadius: finalOptions.borderRadius,
            background: finalOptions.backgroundColor,
            color: finalOptions.textColor,
            border: `${finalOptions.borderSize} solid ${finalOptions.borderColor}`,
            cursor: "pointer",
            fontSize: finalOptions.fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: finalOptions.zIndex,
            opacity: "0",
            transform: "translateY(20px)",
            transition: "opacity 0.4s ease, transform 0.4s ease, background 0.3s ease, transform 0.3s ease, border 0.3s ease, color 0.3s ease",
            boxShadow: finalOptions.boxShadow
        };

        Object.assign(button.style, buttonStyles);

        button.onmouseover = function () {
            button.style.background = finalOptions.hoverBackgroundColor;
            button.style.color = finalOptions.hoverTextColor;
            button.style.borderColor = finalOptions.hoverBorderColor;
            button.style.transform = "scale(1.15)";
        };

        button.onmouseout = function () {
            button.style.background = finalOptions.backgroundColor;
            button.style.color = finalOptions.textColor;
            button.style.borderColor = finalOptions.borderColor;
            button.style.transform = "scale(1)";
        };

        document.body.appendChild(button);

        button.addEventListener("click", function () {
            smoothScrollToTop(finalOptions.animationDuration);
        });

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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            createScrollToTopButton();
        });
    } else {
        createScrollToTopButton();
    }

    return function (options) {
        if (options && Object.keys(options).length > 0) {
            createScrollToTopButton(options);
        } else {
            createScrollToTopButton();
        }
    };
});