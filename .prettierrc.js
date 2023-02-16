module.exports = {
    trailingComma: "es5",
    useTabs: false,
    tabWidth: 4,
    semi: false,
    bracketSpacing: true,
    endOfLine: "lf",
    arrowParens: "always",
    printWidth: 80,
    plugins: [require("prettier-plugin-tailwindcss")],
    tailwindConfig: "tailwind.config.js",
}
