<template>
    <main class="h-screen">
      <HeaderComp></HeaderComp>
      <Score :game="game"></Score>
      <Grid :game="game"></Grid>
    </main>
  </template>
  
  <script>
  import HeaderComp from '../components/HeaderComp.vue';
  import Score from '../components/Score.vue';
  import Grid from '../components/Grid.vue'
  import req from '../store'
  export default {
    components: {
        HeaderComp,
        Score,
        Grid
  },
    data() {
      return {
        game: []
      };
    },
    mounted() {
      console.log(this.$route.params.id)
    },
  
    created() {
      this.getGame()
    },
  
    methods: {
     getGame(){
       console.log(this.$route.fullPath)
       req.get(this.$route.fullPath).
       then(response => {
         console.log(response.data)
         this.game = response.data
         this.Loading = false
       }).catch(error => {
         console.log(error.response)
       })
     },

     updateGrid(newGrid){
      this.game.grid = newGrid()
     }
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
  