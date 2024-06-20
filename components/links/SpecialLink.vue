<template>
  <a :href="linkAdress" class="link">
    <div class="link__special">
      {{ textContent }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    textContent: {
      type: String, 
      required: true,
    },
    linkAdress: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">

.link {
  background-color: $background-color;
  border: 3px solid $accent-color;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 16px;
  gap: 5px;
  transition: 0.2s;
  text-decoration: none;

  &__special {
    color: $text-color;
  }
}

@media(min-width: 1000px) {
  .link {
    box-shadow: 0px 0px 0px;
    border: 2px solid $accent-color;


    &:hover {
      box-shadow: 0px 0px 15px rgb(219, 37, 16);
    }
  }
}

</style>