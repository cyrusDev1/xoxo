<template>
    <main class="">
      <HeaderComp></HeaderComp>
      <Game></Game>
      <br><br><br><br><br>
    </main>
  </template>
  
  <script>
  import HeaderComp from '../components/HeaderComp.vue';
  import Game from '../components/Game.vue';
  export default {
    components: {
        HeaderComp,
        Game,
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
  main{
  background: var(--color-three);

}


  
  </style>
  