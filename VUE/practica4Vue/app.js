
const app = Vue.createApp({
    data() {
        return {
            nombre : 'Mario',
        }
    },
    methods: {
        cambiarNombre() {
            this.nombre = 'Luigi'
        },
        cambiarMayusculas() {
            this.nombre = this.nombre.toUpperCase();
        }
    },
   
});
app.mount('#miApp');