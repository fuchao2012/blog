<template>
  <header class="header">
    <h1 class="site-name">
      <saber-link to="/">
        {{ $themeConfig.headerTitle || $siteConfig.title }}
      </saber-link>
    </h1>
    <ul class="nav" v-if="$themeConfig.nav">
      <li v-for="(item, index) in $themeConfig.nav" class="nav-item" :key="index">
        <saber-link :to="item.link">{{ item.title }}</saber-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="stylus">
.header
  height: 50px
  line-height: 50px
  background-color: #93a1a1
  display: flex
  font-size: 18px

.site-name
  font-size: 18px
  margin: 0
  font-weight: 400
  a
    width: 80px
    padding-left: 10px
    display: block
    color: #eee8d5
    text-decoration: none
    background: #586e75
    &:hover
      font-weight: bold
      
.nav
  display: flex
  list-style: none
  margin: 0
  padding-left: 0
  .nav-item
    margin-left: 15px
  a
    color: #586e75
    text-decoration: none
    &:hover, &.router-link-exact-active
      color: #eee8d5
      background: transparent
</style>