---
title: vbuild
subtitle: Developing Vue.js app is like 1,2,3
date: 2017-02-15 19:36:26
tags:
  - vue
  - webpack
---
I’m very proud to announce [vbuild 6](https://github.com/egoist/vbuild), an opinionated but configurable Webpack wrapper for bundling front-end Vue.js apps, allowing you to use Webpack like a pro! No decision-making while reducing boilerplate code, solving problems like when to split vendor code, how to manage static files, CSS extracting et al.

<img class="border-image" src="https://ooo.0o0.ooo/2017/02/17/58a6cc0680006.png" alt="preview">

To start using, all you need is to write your app directly, let's say `index.js`:

```jsx
import Vue from 'vue'

new Vue({
  el: '#app',
  render: h => <h1>Hello World!</h1>
})
```

Without `vbuild`, you need to create a `webpack.config.js` with a lot of boilerplate code, and install many dev dependencies in `package.json`, which is very verbose to perform.

Now we can run a single command `vbuild --dev` to replace the process above.

This blog post will go into the philosophy and design decisions of the project. To learn how to use vbuild instead, please refer to the [README](https://github.com/egoist/vbuild#readme), where you can learn the entirety of the tool's capabilities in just a few minutes.

First we'll dive into the [background](#background) of this project.

## Background

In the past few years, bundlers like Webpack and browserify have taken over the market. Before that, Gulp had just made some progress in the process of replacing Grunt as the major build tool of front-end assets.

The main reason that Gulp is replacing Grunt is the **simplicity** in my opinion. Who knows that I had been using PHP for years before meeting Node.js, developing and deploying PHP apps is that stupidly fast and easy.

Since then, I've made my mind that I want to develop JavaScript apps in a simple way. At the same time, I did fall in love with [XO](https://github.com/sindresorhus/xo), which is an ESLint wrapper that reduces the overhead of managing config files. vbuild is to Webpack as XO is to ESLint.

## Why Vue.js

There're similar tools like [nwb](https://github.com/insin/nwb) or [create-react-app](https://github.com/facebookincubator/create-react-app), but vbuild is mainly for Vue.js.

Despiting that vbuild has extra support for Vue's single-file component, it actually works for all kinds of JavaScript frameworks! The **no-config** feature works better in Vue.js apps though.

Have to note that, Vue.js itself is getting well with the idea **no-config**, you can use it directly in a `index.html` file, or work with any bundler, out-of-box nice development experience, hot-code reloading support, officially maintained router and state-managament library.

## Future

I do have some exciting future plans for vbuild, like [server-side rendering support](https://github.com/egoist/vbuild/issues/112) (I know there's Nuxt.js already) and better testing experience for Vue.js app.

Currently you can see vbuild's `run` option, which allows you to perform custom build process instead of running webpack:

```js
module.exports = {
  run(webpackConfig) {
    // Your custom logic...
  }
}
```

If you're interested in contributing, please join the party, check out the [issue tracker](https://github.com/egoist/vbuild/issues) or contact me personally on Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin).