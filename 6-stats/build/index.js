"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader'
// import { HtmlReport } from './reportTargets/HtmlReport'
// import { WinsAnalysis } from './analyzers/WinsAnalysis'
var Summary_1 = require("./Summary");
/* OLD IMPLEMENTATION

1) Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')
2) Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()
*/
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv ');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport('report')
// )
// summary.buildAndPrintReport(matchReader.matches)
// you are creating a new instance here
//  despite missing the new key word
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
