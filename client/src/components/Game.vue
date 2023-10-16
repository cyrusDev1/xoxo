<template>
    <div class="max-xl:mx-0 max-xl:block  text-black bg-red py-5 px-10 flex mx-12">
        <div class="max-xl:w-full grid grid-cols-2 w-1/3 gap-2">
            <div class="border rounded-md border-slate-400 px-6 py-2">
                <span class="text-xl block text-center">Point(s) </span>
                <span class="text-3xl font-bold block text-center">✨</span>
                <span class="text-3xl font-bold block text-center">100</span>
            </div>
            <div class="border rounded-md border-slate-400 px-6 py-2">
                <span class="text-xl block text-center">Gagné(s) </span>
                <span class="text-3xl font-bold block text-center">🏆</span>
                <span class="text-3xl font-bold block text-center">05</span>
            </div>
            <div class="border rounded-md border-slate-400 px-6 py-2">
                <span class="text-xl block text-center">Perdu(s) </span>
                <span class="text-3xl font-bold block text-center">😭</span>
                <span class="text-3xl font-bold block text-center">06</span>
            </div>
            <div class="border rounded-md border-slate-400 px-6 py-2">
                <span class="text-xl block text-center">Nul(s)</span>
                <span class="text-3xl font-bold block text-center">😐</span>
                <span class="text-3xl font-bold block text-center">20</span>
            </div>
        </div>
        <div class="max-xl:ml-0 max-xl:mt-5 ml-3 border rounded w-full border-slate-400 p-4">
            <div class="mb-2 border-b border-slate-500">
                <h1 class="font-black text-2xl">Partie(s) active(s) (08)</h1>
            </div>
            <div class="block w-full h-40 overflow-auto">
                <div v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i" class="flex w-full border-b border-slate-400 mb-2 items-center justify-between">
                    <div>
                        <h1 class="max-xl:text-sm font-black text-xl">cyrusDev 🔥 xoxoIA </h1>
                        <span class="max-xl:text-sm">C'est le tour de xoxoIA</span>
                    </div>
                    <div>
                        <button @click="closePopup"
                            class="max-xl:text-sm max-xl:p-1 btn mx-0 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Observer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div  class="max-xl:mx-0 max-xl:block text-black bg-red py-5 px-10 mx-12">
        <h1 class="font-black text-3xl my-5">Classement</h1>
        <span class="block text-sm font-medium text-slate-700">Rechercher un joueur</span>
                <input type="text" class="mt-2 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm placeholder-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="cyrusDev">
        <div class="h-96 pl-2 overflow-auto shadow-lg shadow-gray-500/50">
            <div v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i" class="flex w-full py-1 border-b border-slate-400 mb-2 items-center justify-between">
                <div>
                    <h1 class="max-xl:text-sm font-black text-xl">{{ i }}-cyrusDev </h1>
                    <span class="max-xl:text-sm">1000 ✨</span>
                </div>
                <div>
                    <button @click="closePopup"
                        class="max-xl:text-sm max-xl:p-2 btn mx-0 flex bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Défier 🔥</button>
                </div>
            </div>
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
.btn {
    background-color: var(--color-one);
}

.btn:hover {
    background-color: var(--color-two);
}
</style>
  