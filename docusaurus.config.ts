import { themes as prismThemes } from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '권우석',
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
  stylesheets: [
      'https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap'
  ],

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
        blog: {
          blogTitle: 'blog',
          blogSidebarTitle: 'Recent',
          blogSidebarCount: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // site meta image
    navbar: {
      hideOnScroll: true,
      items: [
        {
          to: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          label: 'PARA Note',
          type: 'dropdown',
          position: 'left',
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
            },
          ]
        },
        {
          href: 'https://github.com/egg528',
          label: 'Github',
          position: 'right',
        },
        {
          href: 'https://egg528.github.io/pdf/resume.pdf',
          label: 'Resume',
          position: 'right',
        },
      ],
    },
    prism: {
      additionalLanguages: ['java', 'kotlin', 'typescript'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins:
      [
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

export default config;
