export class KShetraModel {
  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  
  private _no: string;
  
  get no(): string {
    return this._no;
  }
  
  set no(value: string) {
    this._no = value;
  }
  
  private _name: string;
  
  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this._name = value;
  }
}

export class MandalModel {
  private _id: number;
  private _mandalId: string;
  private _regNo: string;
  private _name: string;
  private _kshetraId: number;
  
  get id(): number {
    return this._id;
  }
  
  set id(value: number) {
    this._id = value;
  }
  
  get mandalId(): string {
    return this._mandalId;
  }
  
  set mandalId(value: string) {
    this._mandalId = value;
  }
  
  get regNo(): string {
    return this._regNo;
  }
  
  set regNo(value: string) {
    this._regNo = value;
  }
  
  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this._name = value;
  }
  
  get kshetraId(): number {
    return this._kshetraId;
  }
  
  set kshetraId(value: number) {
    this._kshetraId = value;
  }
}
