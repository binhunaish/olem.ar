import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'عُلِم',
  tagline: 'منصة تعليمية مفتوحة المصدر',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://olem.org.ly',
  baseUrl: '/',
  organizationName: 'عُلِم',
  projectName: '3olem',
  
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/binhunaish/olem.ar/tree/main/',
        },
        blog: {
  showReadingTime: true,
  editUrl: 'https://github.com/binhunaish/olem.ar/tree/main/',
},
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'عُلِم',
      logo: {
        alt: 'شعار عُلِم',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'الدروس',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'المحتوى',
          items: [
            {
              label: 'الدروس',
              to: '/docs/intro',
            },
            {
              label: 'المدونة',
              to: '/blog',
            },
          ],
        },
        {
          title: 'المجتمع',
          items: [
            {
              label: 'مناقشات',
              href: 'https://github.com/binhunaish/olem.ar/discussions',
            },
            {
              label: 'المساهمة',
              href: 'https://github.com/binhunaish/olem.ar/blob/main/CONTRIBUTING.md',
            },
          ],
        },
        {
          title: 'المزيد',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/binhunaish/olem.ar',
            },
            {
              label: 'Libyan Cloud',
              href: 'https://libyancloud.org',
            },
          ],
        },
      ],
      copyright: `حقوق النشر © ${new Date().getFullYear()} عُلِم.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;