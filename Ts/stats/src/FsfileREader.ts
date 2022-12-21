import fs from "fs"

 export  class FsFileReader {

 data: string[][] = []

 constructor( public fileName:string){}

 read(){
    this.data  = fs.readFileSync(this.fileName, {
        encoding: "utf-8"
    }).split("\n")
    .map(result => result.split(','))
  }

  
}