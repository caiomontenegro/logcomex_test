<template>
  <div>
    <page-section class="employeesSection">
      <div class="employeesSection__content">
        <h1>Lista de Funcionários</h1>
        <div class="employeeTable">
          <div class="employeeTable__row" v-for="employee in employees" :key="employee.id">
            <div class="employeeTable__cel">{{ employee.id }}</div>
            <div class="employeeTable__cel">{{ employee.name }}</div>
            <div class="employeeTable__cel">
              <NuxtLink class="employeeLink" to="#" target="_self">detalhes</NuxtLink>
            </div>
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
      filter: null,
      employees: [
        {
          id: 0,
          name: 'Caio',
          photo: '',
          office: 'Desenvolvedor',
          description: 'Desenvolvedor front-end'
        },
        {
          id: 1,
          name: 'Fernando',
          photo: '',
          office: 'Desenvolvedor',
          description: 'Desenvolvedor Back-end'
        },
        {
          id: 2,
          name: 'Gustavo',
          photo: '',
          office: 'Designer',
          description: 'UX/UI web designer'
        },
        {
          id: 3,
          name: 'Liza',
          photo: '',
          office: 'Desenvolvedor',
          description: 'Desenvolvedor front-end'
        },
        {
          id: 4,
          name: 'Marta',
          photo: '',
          office: 'Líder Tecnico',
          description: 'Liderança do time'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.employeesSection {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;

  &__content {
    width: 80%;
  }
}

.employeeTable {
  display: flex;
  flex-direction: column;
  border-radius: 3px;

  &__row {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  &__cel {
    display: flex;
    padding: 4px;
    border: 1px solid;
    
    
    &:nth-child(1) {
      justify-content: center;
      width: 48px;
    }

    &:nth-child(2) {
      padding-left: 10px;
      flex-grow: 1;
    }
  }

  .employeeLink {
    color: $text-color;
    text-decoration:none;
  }
}

</style>