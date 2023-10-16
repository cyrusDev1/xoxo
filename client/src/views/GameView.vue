<template>
    <main class="h-screen">
      <HeaderComp></HeaderComp>
      <Score></Score>

    </main>
  </template>
  
  <script>
  import HeaderComp from '../components/HeaderComp.vue';
  import Score from '../components/Score.vue';
  export default {
    components: {
        HeaderComp,
        Score,
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
    button{
      background-color: var(--color-two);
    }
    i{
      color: var(--color-one)
    }
    span, i{
      cursor: pointer;
    }
  
  </style>
  