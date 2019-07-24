<template>
  <div>
    <Header />
    <div class="main">
      <div class="page-header">
        <h1 class="page-title">{{ page.title }}</h1>
        <h2 class="page-subtitle" v-if="page.subtitle">{{ page.subtitle }}</h2>
      </div>
      <div class="page-body">
        <div
          class="alert alert-warning"
          v-if="page.warning"
        >{{ page.warning }}</div>
        <div class="original-link" v-if="page.original">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="globe">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                <path
                  d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                />
              </g>
            </g>
          </svg>
          本文翻译自:&nbsp;
          <a
            :href="page.original"
            target="_blank"
          >{{ page.original }}</a>
          {{ (!page.translationConfidence || page.translationConfidence) > 60 ? '' : `&nbsp;(译者水平有限，译文仅供参考)` }}
        </div>
        <div class="markdown-body">
          <slot name="default"></slot>
        </div>
      </div>
      <div class="separator" data-text="终"></div>
      <div class="tags" v-if="tags">
        <saber-link class="tag" :to="`/tags/${tag}`" v-for="tag in tags" :key="tag">#{{ tag }}</saber-link>
      </div>
      <div class="prev-next" v-if="page.prevPost || page.nextPost">
        <saber-link
          v-if="page.prevPost"
          :to="page.prevPost.permalink"
          class="prev"
        >← {{ page.prevPost.title }}</saber-link>
        <saber-link
          v-if="page.nextPost"
          :to="page.nextPost.permalink"
          class="next"
        >{{ page.nextPost.title }} →</saber-link>
      </div>
      <div class="report-bugs" v-if="page.type === 'post'">
        文章勘误可以直接到
        <a
          target="_blank"
          :href="`https://github.com/egoist/blog/blob/master/pages/_posts/${page.slug}.md`"
        >源代码地址</a> 修改或者
        <a target="_blank" href="https://github.com/egoist/blog/issues/new">提交 ISSUE</a>，感谢阅读！
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "#theme/components/Header.vue";
import Footer from "#theme/components/Footer.vue";

export default {
  props: ["page"],

  head() {
    const title = this.page.title;
    let summary = this.page.subtitle || this.page.excerpt;
    if (summary) {
      // Strip HTML tags
      summary = summary.replace(/<(?:.|\n)*?>/gm, "");
    }
    return {
      title,
      meta: [
        {
          name: "description",
          content: summary
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: `@${this.$themeConfig.twitter}`
        },
        {
          name: "og:title",
          content: title
        },
        {
          name: "og:description",
          content: summary
        }
      ]
    };
  },

  computed: {
    tags() {
      return this.page.tags && this.page.tags.sort();
    }
  },

  mounted() {
    const mediumZoom = require("medium-zoom").default;

    const zoom = mediumZoom(".page-body img");

    let oldFilter;

    zoom.on("open", () => {
      const img = zoom.getZoomedImage();
      oldFilter = img.style.filter;
      img.style.filter = "none";
    });

    zoom.on("close", () => {
      const img = zoom.getZoomedImage();
      img.style.filter = oldFilter;
    });
  },

  components: {
    Header,
    Footer
  }
};
</script>

<style lang="stylus">
.markdown-body {
  img {
    max-width: 100%;
  }

  h2, h3, h4, h5 {
    font-weight: 300;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 16px;
    line-height: 1.4;
    color: #b58900;
    border-bottom: 1px solid #eee8d5;
    font-size: 2.4rem;
    padding-bottom: 0.6rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  ul, ol {
    list-style: cjk-ideographic;
    padding-left: 0;

    li {
      background: rgba(0, 0, 0, 0.04);
      padding: 3px 10px;

      &:nth-child(2n) {
        background: rgba(37, 26, 26, 0.11);
      }
    }
  }

  blockquote {
    margin: 0;
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #eee8d5;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #ddd;
    height: 4px;
    padding: 0;
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.04);
    border: 0 none;

    &:before {
      display: table;
      content: '';
    }

    &:after {
      display: table;
      clear: both;
      content: '';
    }
  }
}

