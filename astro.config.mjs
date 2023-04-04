import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://argsrobotics-beta.netlify.app',
  integrations: [compress(), mdx(), tailwind(), react(), sitemap(), robotsTxt()],
  trailingSlash: 'ignore',
});