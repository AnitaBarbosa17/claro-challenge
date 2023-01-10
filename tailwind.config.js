/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			fontWeight: {
				bold: 700,
				medium: 600,
				regular: 400,
				light: 300,
			},
    },
  },
  plugins: [],
}
