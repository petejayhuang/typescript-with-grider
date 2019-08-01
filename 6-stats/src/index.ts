import { MatchReader } from './MatchReader'
// import { CsvFileReader } from './CsvFileReader'
// import { HtmlReport } from './reportTargets/HtmlReport'
// import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'

/* OLD IMPLEMENTATION

1) Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')
2) Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()
*/
const matchReader = MatchReader.fromCsv('football.csv ')
matchReader.load()

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport('report')
// )

// summary.buildAndPrintReport(matchReader.matches)

// you are creating a new instance here
//  despite missing the new key word
const summary = Summary.winsAnalysisWithHtmlReport(
  'Man United'
)
