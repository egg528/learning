// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Woosuk Kwon',
  tagline: '',
  url: 'https://egg528.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/egg.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'egg528', // Usually your GitHub org/user name.
  projectName: 'egg528.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // 배포 브랜치 명
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          id: 'project',
          path: 'docs/project',
          routeBasePath: 'project',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: "dark",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        navbar: {
          title: 'Home',
          hideOnScroll: true,
          items: [
            {
              label: 'PARA Note',
              type: 'dropdown',
              position: 'right',
              items: [
                {
                  label: 'Project',
                  to: '/project/intro',
                  activeBasePath: '/project',
                },
                {
                  label: 'Area',
                  to: '/area/intro',
                  activeBasePath: '/area',
                },
                {
                  label: 'Resource',
                  to: '/resource/intro',
                  activeBasePath: '/resource',
                },
                {
                  label: 'Archive',
                  to: '/archive/intro',
                  activeBasePath: '/archive',
                }
              ]
            },
            {
              to: 'blog',
              label: 'Blog',
              position: 'right',
            },
            {
              href: 'https://egg528.github.io/pdf/resume.pdf',
              label: 'Resume',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Contact',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/egg528',
                },
                {
                  label: 'Linkedin',
                  href: 'https://www.linkedin.com/in/rnjsdntjr26',
                },
                {
                  label: 'Resume',
                  href: 'https://egg528.github.io/pdf/resume.pdf',
                }
              ],
            },
            {
              title: 'PARA Note',
              items: [
                {
                  label: 'Project',
                  href: 'https://egg528.github.io/project/intro',
                },
                {
                  label: 'Area',
                  href: 'https://github.com/egg528/area/intro',
                },
                {
                  label: 'Resource',
                  href: 'https://github.com/egg528/resource/intro',
                },
                {
                  label: 'Archive',
                  href: 'https://github.com/egg528/archive/intro',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          additionalLanguages: ['java', 'kotlin', 'typescript'],
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  plugins:
      [
        async function tailwindPlugin(context, options) {
          return {
            name: "docusaurus-tailwindcss",
            configurePostCss(postcssOptions) {
              postcssOptions.plugins.push(require("tailwindcss"));
              postcssOptions.plugins.push(require("autoprefixer"));
              return postcssOptions;
            },
          };
        },
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'area',
            path: 'docs/area',
            routeBasePath: 'area',
            sidebarPath: require.resolve('./sidebars.js'),
            // ... other options
          },
        ],
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'resource',
            path: 'docs/resource',
            routeBasePath: 'resource',
            sidebarPath: require.resolve('./sidebars.js'),
            // ... other options
          },
        ],
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'archive',
            path: 'docs/archive',
            routeBasePath: 'archive',
            sidebarPath: require.resolve('./sidebars.js'),
            // ... other options
          },
        ]
      ]
};

module.exports = config;