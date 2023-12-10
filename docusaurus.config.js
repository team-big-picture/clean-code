// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "clean code",
  tagline: "클린코드 스터디",
  favicon: "img/favicon.ico",
  url: "https://team-big-picture.github.io",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  baseUrl: "/clean-code/",
  organizationName: "team-big-picture",
  projectName: "clean-code",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://team-big-picture.github.io/clean-code/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://team-big-picture.github.io/clean-code",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "클린코드",
        logo: {
          alt: "기본 로고",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "chapter-02",
            position: "left",
            label: "클린코드 스터디",
          },
          { to: "/blog", label: "👨‍👩‍👧‍👦 참여자", position: "left" },
          {
            href: "https://github.com/team-big-picture/clean-code",
            label: "⛳️ GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
