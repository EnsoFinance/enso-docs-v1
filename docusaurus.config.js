const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Enso Docs',
  url: 'https://enso.finance',
  baseUrl: `/`,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Enso.svg',
  organizationName: 'EnsoFinance',
  projectName: 'Enso Docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Enso Docs Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'Guides',
          to: '/docs/guides/vampire-attack',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ['solidity', 'graphql'],
    },
    algolia: {
      apiKey: 'ab2d24b407e8c92887c8ad13d2c2f6e7',
      indexName: 'prod_DOCS',
      appId: 'Y3X8RQAJBE',
    },
    footer: {
      style: 'dark',
    },
    image: 'img/previewImage.png',
    ...(process.env.GTAG_ID && {
      gtag: {
        trackingID: process.env.GTAG_ID || '',
        anonymizeIP: true,
      },
    }),
    metadatas: [
      {
        name: 'title',
        content: 'Enso Docs',
      },
      {
        name: 'description',
        content:
          'Enso makes DeFi social trading, and collaboratively investing with your friends easy.  All in one place.',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/EnsoFinance/Enso-docs',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        guides: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      'docusaurus2-dotenv',
      {
        safe: false,
        systemvars: true,
        silent: false,
        expand: false,
        defaults: false,
        RPC_ENDPOINT: process.env.RPC_ENDPOINT,
        GTAG_ID: process.env.GTAG_ID,
      },
    ],
  ],
}
