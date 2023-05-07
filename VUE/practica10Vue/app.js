const { createApp } = Vue;

const canciones = [
  {
    autor : 'Junior H',
    nombre: 'El azul',
  },
  {
    autor : 'José josé',
    nombre: 'El triste',
  },
  {
    autor : 'Juan Carlos Calderon',
    nombre: 'La incondicional',
  },
];

createApp({
  data() {
    return {
      canciones: canciones,
    };
  },
}).mount("#miApp");
