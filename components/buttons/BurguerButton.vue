<template>
  <div @click="$emit('click')" :class="['burguerButton', {'activeBurguer': activeButton}]">
    <span class="burguerButton__line"></span>
    <span class="burguerButton__line"></span>
    <span class="burguerButton__line"></span>
  </div>
</template>

<script>
export default {
  props: {
    activeButton: {
      type: Boolean,
      require: true,
    }
  },
  watch: {
    activeButton(newValue) {
      this.activeButton = newValue
    }
  }
}
</script>

<style lang="scss">

.burguerButton {
  cursor: pointer;
  padding: 4px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 35px;
  width: 50px;
  border-radius: 3px;
  
  &__line {
    background-color: $text-color;
    border: none;
    height: 2px;
    width: 30px;
    transition: 0.3s;
  }
}

.activeBurguer span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 7px);
}
.activeBurguer span:nth-child(2) {
  opacity: 0;
}
.activeBurguer span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -7px);
}

@media(min-width: 1000px) {
  .burguerButton {
    display: none;
  }
}

</style>