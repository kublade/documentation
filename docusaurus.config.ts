import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kublade',
  tagline: 'Effortless Kubernetes deployments powered by Laravel Blade',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kublade.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kublade', // Usually your GitHub org/user name.
  projectName: 'kublade', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'https://documents.kublade.org/api-docs-latest.json',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#c62b1c',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Kublade Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Documentation',
        },
        {
          href: '/api/',
          label: 'API',
          position: 'right',
        },
        {
          href: 'https://github.com/kublade/kublade',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} IPvX UG (haftungsbeschränkt)`,
      links: [
        {
          label: 'Imprint',
          href: 'https://ipvx.io/rechtliches/impressum',
        },
        {
          label: 'Privacy Policy',
          href: 'https://ipvx.io/rechtliches/datenschutzbestimmungen',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
      type: 'text/css',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css',
      type: 'text/css',
    },
  ],

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
          name: "documents",
          sourceBaseUrl: "https://documents.kublade.org/",
          outDir: "docs/project",
          documents: ["CHANGELOG.md", "DEPENDENCIES-latest.md"],
          modifyContent: (filename, content) => {
            switch (filename) {
              case "CHANGELOG.md":
                return {
                  content: `---
sidebar_position: 2
---

${content}`
                }
              case "DEPENDENCIES-latest.md":
                return {
                  content: `---
sidebar_position: 4
---

${content}`
                }
            }
          },
      },
    ],
  ],
};

export default config;
