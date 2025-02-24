module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/**/*.{html,js,svelte,ts}", "./src/*.{html,js,svelte,ts}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        cerulean: {
          50: "#f0f9fb",
          100: "#d9f7f9",
          200: "#aaeff1",
          300: "#70e2eb",
          400: "#2ccae2",
          500: "#1db1d6",
          600: "#0c8abd",
          700: "#116e98",
          800: "#125571",
          900: "#114458"
        },
        royalblue: {
          50: "#f5fafd",
          100: "#e6f5fc",
          200: "#c6e4fa",
          300: "#a1ccfa",
          400: "#6ea2f9",
          500: "#3f75f8",
          600: "#2c52f2",
          700: "#2640db",
          800: "#2032ab",
          900: "#1a2984"
        },
        indigo: {
          50: "#f4f7fb",
          100: "#ebedfb",
          200: "#d5d4fa",
          300: "#bfb7f9",
          400: "#a58bf9",
          500: "#885ef8",
          600: "#6c3ef4",
          700: "#5431e1",
          800: "#4129b7",
          900: "#352391"
        },
        flamingo: {
          50: "#fbf7f9",
          100: "#faecf7",
          200: "#f6ccf1",
          300: "#f3a6ea",
          400: "#f371df",
          500: "#f446d2",
          600: "#e72aba",
          700: "#c02195",
          800: "#921c6d",
          900: "#721853"
        },
        cerise: {
          50: "#fcf9f9",
          100: "#fceff3",
          200: "#f9d3e7",
          300: "#f8add4",
          400: "#f975b3",
          500: "#f94a8e",
          600: "#f12c68",
          700: "#d02252",
          800: "#a11c40",
          900: "#7d1833"
        },
        mango: {
          50: "#fbf7f1",
          100: "#fbefe0",
          200: "#f9dcbc",
          300: "#f7c084",
          400: "#f59544",
          500: "#f56c21",
          600: "#ea4815",
          700: "#c93619",
          800: "#a12b1d",
          900: "#81241b"
        },
        carrot: {
          50: "#faf6eb",
          100: "#faf0ce",
          200: "#f7e497",
          300: "#f3cf53",
          400: "#edad1e",
          500: "#e9890c",
          600: "#d86408",
          700: "#b44b0c",
          800: "#903b12",
          900: "#743013"
        },
        orange: {
          50: "#faf7ed",
          100: "#faf3cd",
          200: "#f6ea90",
          300: "#f0d749",
          400: "#e5b918",
          500: "#da9808",
          600: "#c27305",
          700: "#9c5709",
          800: "#7a430e",
          900: "#603510"
        },
        limegreen: {
          50: "#f9fbf6",
          100: "#f6f9e3",
          200: "#eaf3af",
          300: "#d7e76d",
          400: "#a4cf2b",
          500: "#6ab40f",
          600: "#4a9309",
          700: "#3d730c",
          800: "#305610",
          900: "#264211"
        },
        shamrock: {
          50: "#edf8f8",
          100: "#d6f7f2",
          200: "#a9f1e3",
          300: "#6de7d2",
          400: "#26d4b5",
          500: "#0cbb92",
          600: "#0b9f74",
          700: "#11825f",
          800: "#13654e",
          900: "#125140"
        }
      }
    }
  }
};
