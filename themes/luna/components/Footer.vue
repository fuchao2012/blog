<template>
  <footer class="footer">
    <div class="centered">
      <span class="hide-on-mobile">
        <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">CC BY-NC-ND 4.0</a>
      </span>
      <span>&copy;</span>
      <span><a :href="website">{{ title }}</a></span>
      <span class="hide-on-mobile">
        <a :href="`https://github.com/${repo}`">Read the source code.</a>
      </span>
    </div>
  </footer>
</template>

<script>
import { themeConfig } from '@site-meta'

export default {
  data() {
    return {
      title: themeConfig.headerTitle.toUpperCase(),
      website: themeConfig.website,
      repo: themeConfig.repo
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  background-color: #eee8d5
  color: #93a1a1
  height: 30px
  line-height: @height
  font-size: 14px
  padding: 0 70px
  .centered
    margin-bottom: 0
    &>span
      margin-right: 5px
  a
    color: #93a1a1
    &:hover
      text-decoration: underline
      
@media screen and (max-width: 768px)
  .footer
    padding: 0 10px
</style>