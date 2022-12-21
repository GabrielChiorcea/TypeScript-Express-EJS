import { Analyzer } from "../Summary";
import { ResultReturn } from "../Tuple";
import { MatchResults } from "../MatchResults";


export class WinAlaysis implements Analyzer{

    constructor(public team:string){} // Everton, Southampton, Tottenham, Fulham
    run(matches: ResultReturn[]): string{

        let wins = 0
       
        
 

for(let  match of matches){
    if(match[1] === this.team && match[5] === MatchResults.homeWin ){
        wins++}
     else if (match[2] === this.team && match[5] === MatchResults.awayWin ) {
        wins++}

    }
    return `Team ${this.team} won ${wins} games`
    }

}