<template>
  <div>
    <page-section>
      <div class="hero">
        <div class="hero__content">
          <div class="presentation">
            <h1 class="presentation__title">Teste Front-End</h1>
            <p class="presentation__description">Seja Bem vindo ao teste de <span class="presentation__description-strong">front-end</span> para<span class="presentation__description-company"> Logcomex</span>. Sinta-se à vontade!</p>
            <links-special-link text-content="Documentation" linkAdress="#"></links-special-link>
          </div>
        </div>
      </div>
    </page-section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url("@/assets/img/fox_broker-mirrored.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 650px;

  &__content {
    width: 80%;
  }
}

.presentation {
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 400;
  width: 220px;
  padding-top: 70px;

  &__title {
    font-size: 26px;
  }

  &__description {
    font-size: 24px;
    margin-bottom: 55px;

    &-strong {
      font-weight: 700;
    }

    &-company {
      font-weight: 1000;
      font-size: 30px;
      color: $accent-color;
      text-shadow: 0px 0px 5px $primary-color;
    }
  }
}

@media(min-width: 1000px) {

  .hero {
    background-image: url("@/assets/img/fox_broker.png");
    height: 700px;

    
    &__content {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }

  .presentation {
    width: 40%;

    &__description {
      margin-bottom: 30px;
    }
  }

}
</style> 