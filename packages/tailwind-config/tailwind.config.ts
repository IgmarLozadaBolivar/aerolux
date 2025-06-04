import type { Config } from 'tailwindcss'
import path from 'path'

const config: Config = {
    content: [
        path.join(__dirname, '../../apps/app/src/**/*.{tsx,ts,jsx,js}'),
        path.join(__dirname, '../../apps/landing/src/**/*.{astro,tsx,ts,jsx,js}')
    ],
    theme: {
        extend: {}
    },
    plugins: []
}

export default config
