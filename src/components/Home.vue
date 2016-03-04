<template lang='jade'> 
  section.section
    .container
      hello(msg='Welcome')
      p Start chatting with everyone important in your life.
  section.section
    .container
      login-form
</template>

<script>
import Hello from './Hello'
import loginForm from './loginForm'
export default {
  name: 'Home',
  components: {
    Hello,
    loginForm
  }
}
</script>

<style lang='sass'>
</style>
