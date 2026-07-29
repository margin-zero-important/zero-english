// @ts-check
import { defineConfig } from 'astro/config';
import supersvgPlugin from 'vite-plugin-supersvg';
import mdx from '@astrojs/mdx';

const prod = process.env.NODE_ENV === 'production';
const repoName = 'zero-english';

// https://astro.build/config
export default defineConfig({
  site: 'https://margin-zero-important.github.io',
  base: prod ? `/${repoName}` : '/',

  vite: {
    plugins: [supersvgPlugin()],
  },

  integrations: [mdx()],
});
