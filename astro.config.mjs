import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://argsrobotics-beta.netlify.app',
  integrations: [mdx(), tailwind(), react(), sitemap({
    customPages: [
      'https://argsrobotics-beta.netlify.app',
      'https://argsrobotics-beta.netlify.app/contact',
      'https://argsrobotics-beta.netlify.app/about',
      'https://argsrobotics-beta.netlify.app/about/history',
      'https://argsrobotics-beta.netlify.app/about/robots',
      'https://argsrobotics-beta.netlify.app/about/safety-dale',
      'https://argsrobotics-beta.netlify.app/about/school',
      'https://argsrobotics-beta.netlify.app/about/team',
      'https://argsrobotics-beta.netlify.app/resources/events',
      'https://argsrobotics-beta.netlify.app/resources/newsletters',
      'https://argsrobotics-beta.netlify.app/resources/newsletters/archive'
    ]
  }), robotsTxt({
    policy: [{
      userAgent: '*',
      allow: '/',
      disallow: '/newsletter-thank-you'
    }]
  })],
  trailingSlash: 'ignore',
  output: 'server',
  adapter: netlify()
});