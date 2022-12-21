import { OutputTarget} from "../Summary";

export class OuputReport implements OutputTarget{

    print(report: string): void {
        console.log(report)
    }
   

}