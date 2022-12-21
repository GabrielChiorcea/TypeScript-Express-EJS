import { FsFileReader } from "./FsFileReader";
import{MatchResults} from "../MatchResults"
import {dateStringInToDateNumber} from "../Util"

type ResultReturn = [Date, string, string, number, number, MatchResults, string]

export class MatchReader extends FsFileReader <ResultReturn>{

    mapResult( result:string[]): ResultReturn{
        return [
            dateStringInToDateNumber(result[0]),
            result[1],
            result[2],
            parseInt(result[3]),
            parseInt(result[4]),
            result[5] as MatchResults,
            result[6]
        
    
        ]
     }
}