<template>
  <nav class="sticky">
    <a><router-link to="/#Accueil"><img src="/src/assets/Media/LogoPF.png" alt="logo PF portfolio"></router-link></a>
    <ul>
      <li><router-link to="/#apropos">À propos</router-link></li>
      <li><router-link to="/#competences">Compétences</router-link></li>
      <li><router-link to="/#realisations">Réalisations</router-link></li>
      <li><router-link to="/#contact">Contact</router-link></li> 
      </ul>
  </nav>
</template>

<script>
   export default {
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>



img{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-left: 49%;
  margin-bottom: 10px;
  margin-top: 10px;
}

img:hover{
  box-shadow: 0 1px 20px cyan;
}

nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
}

nav ul li a:hover{
  background-color: rgb(27, 27, 27);
  box-shadow: 0 1px 20px cyan;
  transition: 0.5s;
  
}

.sticky {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: rgb(20, 20, 20);
}
</style>