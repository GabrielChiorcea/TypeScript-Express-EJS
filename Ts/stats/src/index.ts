import { Summary } from "./Summary";
import { MatchReader } from "./MatchReader";


const matchReader = MatchReader.fromCsv("football.csv")
matchReader.load()
 

const summery =Summary.analyzerAndHtmlReport("Arsenal")
summery.buildAndPrintReport(matchReader.matches)