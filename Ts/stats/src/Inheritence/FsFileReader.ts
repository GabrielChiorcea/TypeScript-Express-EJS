import fs from "fs"




 export abstract  class FsFileReader <T>{

 data: T[] = []

 constructor (public fileName:string){}
 abstract mapResult( result:string[]):T;

 read(){
    this.data  = fs.readFileSync(this.fileName, {
        encoding: "utf-8"
    }).split("\n")
    .map(result => result.split(','))
    .map(this.mapResult)

 }
 

}
