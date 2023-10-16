<template>
    <div class="max-xl:text-sm max-xl:mx-0 text-black bg-red py-5 px-10 flex items-center justify-between mx-12">
        <div class="block">
          <span class="max-xl:text-xl block text-4xl font-black">❌ ⭕ ❌ ⭕</span>
          <span class="max-xl:w-4">Vous êtes connecté(e) en tant que cyrusDev</span>
        </div>
        <div class="block">
          <span class="block">Deconnexion</span>
          <RouterLink to="/">Acceuil</RouterLink>
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
    
  
  </style>
  