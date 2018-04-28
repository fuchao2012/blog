---
title: Peco 预览
subtitle: 简单强大的静态网站生成器
date: 2018-04-28T09:52:49.258Z
categories:
  - peco
---

Peco 正在开发中，在正式的文档出来之前我先理一下目前的使用方法。


## 安装

新建一个项目:

```bash
mkdir new-blog
cd new-blog
yarn init -y
yarn add egojump/peco
```

之后你便可以直接在这个项目中运行 Peco 而暂时不需要添加任何东西:

```bash
yarn peco dev
```

打开终端里打印出的网址会提示你在 `source/_posts` 目录中添加一些 Markdown 文件，你可以把你 Hexo 博客的文章拷贝过来:

```bash
mkdir -p source/_posts
cp ../old-blog/source/_posts/*.md source/_posts/
```

或者随便添加一个文件 `hello.md`:

```markdown
---
title: Hello World
---

__Hello__ World!
```

Peco 会为 `source` 里面的 Markdown 文件生成对应的路由，比如 `source/about.md` 可以通过 `/about` 来访问，而 `source/_posts` 比较特殊，这里面的文件会被当做 `文章` 类型来处理，默认通过 `:year/:month/:day/:slug` 来访问，这里的 `slug` 是经过处理的文件名。

## 主题和布局

Markdown 文件通过对应的布局组件来渲染，比如 `source/_posts` 里的文件默认是 `post` 布局，而其它的文件是 `page` 布局。

布局组件存放于主题中，你可以在配置文件中指定一个主题:

📝 __peco.config.yml__:

```yaml{3}
title: My Blog
description: This is awesome!
theme: ./theme
```

Peco 会在 `theme/layouts` 目录里寻找布局组件，比如为 `source/_posts/hello-world.md` 使用 `theme/layouts/post.vue`, 如果不存在则会使用 `theme/layouts/page.vue`，相应的首页会使用 `index.vue`。(`.js` 扩展名也是支持的)

## 主题开发

所有的布局组件都接受一个 `page` 属性 (prop):

```typescript
interface Page {
  // front-matter 解析的内容
  attributes: {
    [k: string]: any
  },
  // Markdown 渲染成 HTML 之后的字符串
  body?: string
  // 截取 body 首段的内容
  excerpt?: string
}
```

比较特殊的是首页默认使用的布局文件 `index.vue`，它的 `page` 属性下有几个额外的键:

```typescript
interface IndexPage extends Page {
  posts: Page[]
  pagination: {
    hasNext: boolean
    hasPrev: boolean
    prevLink: string
    nextLink: string
    total: Number
    current: Number
  }
}
```

在主题布局中可以通过 `this.$siteData` 访问配置文件中的 `title` 和 `description`, 以及通过 `this.$themeConfig` 访问 `themeConfig`。

我的博客已经迁移到 Peco, 你可以在[这里](https://github.com/egoist/blog)查看它使用的主题。

## 正式发布

在正式发布 0.1 版本之前，还有一些要实现的:

- 分类页和标签页的自动生成
- 官网文档

更完整的正式介绍会在五月一号随官网上线 😄