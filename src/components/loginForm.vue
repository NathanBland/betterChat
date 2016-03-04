<template lang='jade'>
  .content.is-flex.is-centered
    div.loginForm
      h1.title Get Started
      p Toss us your email address and we'll make you an account. No password required.
        a  How does this work?
      form.column
        label.label(for='loginFieldEmail') E-mail Address
        p.control.has-icon.is-grouped
          input#loginFieldEmail.input(type='email', name='email', placeholder='joe@smith.com', autofocus=true)
          i.fa.fa-envelope
        button.button.is-danger(type='submit') Start talking
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
    }
  }
}
</script>
