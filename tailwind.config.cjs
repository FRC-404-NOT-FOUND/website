/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f3f2f2",
          100: "#e7e4e4",
          200: "#cecaca",
          300: "#b6afaf",
          400: "#9e9494",
          500: "#857a7a",
          600: "#6b6161",
          700: "#504949",
          800: "#353131",
          900: "#1b1818"
        },
        red: {
          50: "#ffe5e5",
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000"
        },
        orange: {
          50: "#fff2e5",
          100: "#ffe6cc",
          200: "#ffcc99",
          300: "#ffb366",
          400: "#ff9933",
          500: "#ff8000",
          600: "#cc6600",
          700: "#994c00",
          800: "#663300",
          900: "#331a00"
        },
        yellow: {
          50: "#ffffe5",
          100: "#ffffcc",
          200: "#ffff99",
          300: "#ffff66",
          400: "#ffff33",
          500: "#ffff00",
          600: "#cccc00",
          700: "#999900",
          800: "#666600",
          900: "#333300"
        },
        lime: {
          50: "#f2ffe5",
          100: "#e6ffcc",
          200: "#ccff99",
          300: "#b3ff66",
          400: "#99ff33",
          500: "#80ff00",
          600: "#66cc00",
          700: "#4d9900",
          800: "#336600",
          900: "#1a3300"
        },
        green: {
          50: "#e5ffe5",
          100: "#ccffcc",
          200: "#99ff99",
          300: "#66ff66",
          400: "#33ff33",
          500: "#00ff00",
          600: "#00cc00",
          700: "#009900",
          800: "#006600",
          900: "#003300"
        },
        teal: {
          50: "#e5fff2",
          100: "#ccffe6",
          200: "#99ffcc",
          300: "#66ffb3",
          400: "#33ff99",
          500: "#00ff80",
          600: "#00cc66",
          700: "#00994d",
          800: "#006633",
          900: "#00331a"
        },
        cyan: {
          50: "#e5ffff",
          100: "#ccffff",
          200: "#99ffff",
          300: "#66ffff",
          400: "#33ffff",
          500: "#00ffff",
          600: "#00cccc",
          700: "#009999",
          800: "#006666",
          900: "#003333"
        },
        blue: {
          50: "#e5f2ff",
          100: "#cce5ff",
          200: "#99ccff",
          300: "#66b2ff",
          400: "#3399ff",
          500: "#007fff",
          600: "#0066cc",
          700: "#004c99",
          800: "#003366",
          900: "#001933"
        },
        indigo: {
          50: "#e5e5ff",
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0000ff",
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033"
        },
        violet: {
          50: "#f2e5ff",
          100: "#e5ccff",
          200: "#cc99ff",
          300: "#b266ff",
          400: "#9933ff",
          500: "#7f00ff",
          600: "#6600cc",
          700: "#4c0099",
          800: "#330066",
          900: "#190033"
        },
        purple: {
          50: "#ffe5ff",
          100: "#ffccff",
          200: "#ff99ff",
          300: "#ff66ff",
          400: "#ff33ff",
          500: "#ff00ff",
          600: "#cc00cc",
          700: "#990099",
          800: "#660066",
          900: "#330033"
        },
        pink: {
          50: "#ffe5f2",
          100: "#ffcce6",
          200: "#ff99cc",
          300: "#ff66b3",
          400: "#ff3399",
          500: "#ff0080",
          600: "#cc0066",
          700: "#99004d",
          800: "#660033",
          900: "#33001a"
        }
      }
    }
  },
  plugins: [],
  darkMode: 'media',
}