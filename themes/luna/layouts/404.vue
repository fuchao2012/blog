<template>
  <div class="notfound">
    <h1>Page Not Found :(</h1>
    <span v-if="isDemo">maybe it's moved to <a :href="demoURL" target="_blank">{{ demoURL }}</a></span>
    <div class="backhome">
      <router-link to="/">← Back to HomePage</router-link>
    </div>
  </div>
</template>

<script>
const DEMO_RE = /^\/([\w\-]+)$/
export default {
  computed: {
    isDemo() {
      return DEMO_RE.test(this.$route.path)
    },
    demoURL() {
      return this.isDemo && `https://${DEMO_RE.exec(this.$route.path)[1]}.egoist.rocks`
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: Helvetica;
  font-weight: 300;
  font-size: 3rem;
}

.notfound {
  max-width: 500px;
  margin: 0 40px;
}

.backhome {
  margin: 20px 0;
}
</style>