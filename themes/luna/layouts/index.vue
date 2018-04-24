<template>
  <div>
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
export default {
  props: ['source']
}
</script>

<style lang="stylus" src="@theme/styles/main.styl"></style>
<style scoped lang="stylus">
.main
  padding: 0 60px
  
.post-title
  font-weight: 300
  a
    color: #b58900
</style>