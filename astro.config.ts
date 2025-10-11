import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'

import devtoolsJson from 'vite-plugin-devtools-json'
import aiRobotsTxt from 'astro-ai-robots-txt'
import robotsTxt from 'astro-robots-txt'

import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import pagefind from 'astro-pagefind'

export default defineConfig({
  site: 'https://equation-snippets.com',
  output: 'static',
  vite: {
    plugins: [devtoolsJson(), tailwindcss()],
  },
  server: {
    port: 3000,
  },
  integrations: [
    icon(),
    mdx({}),
    robotsTxt(),
    aiRobotsTxt(),
    sitemap(),
    pagefind(),
    // partytown(),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'IBM Plex Mono',
        cssVariable: '--font-ibm-plex-mono',
        weights: ['100 700'],
      },
    ],
  },
})
