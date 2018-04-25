<template>
  <div>
    <Header />
    <div class="main">
      <div class="page-header">
        <h1 class="page-title">{{ page.attributes.title }}</h1>
        <h2 class="page-subtitle" v-if="page.attributes.subtitle">
          {{ page.attributes.subtitle }}
        </h2>
      </div>
      <div class="page-body">
        <component :is="markdown" v-if="page.attributes.compile" />
        <div class="markdown-body" v-html="page.body" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@theme/components/Header'

export default {
  props: ['page'],

  head() {
    return {
      title: this.page.attributes.title 
    }
  },

  computed: {
    markdown() {
      if (!this.page.attributes.compile) return
      return {
        name: 'markdown-body',
        data: () => ({...this.page.attributes.data}),
        template: `<div class="markdown-body">${this.page.body}</div>`
      }
    }
  },

  components: {
    Header
  }
}
</script>

<style lang="stylus">
.markdown-body
  img
    max-width: 100%

  h2,h3,h4,h5
    font-weight: 300

  h2
    margin-top: 1em
    margin-bottom: 16px
    line-height: 1.4
    color: #b58900
    border-bottom: 1px solid #eee8d5
    font-size: 2.4rem
    padding-bottom: .6rem

  p
    margin-top: 0
    margin-bottom: 16px

  a
    color: #b58900
    &:hover
      background: #eee8d5

  ul, ol
    list-style: cjk-ideographic
    padding-left: 0
    li
      background: rgba(0,0,0,.04)
      padding: 3px 10px
      &:nth-child(2n)
        background: rgba(37,26,26,.11)

  blockquote
    margin: 0
    padding: 0 15px
    color: #777
    border-left: 4px solid #eee8d5
</style>

<style scoped lang="stylus">
.main
  max-width: 60rem

.page-title
  font-weight: 300
  color: #b58900
  font-size: 4rem
  margin: 0
  line-height: 1.2

.page-subtitle
  color: #93a1a1
  font-weight: 300
  line-height: 120%
  margin-top: 10px

.page-body
  color: #657b83
  font-size: 18px
  line-height: 1.8
  margin: 30px 0

@media screen and (max-width: 768px)
  .page-title
    font-size: 1.6rem
  .page-subtitle
    font-size: 1rem
  .page-body
    font-size: 15px
</style>