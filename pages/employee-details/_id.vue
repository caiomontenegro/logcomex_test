<template>
  <div>
    <page-section>
      <div class="employeeSection">
        <div class="employeeSection__content">
          <div class="employeeSection__intro">
            <h1>Detalhes do Usuário</h1>
          </div>
          <div class="employeeSection__details">
            <div class="employee"  v-if="employee">
              <div class="employee__leftSide">
                <img :src="employee.photo" alt="employee-image" class="employee__image">
              </div>
              <div class="employee__rightSide">
                <div class="employee__info">
                  <label rel="">ID:</label>
                  <div id="employee__id" class="employee__data">
                    <span>{{ employee.id }}</span>
                  </div>
                </div>
                <div class="employee__info">
                  <label rel="employee__name">Nome:</label>
                  <div id="employee__name" class="employee__data">
                    <span>{{ employee.name }}</span>
                  </div>
                </div>
                <div class="employee__info">
                  <label rel="employee__office">Cargo:</label>
                  <div id="employee__office" class="employee__data">
                    <span>{{ employee.office }}</span>
                  </div>
                </div>
                <div class="employee__info">
                  <label rel="employee__description">Descrição:</label>
                  <div id="employee__description" class="employee__data">
                    <span>{{ employee.description }}</span>
                  </div>
                </div>
              </div>
            </div>
            <p v-else class="notFound">
              Funcionário Não Encontrado.
            </p>
          </div>
        </div>
      </div>
    </page-section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      employee: null
    };
  },
  async asyncData({ params }) {
    try {
      const response = await axios.get(`https://logcomex-test-58861-default-rtdb.firebaseio.com/employees/${params.id}.json`)
      const fields = response.data
      return {
        employee: {
          id: fields.id,
          name: fields.name,
          photo: fields.photo,
          office: fields.office,
          description: fields.description
        }
      };
    } catch (error) {
      console.error('Error to get employees, consult the developer Caio Montenegro: caio.dev17@gmail.com', error)
      return { employee: null }
    }
  }
}
</script>

<style lang="scss">

.employeeSection {
  background-image: url("@/assets/img/logcomex_laptop.png");
  background-repeat: none;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(4, 0, 17, 0.671);
    z-index: 0;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 70px;
    z-index: 1;
  }
}

.employee {
  display: flex;
  flex-direction: column;
  background-color: $background-glass-color;
  border: 1px solid $accent-color;
  border-radius: 12px;
  padding: 12px;
  min-width: 300px;
  gap: 30px;


  &__leftSide {
    display: flex;
    justify-content: space-evenly;
  }

  &__image{
    border-radius: 50%;
  }

  &__rightSide {
    display: flex;
    flex-direction: column;
  }

  &__info {
    display: flex;
  }

  &__data {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    border-bottom: 1px solid rgba(255, 255, 255, 0.452);
  }
}

@media(min-width: 1000px) {
}
</style>
