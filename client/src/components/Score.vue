<template>
    <div class="flex justify-center mb-2">
        <h1 class="text-md">CODE PARTIE :<span class="font-bold ml-2">XRANDR89</span></h1>
    </div>
    <div class="text-black bg-yellow bg-red border border-slate-500 rounded-xl flex items-center justify-between mx-24">
        <div class="grid grid-cols-2 w-full">
            <div class="flex items-center justify-between p-5">
                <span class="font-black text-xl">cyrusDev</span>
                <span class="font-black text-2xl">0</span>
                <span class="xoxo font-black text-4xl">❌</span>
            </div>
            <div class="border-l border-slate-500 flex items-center justify-between p-5">
                <span class="xoxo font-black text-4xl">⭕</span>
                <span class="font-black text-2xl">2</span>
                <span class="font-black text-xl">xoxoIA</span>
            </div>
        </div>
    </div>
    <div class="flex justify-center mb-2 mt-2">
        <h1 class="text-xl">C'est au tour de <span class="font-bold">cyrusDev</span> de jouer !</h1>
        <button @click="closePopup" class="btn mx-2 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-1 px-4">Rejouer !</button>
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
    .xoxo{
        color: var(--color-one);
    }

    i{
      color: var(--color-one)
    }
    span, i{
      cursor: pointer;
    }
    .btn{
      background-color: var(--color-one);
    }
    .btn:hover{
      background-color: var(--color-two);
    }
  
  </style>
  