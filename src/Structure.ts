import { Level2Type, Level3Type, Type } from './Type';
// test
export class Structure {
  public readonly koatuu: string;

  public readonly level1Code: string;
  public readonly level2Type: Level2Type;
  public readonly level2Code: string;
  public readonly level3Type: Level3Type;
  public readonly level3Code: string;
  public readonly level4Code: string;

  constructor(koatuu: string) {
    if (!Structure.isValid((this.koatuu = koatuu.toString().trim()))) {
      throw new Error(`Invalid KOATUU ${koatuu}`);
    }

    this.koatuu = koatuu.padStart(10, '0');

    this.level1Code = koatuu.substr(0, 2);
    this.level2Type = +koatuu.substr(2, 1) as Level2Type;
    this.level2Code = koatuu.substr(3, 2);
    this.level3Type = +koatuu.substr(5, 1) as Level3Type;
    this.level3Code = koatuu.substr(6, 2);
    this.level4Code = koatuu.substr(8, 2);
  }

  public static castType(type?: string | number): Type {
    let value: number;

    if (typeof type === 'string') {
      type = type.trim().toUpperCase();

      for (const [from, to] of Object.entries({ M: 'М', C: 'С', T: 'Т', P: 'Р' })) {
        type = type.replace(from, to);
      }

      value = type.charCodeAt(0) || 0;
    }

    return value in Type ? (value as Type) : Type.UNKNOWN;
  }

  public static isValid(koatuu: string): boolean {
    return !!koatuu.match(/^\d{9,10}$/);
  }
}
