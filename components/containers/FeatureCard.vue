<template>
  <div class="theFeature">
    <div class="theFeature__title">
      <client-only>
        <b-icon :icon="icon" class="icon"></b-icon>
      </client-only>
      <h3>
        {{ title }}
      </h3>
    </div>
    <div class="theFeature__description">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false
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

<style lang="scss" scoped>

.theFeature {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  border: 2px solid $border-color;
  box-shadow: 0px 0px 25px $border-color;
  border-radius: 12px;


  &__title {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    margin-bottom: 10px;
  }
}

.icon {
  color: $accent-color;
  font-size: 35px;
}

@media(min-width: 1000px) {
  .theFeature {
    min-height: 250px;
    max-width:  400px;
  }
}
</style>