import Vue from 'vue'
import 'nprogress/nprogress.css'
import '@theme/styles/main.styl'

export default ({ router, rootOptions }) => {
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

  rootOptions.head = {
    htmlAttrs: {
      lang: 'zh-CN'
    }
  }
}