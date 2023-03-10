/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-green": {
                    100: "#f6f9f9",
                    150: "#e6efee",
                    200: "#d6e5e3",
                    250: "#c6dcd9",
                    300: "#b7d2ce",
                    350: "#a7c8c4",
                    400: "#97beb9",
                    450: "#88b4ae",
                    500: "#78aba4",
                    550: "#659f97",
                    600: "#588d86",
                    650: "#4c7a74",
                    700: "#416762",
                    750: "#355450",
                    800: "#29413e",
                    850: "#1d2e2c",
                    900: "#111c1a",
                    DEFAULT: "#78aba4",
                },
                "deep-green": {
                    100: "#effcfa",
                    150: "#c5f5ec",
                    200: "#9beedf",
                    250: "#71e7d1",
                    300: "#47e0c4",
                    350: "#24d1b2",
                    400: "#1ca78e",
                    450: "#157d6a",
                    500: "#0e5245",
                    550: "#0d4c41",
                    600: "#0c463b",
                    650: "#0b3f35",
                    700: "#0a3830",
                    750: "#08312a",
                    800: "#072b24",
                    850: "#06241f",
                    900: "#051d19",
                    DEFAULT: "#0e5245",
                },
                lime: {
                    100: "#f9fbea",
                    150: "#f6f9e1",
                    200: "#f3f7d9",
                    250: "#f1f6d0",
                    300: "#eef4c8",
                    350: "#ecf2bf",
                    400: "#e9f1b7",
                    450: "#e6efae",
                    500: "#e3eda4",
                    550: "#d8e67f",
                    600: "#ccde58",
                    650: "#c0d632",
                    700: "#a2b624",
                    750: "#808f1c",
                    800: "#5d6915",
                    850: "#3b420d",
                    900: "#191b05",
                    DEFAULT: "#e3eda4",
                },
                "light-orange": {
                    100: "#fefaec",
                    150: "#fdf2d1",
                    200: "#fbeab5",
                    250: "#fae29a",
                    300: "#f8da7f",
                    350: "#f7d264",
                    400: "#f5ca48",
                    450: "#f4c22d",
                    500: "#f2bb13",
                    550: "#dca80c",
                    600: "#c1940a",
                    650: "#a67f09",
                    700: "#8c6a07",
                    750: "#715606",
                    800: "#564105",
                    850: "#3b2d03",
                    900: "#201802",
                    DEFAULT: "#f2bb13",
                },
                "deep-orange": {
                    100: "#fef9ef",
                    150: "#fceed4",
                    200: "#fbe4b9",
                    250: "#f9d99e",
                    300: "#f8cf83",
                    350: "#f6c568",
                    400: "#f5ba4d",
                    450: "#f3b033",
                    500: "#f2a516",
                    550: "#e0960d",
                    600: "#c5840b",
                    650: "#aa720a",
                    700: "#8f6008",
                    750: "#744e07",
                    800: "#593c05",
                    850: "#3e2a04",
                    900: "#231802",
                    DEFAULT: "#f2a516",
                },
            },
        },
    },
    plugins: [],
}
