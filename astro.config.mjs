import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://bxbdndhfjfbdj2-creator.github.io',base:'/pages/',output:'static',trailingSlash:'always',integrations:[sitemap()]});
