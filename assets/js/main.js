import DetallesPersonajes from "./detallesPersonajes.js";

let llamadoPersonajes = (() => {
     const URLAPI = "https://rickandmortyapi.com/api/character/";
     const resultadosClass = document.querySelector(".resultados");
     let datosPersonajes;

     let personaje = async () => {
          try {
               let res = await fetch(URLAPI);
               let data = await res.json();
               datosPersonajes = data;
               return datosPersonajes;
          } catch (err) {
               console.log(error);
          }
     };

     let detalle = async (id) => {
          try {
               let resDetalle = await fetch(URLAPI + id);
               let dataDetalle = await resDetalle.json();

               let detallesPersonajes = new DetallesPersonajes();
               detallesPersonajes.infoGeneral(
                    dataDetalle.id,
                    dataDetalle.species
               );
               return dataDetalle;
          } catch (err) {
               console.log(err);
          }
     };

     return {
          mostrar: async () => {
               const person = await personaje();
               const resPerson = await person.results;

               resPerson.forEach((element) => {
                    detalle(element.id);
                    resultadosClass.innerHTML += `
                               <img class=count src=${element.image} />
                               <div  id=r${element.id}>
                                     <ul>
                                        <li>
                                             <span>${element.id}</span>
                                        </li>
                                        <li>
                                             <span>${element.species}</span>
                                        </li>
                                     </ul>
                              </div>`;
               });
               
          },
     };
})();

llamadoPersonajes.mostrar();

let dosSegundos = ()=>{
     setTimeout(() => {
          let spinner = document.getElementById('spinner');
          spinner.style.visibility = 'hidden';
          let count = document.getElementsByClassName('count').length;
          let cantPersonajes = document.getElementById('cantidadPersonajes');
          cantPersonajes.innerText= `${count}`;
        }, 2000);
};

dosSegundos();

   
   
