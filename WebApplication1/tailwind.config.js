// tailwind.config.js
module.exports = {
    content: [
        './Views/**/*.cshtml',
        './wwwroot/**/*.html',
        './wwwroot/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3490dc', // Example primary color
                secondary: '#ffed4a', // Example secondary color
            },
            fontSize: {
                '4xl': '2.5rem', // Example custom font size
                '5xl': '3rem',
            },
            backgroundColor: {
                'dark': '#1a202c', // Dark background color
            },
            textColor: {
                'dark': '#ffffff', // Dark text color
            },
        },
    },
    plugins: [],
}
