/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      icons: ['icons']
    },
    iconFont: {
      pikachu: "'\uf11f'",
      pokeball: "'\uf12a'",
      dpad: "'\uf121'",
      cards: "'\uf109'",
      pokemontv: "'\uf12c'",
      event: "'\uf112'",
      news: "'\uf138'",
      weight: "'\uf11b'",
      male: "'\uf122'",
      female: "'\uf115'",
      eye: "'\uf114'",
      search: "'\uf132'",
      down: "'\uf103'",
      up: "'\uf106'",
      arrow: "'\uf105'",
      hearth: "'\uf136'",
      type: "'\uf129'",
      weakness: "'\uf110'",
      refresh: "'\uf130'"
    }
  },
  plugins: [
    plugin(function ({ matchComponents, theme }) {
      matchComponents({ icon: value => ({ 'font-family': 'icons', '&::before': { content: `${value}` } }) }, { values: theme('iconFont') })
    })
  ]
}
