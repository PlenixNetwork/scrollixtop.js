# Plenix - Scroll To Top JS  

A simple JavaScript library to add a "Scroll to Top" button with smooth scrolling and customizable styles.

## 🚀 Features
- 🆙 Automatically adds a "Scroll to Top" button when the user scrolls down.
- 🎨 Customizable colors for background, text, and hover effects.
- 📜 Smooth scrolling animation.
- 🔄 Button appears and disappears with a fade-in/out effect.

## 📦 Installation

You can use this library via **jsDelivr CDN**:

```html
<script src="https://cdn.jsdelivr.net/gh/plenixnetwork/scroll-to-top-js/dist/main.js"></script>
```
## 🎨 Customization
You can customize the appearance of the "Scroll to Top" button by calling the ScrollToTop function and passing an object with color properties.

The function accepts the following parameters:

- backgroundColor: The background color of the button.
- textColor: The color of the text (the up arrow).
- hoverBackgroundColor: The background color when the button is hovered.

# Example usage:
```html
<script>
    // Call the ScrollToTop function to customize button colors
    ScrollToTop({
        backgroundColor: "#ff6600",  // Button background color
        textColor: "#ffffff",        // Text (arrow) color
        hoverBackgroundColor: "#cc5500" // Background color on hover
    });
</script>
```
## 📄 License
This project is licensed under the MIT License.