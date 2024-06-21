<template>
<div class="footer">
  Desenvolvido por <a href="https://www.linkedin.com/in/caio-montenegro/" target="_blank" class="footer__link">Caio Montenegro</a>
</div>
</template>

<style lang="scss" scoped>

.footer {
  position: absolute;
  bottom: 1;
  width: 100%;
  color: $text-color;
  background-color: $background-glass-color;
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