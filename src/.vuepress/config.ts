import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base:'/knowledge/',
  // 站点配置
  lang: 'zh-CN',
  title: 'knowledge',
  description: 'The knowledge that front-end (Not just) engineers must master after all',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo:'xiaoxunyao/knowledge',
    logo: 'logo/logo.svg',
    navbar: [
        {
            text:'基础知识',
            children:[
              {
                text:'语言基础',
                children:[
                  {
                    text:'函数',
                    link:'/basic/func.md'
                  },
                  {
                    text:'数组',
                    link:'/basic/array.md'
                  },
                  {
                    text:'字符串',
                    link:'/basic/string.md'
                  },
                  {
                    text:'正则表达式',
                    link:'/basic/regexp.md'
                  },
                  {
                    text:'异步处理',
                    link:'/basic/async.md'
                  },
                  {
                    text:'Object.*',
                    link:'/basic/object.md'
                  },
                ]
              },
              {
                text:"DOM",
                children:[
                  {
                    text:'DOM操作',
                    link:'/dom/dom.md'
                  },
                  {
                    text:'DOM事件',
                    link:'/dom/dom-event.md'
                  },
                ]
              },
              {
                text:"规范与概念",
                children:[
                  {
                    text:'js编码规范 .eslitrc.js',
                    link:'/specification/eslintrc.md'
                  },
                  {
                    text:'无障碍访问与ARIA',
                    link:'/specification/aria.md'
                  },
                  {
                    text:'文档模式',
                    link:'/specification/dtd.md'
                  },
                  {
                    text:'MIME type',
                    link:'/specification/mime.md'
                  },
                  {
                    text:'语义版本控制',
                    link:'/specification/semantic-version.md'
                  }
                ]
              },
              {
                text:'计算机基础',
                children:[
                  {
                    text:'概念汇总',
                    link:'/computer/concept.md'
                  }
                ]
              }
            ]
        },
        {
            text:'H5/CSS',
            children:[
              {
                text:'CSS',
                children:[
                  {
                    text:'CSS选择器整理',
                    link:'/css3/selector.md'
                  },
                  {
                    text:'transform',
                    link:'/css3/transform.md'
                  },
                  {
                    text:'从矩阵与空间操作的关系理解CSS3的transform',
                    link:'/css3/matrix.md'
                  },
                  {
                    text:'BFC',
                    link:'/css3/bfc.md'
                  },
                ]
              },
              {
                text:'H5',
                children:[
                  {
                    text:'Blob(binary large object)',
                    link:'/h5/blob.md'
                  },
                  {
                    text:'File 和 FileList',
                    link:'/h5/file-filelist.md'
                  }
                ]
              }
            ]
        },
        {
            text:'Git/Linux',
            children:[
              {
                text:'Git',
                children:[
                  {
                    text:'config配置项',
                    link:'/git/config.md'
                  },
                  {
                    text:'git常用命令及技巧',
                    link:'/git/commonly-used.md'
                  },
                  // {
                  //   text:'Git版本控制管理',
                  //   link:'/git/version.md'
                  // },
                ]
              },
              {
                text:'Linux',
                children:[
                  {
                    text:'Ubuntu使用知识积累',
                    link:'/linux/ubuntu-utils.md'
                  }
                ]
              }
            ]
        },
        {
          text:'网络/安全',
          children:[
            {
              text:'网络',
              children:[
                {
                  text:'get和post请求的区别',
                  link:'/http/get-post.md'
                },
                {
                  text:'从输入URL到页面加载完成的过程中都发生了什么事情？',
                  link:'/http/url-render.md'
                },
                {
                  text:'ajax及其优缺点',
                  link:'/http/ajax.md'
                },
                {
                  text:'跨域及跨域的方案',
                  link:'/http/cross-domain.md'
                },
                {
                  text:'强缓存与协商缓存',
                  link:'/http/cache.md'
                },
                {
                  text:'cookie和storage',
                  link:'/http/cookie-storage.md'
                },
              ]
            },
            {
              text:'安全',
              children:[
                {
                  text:'CSP(内容安全策略)',
                  link:'/security/csp.md'
                }
              ]
            }
          ]
        },
        {
          text:'性能/兼容性',
          children:[
            {
              text:'性能',
              link:'/performance/perf.md'
            },
            {
              text:'H5 性能优化整理',
              link:'/performance/h5-perf.md'
            },
            {
              text:'基础性能知识',
              link:'/performance/performance.md'
            },
            {
              text:'浏览器渲染页面的过程',
              link:'/performance/render-page.md'
            },
            {
              text:'重排和重绘的概念及触发条件',
              link:'/performance/reflow-repaint.md'
            },
            {
              text:'数据直出与服务端渲染的首屏优化',
              link:'/performance/ssr.md'
            },
            {
              text:'兼容性',
              link:'/compatibility/compatibility.md'
            },
          ]
        },
        {
          text:'数据结构/算法',
          children:[
            {
              text:'数据结构',
              children:[
                {
                  text:'数据结构以及相关术语的概念',
                  link:'/algorithm/data-structure.md'
                },
                {
                  text:'栈',
                  link:'/algorithm/stack.md'
                },
                {
                  text:'队列',
                  link:'/algorithm/queue.md'
                },
                {
                  text:'链表',
                  link:'/algorithm/linked-list.md'
                },
                {
                  text:'二叉树和二叉查找树',
                  link:'/algorithm/bst.md'
                },
                {
                  text:'图',
                  link:'/algorithm/graph.md'
                }
              ]
            },
            {
              text:'算法',
              children:[
                {
                  text:'算法的时间复杂度和空间复杂度',
                  link:'/algorithm/time-space.md'
                },
                {
                  text:'基本排序算法',
                  link:'/algorithm/basic-sort.md'
                },
                {
                  text:'高级排序算法',
                  link:'/algorithm/advance-sort.md'
                }    
              ]
            }
          ]
        },
        {
          text:'框架',
          children:[
            {
              text:'Vue',
              children:[
                {
                  text:'博客 Vue 文章汇总',
                  link:'/vue/all-posts.md'
                },
                {
                  text:'Vue 奇技淫巧',
                  link:'/vue/skill.md'
                }
              ]
            },
            {
              text:'React',
              children:[
                {
                  text:'React技术栈相关经验总结',
                  link:'/react/experience-talk.md'
                }
              ]
            },
            {
              text:'Webpack',
              children:[
                {
                  text:'webpack插件收集',
                  link:'/webpack/plugins.md'
                },
                // {
                //   text:'webpack4.0+ 特性总结',
                //   link:'/webpack/webpack4.md'
                // },
                {
                  text:'webpack优化总结',
                  link:'/webpack/optimization.md'
                },
              ]
            }
          ]
        }
    ],
    sidebar:{
      "/":[
        {
          text:'基础知识',
          children:[
            {
              text:'语言基础',
              children:[
                {
                  text:'函数',
                  link:'/basic/func.md'
                },
                {
                  text:'数组',
                  link:'/basic/array.md'
                },
                {
                  text:'字符串',
                  link:'/basic/string.md'
                },
                {
                  text:'正则表达式',
                  link:'/basic/regexp.md'
                },
                {
                  text:'异步处理',
                  link:'/basic/async.md'
                },
                {
                  text:'Object.*',
                  link:'/basic/object.md'
                },
              ]
            },
            {
              text:"DOM",
              children:[
                {
                  text:'DOM操作',
                  link:'/dom/dom.md'
                },
                {
                  text:'DOM事件',
                  link:'/dom/dom-event.md'
                },
              ]
            },
            {
              text:"规范与概念",
              children:[
                {
                  text:'js编码规范 .eslitrc.js',
                  link:'/specification/eslintrc.md'
                },
                {
                  text:'无障碍访问与ARIA',
                  link:'/specification/aria.md'
                },
                {
                  text:'文档模式',
                  link:'/specification/dtd.md'
                },
                {
                  text:'MIME type',
                  link:'/specification/mime.md'
                },
                {
                  text:'语义版本控制',
                  link:'/specification/semantic-version.md'
                }
              ]
            },
            {
              text:'计算机基础',
              children:[
                {
                  text:'概念汇总',
                  link:'/computer/concept.md'
                }
              ]
            }
          ]
        },
        {
          text:'H5/CSS',
          children:[
            {
              text:'CSS',
              children:[
                {
                  text:'CSS选择器整理',
                  link:'/css3/selector.md'
                },
                {
                  text:'transform',
                  link:'/css3/transform.md'
                },
                {
                  text:'从矩阵与空间操作的关系理解CSS3的transform',
                  link:'/css3/matrix.md'
                },
                {
                  text:'BFC',
                  link:'/css3/bfc.md'
                },
              ]
            },
            {
              text:'H5',
              children:[
                {
                  text:'Blob(binary large object)',
                  link:'/h5/blob.md'
                },
                {
                  text:'File 和 FileList',
                  link:'/h5/file-filelist.md'
                }
              ]
            }
          ]
      },
      {
          text:'Git/Linux',
          children:[
            {
              text:'Git',
              children:[
                {
                  text:'config配置项',
                  link:'/git/config.md'
                },
                {
                  text:'git常用命令及技巧',
                  link:'/git/commonly-used.md'
                },
                // {
                //   text:'Git版本控制管理',
                //   link:'/git/version.md'
                // },
              ]
            },
            {
              text:'Linux',
              children:[
                {
                  text:'Ubuntu使用知识积累',
                  link:'/linux/ubuntu-utils.md'
                }
              ]
            }
          ]
      },
      {
        text:'网络/安全',
        children:[
          {
            text:'网络',
            children:[
              {
                text:'get和post请求的区别',
                link:'/http/get-post.md'
              },
              {
                text:'从输入URL到页面加载完成的过程中都发生了什么事情？',
                link:'/http/url-render.md'
              },
              {
                text:'ajax及其优缺点',
                link:'/http/ajax.md'
              },
              {
                text:'跨域及跨域的方案',
                link:'/http/cross-domain.md'
              },
              {
                text:'强缓存与协商缓存',
                link:'/http/cache.md'
              },
              {
                text:'cookie和storage',
                link:'/http/cookie-storage.md'
              },
            ]
          },
          {
            text:'安全',
            children:[
              {
                text:'CSP(内容安全策略)',
                link:'/security/csp.md'
              }
            ]
          }
        ]
      },
      {
        text:'性能/兼容性',
        children:[
          {
            text:'性能',
            link:'/performance/perf.md'
          },
          {
            text:'H5 性能优化整理',
            link:'/performance/h5-perf.md'
          },
          {
            text:'基础性能知识',
            link:'/performance/performance.md'
          },
          {
            text:'浏览器渲染页面的过程',
            link:'/performance/render-page.md'
          },
          {
            text:'重排和重绘的概念及触发条件',
            link:'/performance/reflow-repaint.md'
          },
          {
            text:'数据直出与服务端渲染的首屏优化',
            link:'/performance/ssr.md'
          },
          {
            text:'兼容性',
            link:'/compatibility/compatibility.md'
          },
        ]
      },
      {
        text:'数据结构/算法',
        children:[
          {
            text:'数据结构',
            children:[
              {
                text:'数据结构以及相关术语的概念',
                link:'/algorithm/data-structure.md'
              },
              {
                text:'栈',
                link:'/algorithm/stack.md'
              },
              {
                text:'队列',
                link:'/algorithm/queue.md'
              },
              {
                text:'链表',
                link:'/algorithm/linked-list.md'
              },
              {
                text:'二叉树和二叉查找树',
                link:'/algorithm/bst.md'
              },
              {
                text:'图',
                link:'/algorithm/graph.md'
              }
            ]
          },
          {
            text:'算法',
            children:[
              {
                text:'算法的时间复杂度和空间复杂度',
                link:'/algorithm/time-space.md'
              },
              {
                text:'基本排序算法',
                link:'/algorithm/basic-sort.md'
              },
              {
                text:'高级排序算法',
                link:'/algorithm/advance-sort.md'
              }    
            ]
          }
        ]
      },
      {
        text:'框架',
        children:[
          {
            text:'Vue',
            children:[
              {
                text:'博客 Vue 文章汇总',
                link:'/vue/all-posts.md'
              },
              {
                text:'Vue 奇技淫巧',
                link:'/vue/skill.md'
              }
            ]
          },
          {
            text:'React',
            children:[
              {
                text:'React技术栈相关经验总结',
                link:'/react/experience-talk.md'
              }
            ]
          },
          {
            text:'Webpack',
            children:[
              {
                text:'webpack插件收集',
                link:'/webpack/plugins.md'
              },
              // {
              //   text:'webpack4.0+ 特性总结',
              //   link:'/webpack/webpack4.md'
              // },
              {
                text:'webpack优化总结',
                link:'/webpack/optimization.md'
              },
            ]
          }
        ]
      }
      ]
    }
  },
  plugins:[
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: '3a539aab83105f01761a137c61004d85',
        indexName: 'vuepress',
        searchParameters: {
          facetFilters: ['tags:v2'],
        },
        locales: {
          '/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  openIssueText: '你认为该查询应该有结果？',
                  openIssueLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
    ],
  ]
})