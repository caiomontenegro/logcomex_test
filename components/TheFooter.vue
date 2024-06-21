<template>
<div class="footer">
  Desenvolvido por <a href="https://www.linkedin.com/in/caio-montenegro/" target="_blank" class="footer__link">Caio Montenegro</a>
</div>
</template>

<style lang="scss" scoped>

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: $text-color;
  background-color: $accent-color;
  border-top: 1px solid $background-color;
  display: flex;
  justify-content: center;
  gap: 5px;

  &__link {
    text-decoration: none;
    color: $text-secundaryColor;
    font-weight: 700;
  }

}
</style>