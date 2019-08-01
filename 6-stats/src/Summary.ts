import { MatchData } from './MatchData'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { HtmlReport } from './reportTargets/HtmlReport'

// we don't normally have to export interfaces
// as long as it satifies the conditions of the interface
// it'll be an interface
// but you can also be explicit
export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  // static methods are on the class itself
  // so you can call them without instantiating the class
  // think of this as a preconfigured usage of the class
  // a shortcut
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport('report')
    )
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
