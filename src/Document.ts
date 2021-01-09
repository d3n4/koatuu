import { Entry } from './Entry';
import { Structure } from './Structure';

export class Document {
  private index = new Map<string, Entry>();

  [Symbol.iterator]() {
    return this.index[Symbol.iterator]();
  }

  private addEntry(entry: Entry): boolean {
    this.index.set(entry.structure.koatuu, entry);
    return true;
  }

  private addLine(line: string): boolean {
    const [koatuu, type, name] = line.trim().split('\t');

    if (!Structure.isValid(koatuu)) {
      return false;
    }

    return this.addEntry(Entry.from(koatuu, type, name));
  }

  static fromStream(stream: Iterable<string>): Document {
    const document = new this();
    for (const line of stream) {
      document.addLine(line);
    }
    return document;
  }

  static fromString(buffer: string): Document {
    return this.fromStream(buffer.split('\n'));
  }
}
