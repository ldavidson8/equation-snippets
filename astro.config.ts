import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'

import devtoolsJson from 'vite-plugin-devtools-json'
import aiRobotsTxt from 'astro-ai-robots-txt'
import robotsTxt from 'astro-robots-txt'

import AstroPWA from '@vite-pwa/astro'
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
    partytown(),
    AstroPWA({
      mode: 'development',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Equation Snippets',
        short_name: 'Equation Snippets',
        description: 'A collection of useful equations for various fields of study.',
        theme_color: '#1a202c',
        icons: [
          { src: '/favicon.ico', type: 'image/x-icon', sizes: '16x16 32x32' },
          { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
          { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
          {
            src: '/icon-192-maskable.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable',
          },
          {
            src: '/icon-512-maskable.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/$/],
      },
    }),
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
