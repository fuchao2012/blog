module.exports = {
  theme: './themes/luna',
  siteConfig: {
    title: '庶民样本',
    description: 'EGOIST 在这里写作',
    url: 'https://egoist.moe',
    author: 'EGOIST',
    email: '0x142857@gmail.com',
    pwaFirstTimeInstallMessage: '本站可以离线访问',
    pwaUpdateReadyMessage: '本站内容有更新',
    pwaUpdateButtonMessage: '确认',
    pwaDismissMessage: '忽略'
  },
  themeConfig: {
    headerTitle: 'echan',
    website: 'https://github.com/egoist',
    repo: 'egoist/blog',
    twitter: '_egoistlily',
    nav: [
      {
        title: 'about',
        link: '/about'
      },
      {
        title: 'girls',
        link: '/girls'
      },
      {
        title: 'donate',
        link: '/donate'
      }
    ]
  },
  markdown: {
    slugify: './utils/slugify',
    plugins: [
      {
        resolve: 'markdown-it-footnote'
      }
    ]
  },
  permalinks: {
    page: '/:slug',
    post: '/:year/:month/:day/:slug'
  },
  plugins: [
    {
      resolve: 'saber-plugin-google-analytics',
      options: {
        trackId: 'UA-54857209-6'
      }
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true
      }
    },
    {
      resolve: 'saber-plugin-query-posts'
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-pwa',
      options: {
        generateSWOptions: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/(i\.loli\.net|user-images\.githubusercontent\.com|i\.imgurp\.com)\//,
              handler: 'StaleWhileRevalidate'
            }
          ]
        }
      }
    }
  ],
  build: {
    lazy: true
  }
}
