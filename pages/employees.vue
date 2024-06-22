<template>
  <div>
    <page-section>
      <div class="employeesSection">
        <div class="employeesSection__content">
          <div class="employeesSection__intro">
            <h1>Lista de Funcionários</h1>
            <p>Confira abaixo sua lista de funcionários cadastrados.</p>
          </div>
          <client-only>
            <div class="employessSection__table">
              <form action="" class="searchForm">
                <label for="inputSearch" class="searchForm__label">Filtrar:</label>
                <input type="search" id="inputSearch" placeholder="Digite seu filtro aqui" v-model="filter" class="searchForm__input">
              </form>
              <b-table hover :items="filteredItems" :fields="fields" table-class="table">
                <template #cell(actions)="data">
                  <button @click="employeeRedirect(data.item.ID)" class="table__details">Detalhes</button>
                </template>
              </b-table>
              <div class="tableFooter"></div>
            </div>
          </client-only>
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
      fields: [
        {key: 'ID', label: 'ID'},
        {key: 'Nome', label: 'Nome'},
        {key: 'Cargo', label: 'Cargo'},
        {key: 'actions', label: 'Detalhes'},
      ],
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
  },
  methods: {
    employeeRedirect(employeeId) {
      this.$router.push({ name: 'employee-details-id', params: { id: employeeId } })
    }
  }
}
</script>

<style lang="scss">

.employeesSection {
  position: relative;
  background-image: url("@/assets/img/logcomex_back.png");
  background-repeat: none;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(4, 0, 17, 0.788);
    z-index: 0;
  }

  &__content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    z-index: 1;
    
  }

  &__table {
    padding: 80px;
    background-color: $accent-color;
    border-radius: 15px;
    }
}

.searchForm {
  background: $accent-color;
  border-radius: 15px 0px 0px 0px;
  padding: 8px 12px;
  display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

  &__input {
    border: none;
    border-radius: 3px;
    padding-left: 6px;
  }
}

.table {
  font-size: 12px;
  margin-bottom: 0px;

  &__details {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    color: $accent-color;
    font-weight: 600;
  }

  td {
    vertical-align: middle;

    &:nth-child(1) {
      text-align: center;
    }

    &:nth-child(4) {
      text-align: center;
    }
  }
}

.tableFooter {
  height: 16px;
  border-radius: 0px 0px 15px 0px;
  background-color: $accent-color;
}

@media(min-width: 1000px) {
  .employessSection {
    justify-content: center;

    &__table {
      align-self: center;
      width: 80%;
    }
  }

  .searchForm {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .table {
    font-size: 16px;

    td:nth-child(1) {
      padding-left: 16px;
      text-align: start;
    }
    td:nth-child(4) {
      text-align: start;
    }
  }
}

</style>