import { Structure } from './Structure';
import { Type } from './Type';

export class Entry {
  protected _structure: Structure;

  public get structure(): Structure {
    return this._structure;
  }

  protected _type: Type;

  public get type(): Type {
    return this._type;
  }

  protected _name: string;

  public get name(): string {
    return this._name;
  }

  public static clearName(name: string): string {
    return name
      .trim()
      .toLowerCase()
      .replace(/["“‘”]/g, "'")
      .replace(/(\s+(область|район|крим))\s*\/.*$/giu, '$1')
      .replace(/.*\/(.*)$/gi, '$1')
      .replace(/[\s]*\(([^)]+)\)[\s]*/gi, '')
      .replace(/\B[мс]\s*\./giu, '')
      .replace(/\B(р-ну?|с-щ[еа]|обл)[\s.]+/giu, '')
      .replace(/\s\s+/g, ' ')
      .replace(/\s*-\s*/g, '-')
      .trim()
      .replace(/^(.)|[\s\-]+(.)/g, (m) => m.toUpperCase())
      .trim();
  }

  public static from(koatuu: string, type: string | number, name: string): Entry {
    const entry = new this();

    entry._structure = new Structure(koatuu);
    entry._type = Structure.castType(type);
    entry._name = this.clearName(name);

    // @ts-ignore
    // console.log(entry);

    return entry;
  }
}
