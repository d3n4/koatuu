export class Code {
  constructor(public readonly identifier?: string) {
    if (!identifier || identifier.length < 10) {
      throw new Error('Invalid koatuu');
    }
  }
}
