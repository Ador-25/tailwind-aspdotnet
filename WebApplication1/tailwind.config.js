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
                night: '#1a202c', // Dark background color
                nightText: '#ffffff', // Text color for night mode
            },
        },
    },
    plugins: [],
}
