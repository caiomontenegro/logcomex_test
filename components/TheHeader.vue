<template>
  <header>
    <nav :class="['navigation', {'navigation__actived': showMenu}]">
      <div class="navigation__head">
        <div class="navigation__logo">
          <NuxtLink to="/" target="_self">
            <img src="~/assets/img/logcomex_novo_logotipo.svg" alt="logoimg" width="150px">
          </NuxtLink>
        </div>
        <buttons-burguer-button @click="menuToggle" :activeButton="showMenu"></buttons-burguer-button>
      </div>
      <div :class="['navigation__links', {'navigation__linksShowed': showMenu}]">
        <ul class="navigation__default">
          <li v-for="link in navLinks" :key="link.id" class="navigation__li">
            <NuxtLink :to="link.linkAddress" class="navigation__simpleLink" target="_self">
              {{ link.linkText }}
            </NuxtLink>
          </li>
        </ul>
        <div class="navigation__special">
          <links-special-link :textContent="companyName" :linkAdress="linkAddress" class="navigation__specialLink" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // Insert the company name
      companyName: 'Company Name',
      // Add a main company url page
      linkAddress: '#',
      showMenu: false,
      // Add your simples navigation links
      navLinks: [
        {
          id: 0,
          linkText: 'feature 01',
          linkAddress: '#'
        },
        {
          id: 1,
          linkText: 'feature 02',
          linkAddress: '#'
        }
      ]
    }
  },
  methods: {
    menuToggle() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>

header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid $accent-color;
  border-radius: 0px 0px 25px 25px;
  width: 100%;
  position: fixed;
  top: 0px;
  background: $background-glass-color;
  backdrop-filter: blur(2px);
  transition: 0.5s;

  &__actived {
    background: $background-header-color;
  }


  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

  }

  &__links {
    display: flex;
    height: 0vh;
    overflow: hidden;
    pointer-events: none;
    transition: 0.5s;
    justify-content: space-around;
    flex-direction: column;
    transition: 0.5s;
    width: 80%;

  }
  
  &__linksShowed {
    height: 100vh;
    pointer-events: auto;
    border-top: 2px solid $accent-color;
  }
  
  &__default {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0;
    gap: 30px;
  }
  
  &__li {
    list-style-type: none;
    border-bottom: 2px solid $accent-color;
  }
  
  &__simpleLink {
    color: $text-color;
    text-decoration: none;
    font-size: 24px;
    font-weight: 450;
  }

  &__special {
    display: flex;
    justify-content: center;
    padding: 6px 6px;
  }

  &__specialLink {
    width: 100%;
  }
}

@media(min-width: 1000px) {

  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .navigation {
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 0px 30px ;
    width: 80%;
    border-bottom: 2px solid $accent-color;


    &__actived {
      background: $background-glass-color;
    }
    
    &__head {
      width: auto;
    }
    
    &__links {
      height: auto;
      width: auto;
      display: flex;
      pointer-events: auto;
      flex-direction: row;
      gap: 200px;
    }

    &__linksShowed {
    border-top: none;
  }

    &__default {
      flex-direction: row;
      align-items: center;
    }

    &__li {
      border-bottom: 0px;
    }

    &__simpleLink {
      font-size: 14px;
      font-weight: bold;
    }

    &__specialLink {
      font-size: 12px;
    }

    &__linksShowed{
      flex-direction: row;
    }
}

}

</style>