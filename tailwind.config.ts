import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  darkMode: ["class"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  content: [],
  plugins: [typography(), require("tailwindcss-animate")],
}
