<template>
  <head>
    <link rel='stylesheet' href='./static/bulma.min.css'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  </head>
    <my-header></my-header>
    <router-view></router-view>
</template>

<script>
import myHeader from './components/myHeader'
export default {
  components: {
    myHeader
  }
}
</script>

<style lang='sass'>
html
  height: 100%

.logo
  width: 100px
  height: 100px
</style>
