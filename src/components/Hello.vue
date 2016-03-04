<template lang='jade'>
  div.hello
    h1.title {{ msg }}
    h2.subtitle {{ tagline }}
</template>

<style lang='sass' scoped>
  .hello
    color: blue
    h1
      text-shadow: 0px 0px 50px grey
</style>

<script>
export default {
  props: {
    'msg': String,
    'tagline': String
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      test: 'Hello Mark!'
    }
  }
}
</script>
