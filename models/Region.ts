export class Region {
  id: string;
  configId: null | string;
  abbr: string;
  disabled: boolean;
  name: string;
  image: string;
  hourlyPrice: string;
  monthlyPrice: number;
  constructor(
    id: string,
    configId: null | string,
    abbr: string,
    disabled: boolean,
    name: string,
    image: string,
    hourlyPrice: string,
    monthlyPrice: number
  ) {
    this.id = id;
    this.configId = configId;
    this.abbr = abbr;
    this.disabled = disabled;
    this.name = name;
    this.image = image;
    this.hourlyPrice = hourlyPrice;
    this.monthlyPrice = monthlyPrice;
  }
}
