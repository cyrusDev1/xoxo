  <template>
    <div class="flex justify-center mb-2 mt-2">
        <h1 class="text-xl">C'est au tour de <span class="font-bold">cyrusDev</span> de jouer !</h1>
        <button class="btn mx-2 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-1 px-4">Rejouer !</button>
    </div>
    <div class="grid grid-cols-3 mx-24">
        <div v-for="(row, y) in grid" :key="y">
            <div v-for="(cell, x) in row" :key="x" class="bg-gray-200 p-4 border border-gray-400 aspect-square flex items-center justify-center">
                <span v-if="cell === 'X'">❌</span>
                <span v-else-if="cell === 'O'">⭕</span>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      game: Array
    },
    components: {
  
    },
    data() {
      return {
        //grid: this.game.grid
      }
    },
    mounted() {
  
    },
    
    computed: {
        grid(){
            return this.game.grid
        }
    },

    created() {
        console.log(this.grid)
      
    },
  
    methods: {
     
    }
  }
  </script>
  <style scoped>
    .btn{
      background-color: var(--color-one);
    }
    .btn:hover{
      background-color: var(--color-two);
    }
  
  </style>
  