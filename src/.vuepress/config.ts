import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'knowledge',
  description: 'The knowledge that front-end (Not just) engineers must master after all',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'logo/logo.svg',
    navbar: [
        {
            text:'基础知识',
            link:'/basis/'
        },
        {
            text:'H5/CSS',
            link:'/h5/'
        },
        {
            text:'Git/Linux',
            link:'/git/'
        }
    ]
  },
})