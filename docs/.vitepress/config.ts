import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  // lang: 'en-US',
  title: 'Yuen-Design',
  description: 'Yuen-Design文档介绍',

  lastUpdated: true,

  base: process.env.BASE || '/',
  // head: [
  //   ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  // ],

  markdown: {
    headers: {
      level: [0, 0]
    },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',

    // nav
    nav,

    // sidebar
    sidebar,

    // editLink: {
    //   pattern: 'https://github.com/xinlei3166/vitepress-demo/edit/master/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/xinlei3166/vitepress-demo' }
    // ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2022-present 君惜'
    // }
  }
})