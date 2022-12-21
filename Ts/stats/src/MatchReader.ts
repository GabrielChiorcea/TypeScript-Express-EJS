import { dateStringInToDateNumber } from "./Util"
import { MatchResults } from "./MatchResults"
import { ResultReturn} from './Tuple'
import { FsFileReader } from "./FsfileREader"
interface DataReader{

    read():void,
    data:string[][]
}




export class MatchReader {
    static fromCsv (fileName:string):MatchReader{
        return new MatchReader (new FsFileReader(fileName))
    }

    constructor(public reader: DataReader){}


matches: ResultReturn[] = []

load():void{
    this.reader.read()
    this.matches = this.reader.data.map(result => {
        return [
            dateStringInToDateNumber(result[0]),
            result[1],
            result[2],
            parseInt(result[3]),
            parseInt(result[4]),
            result[5] as MatchResults,
            result[6]
        
    
        ]
    })

}

       
     
}