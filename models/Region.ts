export class Region {
  id: string;
  configId: null | string;
  abbr: string;
  disabled: boolean;
  name: string;
  image: string;
  hourlyPrice: string;
  monthlyPrice: number;
  isZyrrus: boolean;
  isPremium: boolean;
  constructor(
    id: string,
    configId: null | string,
    abbr: string,
    disabled: boolean,
    name: string,
    image: string,
    hourlyPrice: string,
    monthlyPrice: number,
    isZyrrus: boolean,
    isPremium: boolean
  ) {
    this.id = id;
    this.configId = configId;
    this.abbr = abbr;
    this.disabled = disabled;
    this.name = name;
    this.image = image;
    this.hourlyPrice = hourlyPrice;
    this.monthlyPrice = monthlyPrice;
    this.isZyrrus = isZyrrus;
    this.isPremium = isPremium;
  }
}