@media screen and (max-width: 768px) {
  .markdown-body {
    ul, ol {
      list-style: none;
    }

    h2 {
      font-size: 1.4rem;
    }
  }
}
</style>

<style scoped lang="stylus">
separator(text) {
  height: 1px;
  background: rgba(37, 26, 26, 0.04);
  position: relative;
  margin: 50px 0;
  overflow: visible;

  &:after {
    if (text == false) {
      content: attr(data-text);
    } else {
      content: text;
    }

    padding: 0 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.26);
    background: #fdf6e3;
    font-size: 1rem;
  }
}

.main {
  max-width: 60rem;
}

.page-title {
  font-weight: 300;
  color: #b58900;
  font-size: 4rem;
  margin: 0;
  line-height: 1.2;

  @media (min-width: 992px) {
    margin-left: -3px;
  }
}

.page-subtitle {
  color: #93a1a1;
  font-weight: 300;
  line-height: 120%;
  margin-top: 10px;
}

.page-body {
  color: #657b83;
  font-size: 18px;
  line-height: 1.8;
  margin: 30px 0;
}

.report-bugs {
  padding: 10px;
  color: #657b83;
  margin-top: 30px;
  border: 1px dashed rgba(37, 26, 26, 0.11);
}

.alert {
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid;
}

.alert-warning {
  border-color: #ef5753;
  color: #cc1f1a;
  background-color: #fcebea;
  margin-bottom: 30px;
}

.prev-next {
  overflow: auto;

  .next {
    float: right;
  }
}

.tags {
  display: flex;
  margin: 30px 0;
}

.tag {
  display: flex;
  border: 1px dashed rgba(37, 26, 26, 0.11);
  color: #657b83;
  padding: 2px 8px;
  font-size: 14px;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    background: rgba(37, 26, 26, 0.04);
  }
}

.separator {
  separator(false);
}

.original-link {
  border: 1px dashed rgba(37, 26, 26, 0.11);
  padding: 10px;
  margin-bottom: 30px;
  font-size: 1rem;

  svg {
    height: 1.1em;
    width: 1.1em;
    fill: #8bc34a;
    vertical-align: middle;
    margin-top: -3px;
  }
}

@media screen and (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .page-body {
    font-size: 17px;
  }
}

code {
  font-size: 1rem;
  tab-size: 4;
  color: #bd10e0;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;

  &:before, &:after {
    content: '`';
  }
}

pre {
  margin-top: 30px;
  margin-bottom: 30px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  font-weight: 400;
  padding: 20px;

  code {
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: 0;
    color: inherit;

    &:before, &:after {
      content: '';
      display: none;
    }
  }
}

.saber-highlight {
  background-color: transparent;
  border-radius: 0;
  box-shadow: inset 0 0 0 1px #eee8d5;

  &:before {
    color: #b1b1b1;
  }
}

.saber-highlight-mask, .saber-highlight-code code {
  font-size: 1rem;
}

.code-line.highlighted {
  background-color: #fdf0cd;
  box-shadow: inset 3px 0 0 0 #ffcd33;
}

@media screen and (max-width: 768px) {
  .saber-highlight {
    margin-left: -10px;
    margin-right: @margin-left;

    pre {
      padding: 10px;
    }

    .saber-highlight-mask {
      padding: 10px 0;
    }
  }
}

.footnote-ref {
  margin: 0 5px;

  a {
    text-decoration: none;

    &:focus {
      outline: none;
      color: #DD4A68;
      font-weight: bold;
    }

    &:hover {
      text-decoration: none;
    }
  }
}

.footnotes {
  .footnote-item {
    p {
      margin: 0;
      margin-top: 0 !important;
    }

    &.is-focus {
      border-left: 2px solid;
      border-color: #E91E63;
      outline: none;

      .footnote-backref {
        color: @border-color;
      }
    }
  }

  .footnote-backref {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
}

hr.footnotes-sep {
  separator('脚注');
}
</style>