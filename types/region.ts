export type Region = {
  id: string;
  name: string;
  abbr: string;
  image: string;
  disabled: boolean;
  configId: string;
  hourlyPrice: number | null;
  monthlyPrice: number;
};
