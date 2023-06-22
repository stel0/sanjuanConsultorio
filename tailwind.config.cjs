/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'logo-shadow': 'rgba(17, 17, 26, 0.1) 0px 1px 0px;'
      },
      backgroundImage: {
        "waves-pattern":"url('src/assets/layered-waves-haikei.svg')",
        "waves-pattern-footer":"url(src/assets/waves 3.svg)"
      }
    },
  },
  plugins: [],
}
