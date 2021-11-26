import * as jsonfile from "jsonfile"
import * as _ from "lodash";

class Peli {
    id: number;
    title: string;
    tags:string[]=[]
    constructor(idCtrl:number,titleCrtl:string,tagsCrtl:[]){
        this.id = idCtrl,
        this.title = titleCrtl,
        this.tags = tagsCrtl
    }
}

class PelisCollection {

    constructor(){
        this.getAll().then()
    }
    
    getAll():Promise<any>{
        return jsonfile.readFile("./pelis.json")
    }

    getById(id:number):Promise<any> {
        const buscado = this.getAll().then((json) =>
          json.find(((peli: { id: number; }) => peli.id == id)
        ))
        return buscado
      }


    async search (opcion:any):Promise<any>{
        let array = this.getAll().then( async (array:any) => {            
            let contador = 0
            const mapeador = await _.forEach(opcion,function(){
                if (Object.keys(opcion)[contador]  === "title"){
                    const search = Object.values(opcion)[0];
                    const results =  _.filter(array, function(item) {
                        return item.title.toLowerCase().toString().indexOf(search) > -1;
                    });
                    contador = contador + 1
                    array = results
                } else {
                    let searchTAG:any = Object.values(opcion)[contador];
                    const results =  _.filter(array, function(item) {
                        return item.tags.toString().toLowerCase().indexOf(searchTAG.toString().toLowerCase()) > -1;
                    });
                    contador = contador + 1
                    array = results
                    
                }
            })
            return array
        }
        )
        return array
    }


    async add(peli:Peli):Promise<any>{
        let data = this.getAll()
        data.then( async (array:any) => {
            
            if ((await this.getById(peli.id)) === undefined) {
                (await data).push(peli)
                await jsonfile.writeFile("./pelis.json",await data);
                return console.log(true)
            } else {
                return console.log(false)
        }
      })
    }
}

export { PelisCollection, Peli};

// function main () {

//     const hola = new PelisCollection
//     const obj1 = {'title': "n"};
//     const obj2 = {title: "m"};
//     const obj3 = {tags: "nanan"};
//     const obj4 = {tags: "action"};
//     const obj5 = [obj1,obj3,obj4]
//     const obj6 = { title: 'm', tag: 'mejor' }
//     hola.search(obj6)
// //    hola.add({ id: 122, title: "indiana jonessssssssssssssssssssssssss", tags: []})


// }

// main()

