<template>
  <head>
    <link rel='stylesheet' href='./static/bulma.min.css'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  </head>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
</template>

<script>
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang='sass'>
html
  height: 100%

.logo
  width: 100px
  height: 100px
.is-centered
  justify-content: center
.section
  padding: 40px 0
  z-index: 1
  position: relative
</style>
