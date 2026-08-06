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
          // custom CSS file for the project
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Docusaurus plugins for the project
  plugins: [
    // Plugins for each docs instance
    ...docsPlugins,
    // Tailwind CSS plugin for Docusaurus
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    }
  }
};

export default config;
