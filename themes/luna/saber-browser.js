import 'saber-highlight-css/default.css'
import 'nprogress/nprogress.css'
import '#theme/styles/main.styl'

export default ({ router, setHead }) => {
  if (process.browser) {
    const nprogress = require('nprogress')

    const loaded = Object.create(null)

    nprogress.configure({ showSpinner: false })

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        nprogress.start()
      }
      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      nprogress.done()
    })
  }

  setHead(function () {
    return {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      link: [
        {
          rel: 'alternate',
          title: `${this.$siteConfig.title} - Feed`,
          type: 'application/atom+xml',
          href: `${this.$siteConfig.url.replace(/\/$/, '')}/atom.xml`
        }
      ]
    }
  })
}