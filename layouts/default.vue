<template>
  <div class="page">
    <the-header />
    <main>
      <nuxt />
    </main>
    <!-- <the-footer /> -->
  </div>
</template>

<style lang="scss">

body {
  margin: 0px;
  font-family: "Red Hat Display", sans-serif;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: $text-color;
}

@media(min-width: 1000px) {
}

</style>