<template lang='jade'>
footer.footer
  .container
    .content.is-flex.is-centered
      p
        a.icon(href='https://github.com/nathanbland/betterChat')
          i.fa.fa-github
        strong betterChat, created by
        a(href='https://NathanBland.github.io')  Nathan Bland
        a(href='http://opensource.org/licenses/mit-license.php')  MIT
</template>
<style lang='sass'>
footer.footer
  background-color: #303030
  strong
    color: white
</style>

<script>
export default {
  name: 'myFooter'
}
</script>
