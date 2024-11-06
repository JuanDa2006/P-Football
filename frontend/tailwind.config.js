const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}', flowbite.content()],
    theme: {
        extend: {
            width: {
                15: '3.75rem',
            },
        },
    },
    plugins: [flowbite.plugin()],
};
