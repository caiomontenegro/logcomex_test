<template>
  <div class="technology">
    <i :class="[icon, 'technology__icon']"></i>
    <h3 class="technology__title">{{ title }}</h3>
    <span class="technology__description">{{ description }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

.technology {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    font-size: 35px;
    color: $accent-color;
    text-shadow: 0px 0px 25px $accent-color;
  }

  &__description {
    font-weight: 600;
    color: $accent-color;
  }
}

</style>