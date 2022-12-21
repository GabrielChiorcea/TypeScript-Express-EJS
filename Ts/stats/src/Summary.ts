import { WinAlaysis } from "./analyzers/WinAlayzers";
import { OuputReport } from "./reportTargets/ConsoleReports";
import { ResultReturn} from "./Tuple";

export interface Analyzer {
run(matches: ResultReturn[]): string

}

export interface OutputTarget{
    print(report:string):void;
}

export class Summary{

    static analyzerAndHtmlReport(team:string): Summary{
return new Summary (

    new WinAlaysis(team),
       new OuputReport
)
    }
    constructor(public analizer: Analyzer, public outputTarget: OutputTarget){}

    buildAndPrintReport(matches:ResultReturn[]):void{
        const output = this.analizer.run(matches)
        this.outputTarget.print(output)
    }

}