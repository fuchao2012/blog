<template>
  <div>
    <Header />
    <div class="main">
      <div class="page-header">
        <h1 class="page-title">{{ source.attributes.title }}</h1>
      </div>
      <div class="page-body">
        <component :is="markdown" v-if="source.attributes.compile" />
        <div class="markdown-body" v-html="source.body" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@theme/components/Header'

export default {
  props: ['source'],

  head() {
    return {
      title: this.source.attributes.title 
    }
  },

  computed: {
    markdown() {
      if (!this.source.attributes.compile) return
      return {
        name: 'markdown-body',
        data: () => ({...this.source.attributes.data}),
        template: `<div class="markdown-body">${this.source.body}</div>`
      }
    }
  },

  components: {
    Header
  }
}
</script>

<style scoped lang="stylus">
.page-title
  font-weight: 300
  color: #b58900
  font-size: 4rem
  margin: 0
  line-height: 1
</style>