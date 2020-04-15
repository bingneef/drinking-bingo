import { TAddress } from "./types";

export function readableAddress(address: TAddress) {
  return `${address.street} ${address.houseNumber}, ${address.zipCode} ${address.city}`;
}
