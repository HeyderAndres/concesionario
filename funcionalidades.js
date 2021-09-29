let autos = require('./autos')
let persona = require('./persona')

const concesionaria = {
   autos: autos,
   persona:persona,

   buscarAuto: function (patente) {
      return this.autos.find(auto => auto.patente == patente);
   },
   venderAuto: function (patente) {
      let buscar = this.buscarAuto(patente);
      if (buscar != null) {
         buscar.vendido = true
      }
   },

   autosParaLaVenta: function () {
      return this.autos.filter(item => !item.vendido)

   },
   autosNuevos: function () {
      return this.autosParaLaVenta().filter(item => item.km < 100)

   },
   listaDeVentas: function(){
     let vendidos= this.autos.filter(element => element.vendido)
      return vendidos.map(item=>item.precio)
   
   },
   totalDeVentas: function() {
      return this.listaDeVentas().reduce((acumulador,elemento)=> { return acumulador+elemento},0 )
   },

   puedeComprar: function (auto,persona) {
      if (persona.capacidadDePagoTotal>auto.precio && (auto.precio/auto.cuotas)<persona.capacidadDePagoEnCuotas) {
         return true
      }else{return false}
   },

   autosQuePuedeComprar:function (persona) {
      return this.autosParaLaVenta().filter(element => this.puedeComprar(element,persona))
   },

}

// ejeciciones en consola para verificar el funcionamiento de la aplicacion.
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());

// //console.log(concesionaria.buscarAuto('APL123'));
// console.log(concesionaria.venderAuto('JJK116'));
// //console.log(concesionaria.autosParaLaVenta());
// //console.log(concesionaria.autosNuevos());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());
// console.log(concesionaria.puedeComprar('JJK116','Juan'))
