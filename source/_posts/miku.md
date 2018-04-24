---
title: 'miku: 一般性前端调试工具'
date: 2016-12-18 19:21:17
tags:
---
你大概知道 jsbin、jsfiddle、codepen 这些在线代码调试工具，我经常使用 jsbin 不过它们都有各自的局限性:

- 编辑器不够强大，毕竟是在线工具
- 没有模块系统支持，调用第三方库只能通过 script 标签引用 UMD 格式的文件
- 局限于 HTML/CSS/JS 

所以我用我经常使用的 webpack 做了一个基于它的代码调试工具叫做 [**miku**](https://github.com/egoist/miku)，它主要就是解决了上述工具存在的不足。

```bash
miku example.js example.css
```

miku 的原理就是你提供一些想测试的文件，比如叫 `example.js` 和 `example.css` 。它会将这些文件作为 webpack 的入口文件编译，然后通过 [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) 用一个 html 文件加载，最后通过服务器渲染出来，你就能打开浏览器看到显示效果了。

这样做的好处是你能充分享受 webpack 的功能，我们都知道 webpack 的配置虽不是什么高难度的事但也是挺麻烦的，尤其当你有很多项目的时候。现在你可以直接运行 miku 通过预配置的 webpack 运行你的 demo 了。

miku 默认添加了很多常用的 loader 配置:

- postcss
- babel
- coffeescriot
- typescript
- sass
- less
- pug
- livescript

等等…… 而且图片和字体文件也用 file-loader 做了处理，svg 文件则使用 raw-loader 加载。

当然「直接在浏览器中编辑 JS/CSS」那种在线调试工具的方便暂时也无可替代，虽然也有 [webpackbin](http://webpackbin.com) [esnextbin](http://esnextb.in) [requirebin](http://requirebin.com/) 基于 bundler 的在线调试工具，不过我不只是想调试，也想让文件存在于我的本地磁盘里。

## <span>由来</span>

任何事情都不是空穴来风，我的轮子尤其如此。我昨晚在搞一个叫做 `real-dom` 的项目，之后我才发现很类似 [redom](https://github.com/pakastin/redom)，不过当时我有个「做个 example」的需求，手动预览这些用了 babel 的项目真的挺麻烦，所以想做这样一个东西。

**虽然我之前的那个 [vbuild](https://github.com/egoist/vbuild) 几乎能胜任这项任务，不过我之后联想到了 jsbin，就有是不是能继续往这方面发展的想法。** 所以又一个轮子诞生了。

> Just build things. It doesn’t matter if someone else thinks it's a bad idea as long as you think it isn’t. Really.