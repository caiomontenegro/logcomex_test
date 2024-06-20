<template>
  <div>
    <page-section>
      <div class="hero">
        <div class="hero__content">
          <div class="presentation">
            <h1 class="presentation__title">Teste Front-End</h1>
            <p class="presentation__description">Seja Bem vindo ao teste de <span class="presentation__description-strong">front-end</span> para<span class="presentation__description-company"> Logcomex</span>. Sinta-se à vontade!</p>
            <links-special-link text-content="Documentação" linkAdress="https://github.com/caiomontenegro/logcomex_test"></links-special-link>
          </div>
        </div>
      </div>
    </page-section>
    <page-section>
      <div class="features">
        <div class="features__content">
          <div class="features__intro">
            <div class="features__title">
              <client-only>
                <b-icon-lightning-charge class="icon"></b-icon-lightning-charge>
              </client-only>
              <h2>Funcionalidades</h2>
            </div>
            <p class="features__description">Essa aplicação, é um teste para a posição de Front-end Vue.js. Confira todas as funcionalidades que compõem o teste</p>
          </div>
          <div class="features__list">
            <containers-feature-card
              v-for="feature in features" :key="feature.id"
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            >
            </containers-feature-card>
          </div>
        </div>
      </div>
    </page-section>
    <page-section>
      <div class="technologies">
        <div class="technologies__content">
          <div class="technologies__intro">
            <div class="technologies__title">
              <client-only>
                <b-icon-laptop class="icon"></b-icon-laptop>
              </client-only>
              <h2>Technologias e ferramentas utilizadas</h2>
            </div>
          </div>
          <div class="technologies__list">
          </div>
        </div>
      </div>
    </page-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: 0,
          icon: 'card-list',
          title: 'Lista de Funcionários',
          description: 'Verique a lista de todos os funcionários registrados em sua empresa'
        },
        {
          id: 1,
          icon: 'clipboard-data',
          title: 'Dados do Funcionário',
          description: 'Acesse os principais dados de seus funcionários com um clique'
        },
      ],
    }
  }
}
</script>

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

.features {
  background-color: $primary-color;
  color: $text_secundaryColor;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 0px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 80%;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;

    h2 {
      font-size: 30px;
      margin: 0px;
    }
  }

  &__description {
    font-size: 20px;
    margin-bottom: 40px;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 25px;
  }
}

.technologies {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 0px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 80%;
  }

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      padding-top: 10px;
      text-align: center;
    }
  }

  &__list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
  }
}

.icon {
  color: $accent-color;
  font-size: 35px;
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

  .features {
    &__content {
      display: flex;
    }

    &__intro {
      display: flex;
      align-items: start;
      flex-direction: column;
    }

    &__title {
      font-size: 34px;
    }

    &__description {
      font-size: 24px;
      max-width: 400px;
      text-align: start;
    }

    &__list {
      display: flex;
      flex-direction: row;
      gap: 30px;
    }
  }

}
</style> 