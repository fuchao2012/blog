<template>
  <div>
    <div class="page-header">
      <h1>{{ source.attributes.title }}</h1>
    </div>
    <div class="page-body">
      <component :is="markdown" v-if="source.attributes.compile" />
      <div class="markdown-body" v-html="source.body" v-else></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source'],

  computed: {
    markdown() {
      if (!this.source.attributes.compile) return
      return {
        name: 'markdown-body',
        data: () => ({...this.source.attributes.data}),
        template: `<div class="markdown-body">${this.source.body}</div>`
      }
    }
  }
}
</script>