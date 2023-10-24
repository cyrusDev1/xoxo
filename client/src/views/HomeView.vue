<template>
  <main>
    <div class="flex items-center justify-center h-screen">
      <div>
        <button @click="newGame('solo')"
          class="border px-6 py-3 rounded text-white w-72 block mb-3 font-black hover:bg-inherit">MODE SOLO</button>
        <button @click="newGame('multi')"
          class="border px-6 py-3 rounded text-white w-72 block mb-3 font-black hover:bg-inherit">MODE
          MULTIJOUEUR</button>
        <div class="flex w-72 bg-white rounded mb-2">
          <input v-model="codePartie" @keyup.enter="searchGame" class="border px-6 py-3 font-black border-none outline-none w-64 uppercase"
            placeholder="Entrez un code partie">
          <i @click="searchGame" class="flex text-xl items-center text-center justify-center font-black fa fa-send"></i>
        </div>
      </div>
    </div>
    <div @click.stop class="fixed bottom-0 right-0 p-4">
      <button @click="openPopup('login')"
        class="bg-blue-500 border mx-2 hover:bg-inherit text-white font-bold py-2 px-4 rounded">Connexion</button>
      <button @click="openPopup('signup')"
        class="bg-green-500 border hover:bg-inherit text-white font-bold py-2 px-4 rounded">Inscription</button>
    </div>
    <div v-if="isOpen" @click="closePopup"
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div @click.stop class="bg-white w-72 p-8 rounded shadow-md relative">
        <span @click="closePopup" class="absolute top-1 right-2 text-xl fa fa-close text-blac p-1 rounded-full"></span>
        <div v-if="showLogin">
          <form @submit.prevent='login' class="">
            <h1 class="mb-2">Connectez vous à votre compte</h1>
            <label class="block mb-3">
              <span class="block text-sm font-medium textslate-700">Username</span>
              <input v-model="loginData.username" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="cyrusDev">
            </label>
            <label class="block mb-3">
              <span class="block text-sm font-medium textslate-700">Mot de passe</span>
              <input v-model="loginData.password" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="********">
            </label>
            <label class="flex justify-end">
              <button
                class="sign mx-0 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Connexion</button>
            </label>
          </form>
        </div>
        <div v-else>
          <form @submit.prevent='register' class="">
            <h1 class="mb-2">Inscrivez vous sur XOXO</h1>
            <label class="block mb-3">
              <span class="block text-sm font-medium textslate-700">Username</span>
              <input v-model="registerData.username" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="cyrusDev">
            </label>
            <label class="block mb-3">
              <span class="block text-sm font-medium textslate-700">Mot de passe</span>
              <input v-model="registerData.password" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="********">
            </label>
            <label class="block mb-3">
              <span class="block text-sm font-medium textslate-700">Confirmer le mot de passe</span>
              <input v-model="registerData.confirmPassword" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="********">
            </label>
            <label class="flex justify-end">
              <button
                class="sign mx-0 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Inscription</button>
            </label>

          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import req from '../store/index.js';

export default {
  components: {

  },
  data() {
    return {
      Loading: true,
      isOpen: false,
      showLogin: true,
      user: [],
      codePartie: '',
      registerData: {
        username: '',
        password: '',
        confirmPassword: '',
      },
      loginData: {
        username: '',
        password: ''
      }
    };
  },
  mounted() {

  },

  created() {
    this.getUser()
  },

  methods: {

    isLogin() {
      return this.$cookies.get('id') ? true : false
    },

    openPopup(form) {
      this.isOpen = true;
      this.showLogin = form === 'login'
    },

    closePopup() {
      this.isOpen = false;
    },

    login(){
      const data = this.loginData
      if (data.username && data.password) {
            req({
              method: "post",
              url: "/login",
              data: data
            }).then(response => {
              console.log(response.data)
              this.$cookies.set('id', response.data.id);
              this.$router.push('stats')
            }).catch(error => {
              if (error.response) {
                this.$notify({
                  text: error.response.data.error,
                  type: 'error',
                  duration: 4000,
                });
              }
            })
      } else {
        this.$notify({
          text: 'Remplissez tous les champs !',
          type: 'info',
          duration: 4000,
        });
      }
    },

    register() {
      const data = this.registerData
      if (data.username && data.password && data.confirmPassword) {
        if (data.password === data.confirmPassword) {
          if (data.username.length >= 4 && data.password.length) {
            req({
              method: "post",
              url: "/register",
              data: data
            }).then(response => {
              console.log(response.data)
              this.$cookies.set('id', response.data.id);
              this.$router.push('stats')
            }).catch(error => {
              if (error.response) {
                this.$notify({
                  text: error.response.data.error,
                  type: 'error',
                  duration: 4000,
                });
              }
            })
          } else {
            this.$notify({
              text: 'Mot de passe ou username trop court !',
              type: 'info',
              duration: 4000,
            });
          }
        } else {
          this.$notify({
            text: 'Confirmer bien votre mot de passe !',
            type: 'info',
            duration: 4000,
          });
          //this.$router.push('/my-stories')
        }
      } else {
        this.$notify({
          text: 'Remplissez tous les champs !',
          type: 'info',
          duration: 4000,
        });
      }
    },

    getUser(){
      this.Loading = false
      if(this.isLogin()){
        const id = this.$cookies.get('id')
      req.get(`/user/${id}`).
       then(response => {
         console.log(response.data)
         this.user = response.data
         this.Loading = false
       }).catch(error => {
         console.log(error.response)
       })
      }
    },

    newGame(mode) {
      let host = ""
      if (mode == "multi") {
        if (this.isLogin()) {
          host = this.user.username;
        } else {
          this.$notify({
            text: 'Vous devez d\'abord vous connecter !',
            type: 'info',
            duration: 4000,
          });
        }
      } else {
        host = "Hôte"
        if (this.isLogin()) {
          host = this.user.username;
        } 
      }
      const type = "challenge";
      let guest = "Invité(e)";
      const data = { type, mode, host, guest }
      req({
        method: "post",
        url: "/newgame",
        data: data
      }).then(response => {
        console.log(response.data)
        this.$router.push(`game/${response.data.id}`)
      }).catch(error => {
        if (error.response) {
          console.log(error.response)
        }
      })
    },
    searchGame(){
      let username = ""
      if(this.isLogin()){
        username = this.user.username
      }
      const code = this.codePartie.toUpperCase()
      req({
        method: "post",
        url: "/game",
        data: { code, username }
      }).then(response => {
        console.log(response.data)
        this.$router.push(`game/${response.data._id}`)
      }).catch(error => {
        if (error.response) {
          console.log(error.response)
          this.$notify({
            text: error.response.data.error,
            type: 'error',
            duration: 4000,
          });
        }
      })
    }
  }
}
</script>
<style scoped>
button {
  background-color: var(--color-two);
}

i {
  color: var(--color-one)
}

span,
i {
  cursor: pointer;
}

.sign {
  background-color: var(--color-one);
}

.sign:hover {
  background-color: var(--color-two);
}
</style>
