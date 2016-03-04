<template lang='jade'>
section.hero.is-info.is-medium
  // Hero header: will stick at the top
  .hero-header
    header.header
      .container
        .header-left
          a.header-item(v-link="{path: '/'}") bC
        span.header-toggle
          span
          span
          span
        .header-right.header-menu
          span.header-item
            a.is-active(v-link="{path: '/'}") Home
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
