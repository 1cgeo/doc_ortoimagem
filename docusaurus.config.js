// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carta Ortoimagem',
  tagline: '',
  url: 'https://github.com/1cgeo',
  baseUrl: '/doc_ortoimagem/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '1cgeo', // Usually your GitHub org/user name.
  projectName: 'doc_ortoimagem', // Usually your repo name.]
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins:[
    [require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: "en"
      }
    ]
  ],

 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
      navbar: {
        title: 'Carta Ortoimagem',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introdução',
          },
          {
            type: 'doc',
            docId: 'fluxo_trabalho_cdgv/intro',
            position: 'left',
            label: 'Fluxo de Trabalho - CDGV',
          },
          {
            type: 'doc',
            docId: 'fluxo_trabalho_carta_orto/intro',
            position: 'left',
            label: 'Fluxo de Trabalho - Carta Ortoimagem',
          },
          {
            type: 'doc',
            docId: 'cq',
            position: 'left',
            label: 'Controle de Qualidade',
          },
          {
            type: 'doc',
            docId: 'cq',
            position: 'left',
            label: 'Exemplos',
          },
          {
            type: 'doc',
            docId: 'doc_referencia',
            position: 'right',
            label: 'Documentação de Referência',
          },
          {
            href: 'https://github.com/dsgoficial',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Documentação',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Organizações Militares',
            items: [
              {
                label: 'DSG',
                href: 'http://www.dsg.eb.mil.br/',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dsgoficial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Diretoria de Serviço Geográfico. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;