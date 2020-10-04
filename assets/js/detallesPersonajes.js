import Personajes from "./personajes";

class DetallesPersonajes extends Personajes {
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
          this.setStatus = (nuevo_status) => _status = nuevo_status;

          this.species = species;
          this.gender = gender;
          this.created = created;
          this.origin = origin;
          this.location = location;
          this.episode = episode;

     }
}
