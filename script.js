// JavaScript code to dynamically apply CSS changes

// Apply a new font from Google Fonts
const loadFont = () => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Poppins', sans-serif";
};

// Apply theme changes dynamically
const applyDarkTheme = () => {
    document.body.style.backgroundColor = '#222'; // Dark background for the body
    document.body.style.color = '#ffffff'; // White text color for contrast

    // Apply background image
    document.body.style.backgroundImage = "url('your-wallpaper.jpg')"; // Replace with the path to your wallpaper
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    // Select the background box and apply styles
    const backgroundBox = document.querySelector('.background');
    if (backgroundBox) {
        backgroundBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Black background with transparency
        backgroundBox.style.borderColor = '#444'; // Dark border color
        backgroundBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    }

    // Apply styles to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.style.fontFamily = "'Poppins', sans-serif"; // Inherit the new font
        button.style.margin = '5px'; // Add margin between buttons
    });

    // Apply styles to input fields
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach((control) => {
        control.style.backgroundColor = '#333'; // Darker background for input fields
        control.style.color = '#fff'; // White text for input fields
        control.style.borderColor = '#555'; // Dark border color
    });
};

// Apply all changes on window load
window.onload = () => {
    loadFont();
    applyDarkTheme();
};
