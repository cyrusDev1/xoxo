<template>
    <div class="flex justify-center mb-2">
        <h1 class="text-md">CODE PARTIE :<span class="font-bold ml-2">{{ game.code }}</span></h1>
    </div>
    <div class="text-black bg-yellow bg-red border border-slate-500 rounded-xl flex items-center justify-between mx-24">
        <div class="grid grid-cols-2 w-full">
            <div class="flex items-center justify-between p-5">
                <span class="font-black text-xl">{{ game.host }}</span>
                <span class="font-black text-2xl">{{ game.host_score }}</span>
                <span class="xoxo font-black text-4xl">❌</span>
            </div>
            <div class="border-l border-slate-500 flex items-center justify-between p-5">
                <span class="xoxo font-black text-4xl">⭕</span>
                <span class="font-black text-2xl">{{ game.guest_score }}</span>
                <span class="font-black text-xl">{{ game.guest }}</span>
            </div>
        </div>
    </div>
   
  </template>
  
  <script>
  
  export default {
    props:{
      game: Array
    },
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
    .xoxo{
        color: var(--color-one);
    }

    .btn{
      background-color: var(--color-one);
    }
    .btn:hover{
      background-color: var(--color-two);
    }
  
  </style>
  