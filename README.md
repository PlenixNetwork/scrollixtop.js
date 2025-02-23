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
- backgroundColor: The background color of the button (default: #333).
- textColor: The color of the text (up arrow) (default: #fff).
- hoverBackgroundColor: The background color when the button is hovered (default: #555).
- hoverTextColor: The color of the text (up arrow) when hovered (default: #fff).
- hoverBorderColor: The border color when the button is hovered (default: #fff).
- borderColor: The default border color of the button (default: #fff).
- borderSize: The size of the border around the button (default: 2px).
- animationDuration: The duration of the scroll animation in milliseconds (default: 900 ms).

### Example usage:
```html
<script>
    // Call the ScrollToTop function to customize button styles
    ScrollToTop({
        backgroundColor: "#ff6600",  // Button background color
        textColor: "#ffffff",        // Text (arrow) color
        hoverBackgroundColor: "#cc5500", // Background color on hover
        hoverTextColor: "#fff",      // Text color on hover
        hoverBorderColor: "#fff",    // Border color on hover
        borderColor: "#fff",         // Border color
        borderSize: "2px",           // Border size
        animationDuration: 1200      // Scroll animation duration
    });
</script>
```
### Default Button Styling:
If no custom options are provided, the button will appear with the following default styles:
- Background color: #333
- Text color: #fff
- Border color: #fff
- Border size: 2px
- Hover background color: #555
- Hover text color: #fff
- Hover border color: #fff
- Scroll animation duration: 900 ms

## 📄 License
This project is licensed under the MIT License.