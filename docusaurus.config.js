import { themes as prismThemes } from 'prism-react-renderer';
import fs from "fs";
import path from "path";

// get Docs Instances from the "docs" directory
function getDocsInstances() {
  const docsPath = path.join(__dirname, 'docs');
  if (!fs.existsSync(docsPath)) return [];

  return fs.readdirSync(docsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

// Create plugin instances for each docs instance for Docusaurus
const docsPlugins = getDocsInstances().map(instanceId => [
  '@docusaurus/plugin-content-docs',
  {
    id: instanceId,
    path: `docs/${instanceId}`,
    routeBasePath: `docs/${instanceId}`
  }
]);

const config = {
  // Docusaurus Configuration for the project
  title: 'عُلِم',
  tagline: 'منصة تعليمية مفتوحة المصدر',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://binhunaish.github.io/',
  baseUrl: '/olem.ar',
  organizationName: 'عُلِم',
  projectName: 'olem.ar',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  // language settings for Arabic with RTL support
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        direction: 'rtl',
      },
    }
  },

  // the default setting of Docusaurus
  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    ...docsPlugins,
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends Tailwind CSS and AutoPrefixer.
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  // theme configuration for the project
  themeConfig:
  {
    image: "/img/logo.svg",
    colorMode: {
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: "شعار غلم",
        src: "/img/logo.svg",
      },
      items: [
        { to: "/#why", label: "عن المشروع", position: "left" },
        {
          href: "https://github.com/binhunaish/olem.ar",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "الدروس",
          items: [
            {
              label: "ابدأ من المقدمة",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "المجتمع",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "روابط",
          items: [
            {
              label: "المدونة",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `جميع الحقوق محفوظة © ${new Date().getFullYear()} غلم. مبني باستخدام Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    }
  }
};

export default config;
