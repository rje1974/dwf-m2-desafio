/*

Instanciá el modelo PelisCollection y guardalo en una propiedad interna del controller.
Tomá la estructura base y completá la clase PelisController. Además, agregale a esta clase los siguientes métodos
 asincrónicos que tienen que usar los métodos del modelo para interactuar con la data:
    * get(options) recibe un objeto y, según cuales sean sus propiedades, hay dos opciones:
        si el objeto tiene la propiedad id (ej: { id:1234 }), debe devolver la película con ese id.
        si el objeto tiene la propiedad search (que es un objeto) y:
            si el objeto search tiene la propiedad title, debe buscar las pelis que tengan ese string en el título.
             (ej: { search:{ title:"ju" } })
            si el objeto search tiene la propiedad tag, debe buscar las pelis que tengan ese tag.
             (ej: { search:{ tag:"action" } })
            puede recibir las dos opciones. (ej: { search:{ tag:"action", title:"x" } } busca pelis con el tag action y que tengan la letra x en su title)
        si no recibe ningún parámetro, debe devolver todas las películas.
    * add(peli:Peli) recibe un objeto y crea una peli en base a él.
     (Ej.: { id:4421, title:"Una peli", tags:["classic","action"] })

*/

import { PelisCollection, Peli } from "./models";

class PelisController {
  
  pelisCollection:PelisCollection
  
  constructor() {
    this.pelisCollection = new PelisCollection
  };
  
  get(options:any){
    if (options.actions == "get") {
      return this.pelisCollection.getById(options.params.id).then((data) => {return data})
    } if (options.actions == "search") {
      return this.pelisCollection.search(options.params).then((data)=>{return data})
    } else {
      this.pelisCollection.getAll().then(console.log)
      }
    }
    
  add(peli:Peli): Promise<any>{
    return this.pelisCollection.add(peli)
  }

}

export { PelisController};



// function main () {

//     const hola = new PelisCollection
//     const obj1 = {'title': "n"};
//     const obj2 = {title: "una"};
//     const obj3 = {tags: "nanan"};
//     const obj4 = {tags: "tt"};
//     const obj5 = [obj1,obj3,obj4]
//     const obj6 = { title: 'ti', tag: 'uu' }
//     const obj7 = {id:1}
//     const obj8 = { id: 123, title: "carli jonessssssssssssssssssssssssss", tags: []}

//     hola.getAll().then(console.log)

//     hola.getById(210439).then(console.log)

//     hola.search(obj2).then(console.log)

//     hola.search(obj4).then(console.log)

//     hola.search(obj6).then(console.log)

//     hola.add(obj8).then(console.log)


// }

// main()

