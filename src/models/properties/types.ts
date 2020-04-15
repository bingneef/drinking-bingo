export enum PropertyStatus {
  new = "NIEUW",
  visited = "bezocht",
  sold = "verkocht"
}

export type TAddress = {
  street: string;
  houseNumber: number;
  zipCode: string;
  city: string;
};

export type TProperty = {
  key: string;
  title: string;
  summary: string;
  description: string;
  address: TAddress;
  favourite?: boolean;
  price?: string;
  status: string;
};
