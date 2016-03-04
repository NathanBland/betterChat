<template>
  <div id='bgCanvas'></div>
</template>
<style lang='sass'>
.hero canvas
  position: absolute
  overflow: hidden
  top: 0px
  left: 0px
  width: 100%
</style>

<script>
import Trianglify from '../../node_modules/trianglify'
export default {
  name: 'myCanvas',
  props: ['location'],
  computed: {
    canvas: function () {
      var location = this.$route.path
      return Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        seed: location
      })
    }
  },
  ready: function () {
    console.log(this.canvas)
    console.log(this)
    var holder = document.querySelector('.hero')
    holder.insertBefore(this.canvas.canvas(), holder.firstChild)
  }
}

</script>