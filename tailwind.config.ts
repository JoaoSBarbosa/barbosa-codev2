import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                "deep-gray": "#111"
            },
            colors: {
                "purple-custom": "#694DF8",
                'dark-gray': '#1a1a1a',
            },
            boxShadow: {
                'purple-custom': '0 10px 15px -3px rgba(105, 77, 248, 0.5), 0 4px 6px -2px rgba(105, 77, 248, 0.5)',
            },
        },
    },
    plugins: [],
};
export default config;
