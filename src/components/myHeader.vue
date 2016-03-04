<template lang='jade'>
section.hero.is-info.is-medium
  // Hero header: will stick at the top
  my-canvas(location='{{$route.path}}')
  .hero-header
    header.header
      .container
        .header-left
          a.header-item(v-link="{path: '/', exact: true }") bC
        span.header-toggle
          span
          span
          span
        .header-right.header-menu
          span.header-item
            a(v-link="{path: '/', exact: true }") Home
          span.header-item
            a(v-link="{path: '/about'}") About
          span.header-item
            a(href='https://github.com/NathanBland/betterChat').button.is-info
              i.fa.fa-github
  // Hero content: will be in the middle
  .hero-content
    .container
      h1.title better-Chat
      h2.subtitle Communicating should be easy.
  // Hero footer: will stick at the bottom
</template>
<style lang='sass'>
</style>

<script>
import myCanvas from './myCanvas'
export	default {
  name: 'myHeader',
  components: {
    myCanvas
  }
}
</script>