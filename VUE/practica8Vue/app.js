
const { createApp } = Vue;

createApp({
    data() {
        return {
            articulos : [
                {codigo : 1,
                descripcion : 'Papas',
                precio : 12.52,
            },
            {codigo : 2,
                descripcion : 'Manzanas',
                precio : 52.12
            },
            {codigo : 3,
                descripcion : 'Peras',
                precio : 32.12}
            ],
            total : 0

        }
        
    },
    methods : {
        sumarTotal(precio){
            console.log(this.total);
            this.total += precio;
            return this.total
        }
    }
}).mount('#miApp');