export class Location {
  id: string;
  configId: null | string;
  abbr: string;
  disabled: boolean;
  constructor(
    id: string,
    configId: null | string,
    abbr: string,
    disabled: boolean
  ) {
    this.id = id;
    this.configId = configId;
    this.abbr = abbr;
    this.disabled = disabled;
  }
}
