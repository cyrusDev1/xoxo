<template>
  <main>
    <div class="flex items-center justify-center h-screen">
        <div>
          <button class="border px-6 py-3 rounded text-white w-72 block mb-3 font-black hover:bg-inherit">MODE SOLO</button>
          <button class="border px-6 py-3 rounded text-white w-72 block mb-3 font-black hover:bg-inherit">MODE MULTIJOUEUR</button>
          <div class="flex w-72 bg-white rounded mb-2">
            <input class="border px-6 py-3 font-black border-none outline-none w-64 uppercase" placeholder="Entrez un code partie">
            <i class="flex text-xl items-center text-center justify-center font-black fa fa-send"></i>
          </div>
        </div>
    </div>
    <div @click.stop class="fixed bottom-0 right-0 p-4">
      <button @click="openPopup('login')" class="bg-blue-500 border mx-2 hover:bg-inherit text-white font-bold py-2 px-4 rounded">Connexion</button>
      <button @click="openPopup('signup')" class="bg-green-500 border hover:bg-inherit text-white font-bold py-2 px-4 rounded">Inscription</button>
    </div>
    <div v-if="isOpen" @click="closePopup" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div @click.stop  class="bg-white w-72 p-8 rounded shadow-md relative">
          <span @click="closePopup" class="absolute top-1 right-2 text-xl fa fa-close text-blac p-1 rounded-full"></span>
          <div v-if="showLogin"> 
            <form class="">
              <h1 class="mb-2">Connectez vous à votre compte</h1>
              <label class="block mb-3">
                <span class="block text-sm font-medium textslate-700">Username</span>
                <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="cyrusDev">
              </label>
              <label class="block mb-3">
                <span class="block text-sm font-medium textslate-700">Mot de passe</span>
                <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="********">
              </label>
              <label class="flex justify-end">
                <button @click="closePopup" class="sign mx-0 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Connexion</button>
              </label>
            </form>
          </div>
          <div v-else>
            <form class="">
              <h1 class="mb-2">Inscrivez vous sur XOXO</h1>
              <label class="block mb-3">
                <span class="block text-sm font-medium textslate-700">Username</span>
                <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="cyrusDev">
              </label>
              <label class="block mb-3">
                <span class="block text-sm font-medium textslate-700">Mot de passe</span>
                <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="********">
              </label>
              <label class="block mb-3">
                <span class="block text-sm font-medium textslate-700">Confirmer le mot de passe</span>
                <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="********">
              </label>
              <label class="flex justify-end">
                <button @click="closePopup" class="sign mx-0 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Inscription</button>
              </label>

            </form>
          </div>
        </div>
    </div>
  </main>
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
    openPopup(form){
      this.isOpen = true;
      this.showLogin = form === 'login'
    },
    closePopup(){
      this.isOpen = false;
    }
  }
}
</script>
<style scoped>
  button{
    background-color: var(--color-two);
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
