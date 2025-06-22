# Scrollixtop.js

A simple JavaScript library to add a "Scroll to Top" button with smooth scrolling and customizable styles.

---

## ✨ Why Scrollixtop.js

- 🆙 Automatically adds a "Scroll to Top" button when the user scrolls down.
- 🎨 Fully customizable colors, position, size, icon, and effects.
- 📜 Smooth scrolling animation.
- 🔄 Button appears and disappears with a fade-in/out effect.
- 🛠 Adjustable z-index and box-shadow for better UI integration.

---

## 👀 See Demo

Check out the live demo of Scrollixtop.js in action:  
[Scrollixtop.js Demo](https://plenixnetwork.github.io/scrollixtop.js/)

---

## 📦 Installation

You can use this library via **jsDelivr CDN**:

```html
<script src="https://cdn.jsdelivr.net/gh/PlenixNetwork/scrollixtop.js/dist/main.js"></script>
```

## 🎨 Customization
You can customize the appearance of the "Scroll to Top" button by calling the ScrollToTop function and passing an object with various styling properties.

The function accepts the following parameters:
- **backgroundColor**: The background color of the button (default: #333).
- **textColor**: The color of the text (up arrow) (default: #fff).
- **hoverBackgroundColor**: The background color when the button is hovered (default: #555).
- **hoverTextColor**: The color of the text (up arrow) when hovered (default: #fff).
- **hoverBorderColor**: The border color when the button is hovered (default: #fff).
- **borderColor**: The default border color of the button (default: #fff).
- **borderSize**: The size of the border around the button (default: 2px).
- **animationDuration**: The duration of the scroll animation in milliseconds (default: 900 ms).
- **bottom**: The distance from the bottom of the screen (default: 20px).
- **right**: The distance from the right of the screen (default: 20px).
- **width**: The width of the button (default: 50px).
- **height**: The height of the button (default: 50px).
- **borderRadius**: The border radius of the button (default: 50%).
- **fontSize**: The size of the arrow icon (default: 34px).
- **icon**: The button icon (default: "\u8679").
- **zIndex**: The z-index of the button (default: 1000).
- **boxShadow**: The shadow effect of the button (default: "0px 4px 6px rgba(0, 0, 0, 0.3)").

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
        animationDuration: 1200,      // Scroll animation duration
        bottom: "30px",              // Button position from bottom
        right: "30px",               // Button position from right
        width: "60px",               // Button width
        height: "60px",              // Button height
        borderRadius: "10px",        // Button border radius
        fontSize: "28px",            // Font size of arrow icon
        icon: "🔝",                   // Custom icon
        zIndex: "2000",              // Button z-index
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.4)" // Custom box shadow
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
- Bottom position: 20px
- Right position: 20px
- Width: 50px
- Height: 50px
- Border radius: 50%
- Font size: 34px
- Icon: "\u8679"
- Z-index: 1000
- Box shadow: "0px 4px 6px rgba(0, 0, 0, 0.3)"

## 📄 License
This project is licensed under the MIT License.
