<template>
  <section id="about" class='section'>
    <div class='container'>
      <hello msg='Welcome' tagline='To a better system'></hello>
      <p>
        Welcome to your Vue.js app. To get started, take a look at the
        <a href="https://github.com/vuejs-templates/webpack#folder-structure" target="_blank">README</a>
        of this template. If you have any issues with the setup, please file an issue at this template's repository.
      </p>
    </div>
  </section>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'Home',
  components: {
    Hello
  }
}
</script>

<style lang='sass'>
</style>
