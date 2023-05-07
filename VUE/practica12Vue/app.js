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
    return {
      frases : frases,
      nueva : 'Ingresa una nueva frase'
    };
  },
  methods: {
    agregarFrase( event ) {
      console.log(event);
      if (event.charCode == 13) {
        console.log('Enter');
        this.frases.unshift({
          texto: this.nueva
        });
        this.nueva = '';
      }
    }
  }
}).mount("#miApp");
