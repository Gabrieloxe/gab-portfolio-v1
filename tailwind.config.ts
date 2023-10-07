import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      bounce:
        "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
