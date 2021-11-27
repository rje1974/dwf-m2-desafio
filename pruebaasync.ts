import * as jsonfile from "jsonfile";
import * as _ from "lodash";



function getAll():Promise<any>{
    return jsonfile.readFile("./pelis.json").then(data => {return data})

};

function main(){
    
     getAll().then(console.log)
    // console.log('estoeslista',getAll())
//    getAll()

}
main()