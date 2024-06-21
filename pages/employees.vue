<template>
  <div>
    <page-section class="employeesSection">
      <div class="employeesSection__content">
        <div class="employeesSection__intro">
          <h1>Lista de Funcionários</h1>
          <p>Confira abaixo sua lista de funcionários cadastrados.</p>
        </div>
        <div class="employessSection__table">
          <form action="" class="searchForm">
            <label for="inputSearch">Pesquisar</label>
            <input type="search" id="inputSearch" placeholder="Digite para Pesquisar" v-model="filter">
          </form>
          <b-table :items="filteredItems"></b-table>
        </div>
      </div>
    </page-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: '',
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
          name: 'Naura',
          photo: '',
          office: 'Líder Tecnico',
          description: 'Liderança do time'
        }
      ]
    }
  },
  computed: {
    employeesTableData() {
      return this.employees.map(employee => ({
        ID: employee.id,
        Nome: employee.name,
        Cargo: employee.office
      }))
    },
    filteredItems() {
      return this.employeesTableData.filter(employee => {
        return Object.values(employee).some(val =>
          String(val).toLowerCase().includes(this.filter.toLowerCase())
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.employeesSection {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  height: 100vh;

  &__content {
    width: 80%;
  }

  &__table {
    padding: 80px;
    background-color: $accent-color;
  }
}

.searchForm {
  background: $accent-color;
  padding: 4px 12px;
}



</style>