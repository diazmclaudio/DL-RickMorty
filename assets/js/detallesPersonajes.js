import Personajes from "./personajes.js";

export default class DetallesPersonajes extends Personajes {
     constructor(
          id,
          name,
          status,
          species,
          gender,
          created,
          origin,
          location,
          episode
     ) {
          super(id);

          let _name = name;
          this.getName = () => _name;
          this.setName = (nuevo_name) => (_name = nuevo_name);

          let _status = status;
          this.getStatus = () => _status;
          this.setStatus = (nuevo_status) => (_status = nuevo_status);

          this._species = species;
          this._gender = gender;
          this.created = created;
          this.origin = origin;
          this.location = location;
          this.episode = episode;
     }

     get name() {
          return this.getName();
     }

     set name(nuevo_name) {
          this.setName(nuevo_name);
     }

     get status() {
          return this.getStatus();
     }

     set status(nuevo_status) {
          this.setStatus(nuevo_status);
     }

     get species() {
          return this._species;
     }

     set species(nuevo_species) {
          this._species = nuevo_species;
     }

     get gender() {
          return this._gender;
     }

     set gender(nuevo_gender) {
          this._gender = nuevo_gender;
     }

     infoModal() {
          return `
          <ul>
               <li><p>${this.name}</p></li>
               <li><p>${this.status}</p></li>
          </ul>
          `;
     }

     infoGeneral(id, species) {
          return `  
          <ul>
               <li><p>${this.id}</p></li>
               <li><p>${this.species}</p></li>
          </ul>
          `;
     }
}
