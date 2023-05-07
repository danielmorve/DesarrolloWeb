const { createApp } = Vue;

const frases = [
  {
      id : 1,
      texto : 'La vida es muy corta para aprender Alemán',
      autor : 'Tad Williams',
  },
  {
      id : 2,
      texto : 'El respeto al derecho ajeno es la paz',
      autor : 'Benito Juárez',
  },
  {
      id : 3,
      texto : 'El dinero no puede comprar la felicidad',
      autor : 'Anónimo'
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
        this.frases.push({
          texto: this.nueva
        });
        this.nueva = '';
      }
    }
  }
}).mount("#miApp");
