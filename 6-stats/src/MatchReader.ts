import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'

type MatchData = [Date, string, string, number, number, MatchResult, string]

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  matches: MatchData[] = []
  // remember this is short hand for auto assigning reader to the class
  constructor(public reader: DataReader) {}

  load(): void {
    // the reader we are given and run the load function
    this.reader.read()
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // A type assertion - we're overwriting typescript's inference
          row[5] as MatchResult,
          row[6]
        ]
      }
    )
  }
}