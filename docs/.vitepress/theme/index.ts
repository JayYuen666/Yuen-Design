import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import '@unocss/reset/tailwind-compat.css'
import YuenUI from '../../../src/entry'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(YuenUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}