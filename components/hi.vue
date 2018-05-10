<template>
  <div class="container">
    <div class="egoist">
      <img class="avatar" src="../assets/egoist.png" alt="egoist">
      <div class="egoist-desu">
        EGOIST desu!
      </div>
    </div>
    <div class="desc">
      I am a part-time open-source ninja making useful web apps, modules and stuffs.
    </div>
    <div class="icons">
      <a class="icon-animate icon" title="Follow me on Twitter" v-tippy href="https://twitter.com/_egoistlily">
        <TwitterIcon />
      </a>
      <a class="icon-animate icon"  title="Follow me on GitHub" v-tippy href="https://github.com/egoist">
        <GithubIcon />
      </a>
      <a class="icon-animate icon"  title="Support my open-source work" v-tippy href="https://patreon.com/egoist">
        <DollarSignIcon />
      </a>
      <a class="icon-animate icon"  title="Ask my anything" v-tippy href="https://www.patreon.com/egoist/community">
        <MessageSquareIcon />
      </a>
      <a href="mailto:0x142857@gmail.com" class="icon-animate icon" title="Contact me via 0x142857@gmail.com" v-tippy>
        <MailIcon />
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Tippy from 'v-tippy'
import {
  TwitterIcon,
  GithubIcon,
  DollarSignIcon,
  MessageSquareIcon,
  MailIcon
} from 'vue-feather-icons'

Vue.use(Tippy, {
  theme: 'honeybee'
  // arrow: true
})

export default {
  head() {
    return {
      title: `Hi, EGOIST desu!`
    }
  },

  components: {
    TwitterIcon,
    GithubIcon,
    DollarSignIcon,
    MessageSquareIcon,
    MailIcon
  }
}
</script>

<style src="v-tippy/dist/tippy.css"></style>

<style lang="stylus">
.tippy-tooltip.honeybee-theme 
  background-color: transparent
  border: 2px solid #d1a573
  font-weight: bold
  color: #333

.tippy-tooltip.honeybee-theme .tippy-backdrop
  background-color: #ead4b7
  
@keyframes bounce
  from,
  20%,
  53%,
  80%,
  to 
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0)

  40%,
  43%
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0)

  70%
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)
    transform: translate3d(0, -15px, 0)

  90% 
    transform: translate3d(0, -4px, 0)
  
.icon-animate
  animation-duration: 1s
  animation-fill-mode: both
  &:hover
    animation-name: bounce
    transform-origin: center bottom
</style>

<style scoped lang="stylus">
.container
  max-width: 600px
  margin: 0 auto
  text-align: center
  
.egoist
  display: inline-flex
  align-items: center
  font-size: 3rem
  background: #d1a573
  border-radius: 66px
  padding-right: 30px
  color: white
  box-shadow: inset 0px 0px 7px #888887
  margin-top: 100px
  
.desc
  font-size: 2rem
  color: #d1a573
  line-height: 1.3
  margin-top: 30px
  font-weight: 700
  text-shadow: 4px 4px #f7e4cf
  padding: 0 20px

.avatar
  border-radius: 50%
  height: 100px
  width: @height
  border: 2px solid white
  margin: 1px
  
.egoist-desu
  line-height: 1.2
  margin-left: 20px
  text-shadow: 5px 5px #dbb77e
  font-weight: 700
  
.icons
  position: fixed
  bottom: 0
  left: 0
  right: 0
  height: 100px
  display: flex
  justify-content: center
  align-items: center
  
.icon
  height: 100%
  width: 100px
  display: flex
  align-items: center
  justify-content: center
  &:hover
    background-color: transparent
  svg
    width: 2rem
    height: @width
    
@media screen and (max-width: 768px)
  .egoist,.desc
    font-size: 1rem
  .egoist-desu
    font-weight: 300
  .avatar
    height: 40px
    width: @height
  .icons
    height: 40px
  .icon
    svg
      width: 1rem
      height: @width
</style>
