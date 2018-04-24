<template>
  <div>
    <Header />
    <div class="main">
      <div class="post-list">
        <div class="post-item" v-for="post in source.posts">
          <h2 class="post-title">
            <router-link :to="post.permalink">
              {{  post.attributes.title }}
            </router-link>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { title } from '@site-meta'
import Header from '@theme/components/Header'

export default {
  props: ['source'],

  head: {
    title
  },

  components: {
    Header
  }
}
</script>

<style lang="stylus" src="@theme/styles/main.styl"></style>
<style scoped lang="stylus">
.post-title
  font-weight: 300
  font-size: 2rem
  margin: 0 0 15px 0
  a
    color: #b58900
    text-decoration: none
    &:hover
      color: #ff69b4
</style>