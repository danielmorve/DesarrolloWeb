
const { createApp } = Vue;

const frases = [
    {
        id : 1,
        texto : 'La vida es muy corta para aprender Alemán',
    },
    {
        id : 2,
        texto : 'El respeto al derecho ajeno es la paz',
    },
    {
        id : 3,
        texto : 'El dinero no puede comprar la felicidad'
    }
];

createApp({
    data() {
        return{
            frases : frases

        }
        
    }
}).mount('#miApp');