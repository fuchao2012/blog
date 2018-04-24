<template>
  <div>
    <div class="page-header">
      <h1>{{ source.attributes.title }}</h1>
    </div>
    <div class="page-body">
      <component :is="markdown" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['source'],

  computed: {
    markdown() {
      return {
        name: 'markdown-body',
        data: () => ({...this.source.attributes.data}),
        template: `<div class="markdown-body">${this.source.body}</div>`
      }
    }
  }
}
</script>