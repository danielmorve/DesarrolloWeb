console.log(Vue);

const app = Vue.createApp({
    template: `
        <h1>Hola Mundo</h1>
        <p>Desde Vue</p>
        <p>{{ 2+2 }}</p>
        <p>{{ true }}</p>
        <p>{{ [1,2,3,4,5] }}</p>
        <p>{{ {nombre: 'Juan', edad: 20} }}</p>
        <p>{{ !true ? 'habilitado' : 'deshabilitado' }}</p>
        `
});
app.mount('#miApp');