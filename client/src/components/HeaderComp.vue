<template>
    <div class="text-black bg-red py-5 px-10 flex items-center justify-between mx-12">
        <div class="block">
          <span class="logo block text-4xl font-black">❌ ⭕ ❌ ⭕</span>
          <span>Vous êtes connecté(e) en tant que cyrusDev</span>
        </div>
        <div class="block">
          <span class="block">Deconnexion</span>
          <RouterLink to="/">Page d'acceuil</RouterLink>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    components: {
  
    },
    data() {
      return {
        isOpen: false,
        showLogin: true
      };
    },
    mounted() {
  
    },
  
    created() {
      
    },
  
    methods: {
     
    }
  }
  </script>
  <style scoped>
    .logo{
      color: var(--color-one);
    }
    i{
      color: var(--color-one)
    }
    span, i{
      cursor: pointer;
    }
    .sign{
      background-color: var(--color-one);
    }
    .sign:hover{
      background-color: var(--color-two);
    }
  
  </style>
  