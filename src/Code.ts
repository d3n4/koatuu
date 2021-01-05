export class Code {
  constructor(public readonly identifier?: string) {
    if (!identifier) {
      throw new Error('Invalid koatuu');
    }
  }
}
