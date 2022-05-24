module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dracula",
    ],
  },
  plugins: [require("daisyui")],
}