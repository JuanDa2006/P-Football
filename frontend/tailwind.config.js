const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}', flowbite.content()],
    theme: {
        extend: {
            width: {
                15: '3.75rem',
            },
            spacing: {
                128: '32rem',
                160: '40rem',
                256: '64rem',
            },
        },
    },
    plugins: [flowbite.plugin()],
};
