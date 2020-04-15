import { TAddress, TProperty } from "./types";

const address: TAddress = {
  street: "Binnenkant",
  houseNumber: 52,
  zipCode: "2203NE",
  city: "Noordwijk"
};

const property: TProperty = {
  key: "1",
  title: "Binnenkant 52, 2203NE Noordwijk",
  summary: "Mooie, ruime hoekwoning in de groenste stuk van de grashoek.",
  description:
    "Deze royale hoekwoning is voor de echte tuin- en natuurliefhebber! De Grashoek waarin de woning staat, kenmerkt zich door het vele groen, water en u zit ook nog eens vlakbij de duinen van Noordwijk! Ideaal voor iemand die houdt van rust en ruimte. De woning grenst met twee zijden aan het water en gemeentelijk groen. De woning heeft geen inkijk vanuit de omliggende woningen e heet vrij uitzicht. Een ruime woonkamer, eetkamer en keuken met veel lichtinval kenmerkt de begane grond. Door de vele raampartijen kunt u elke dag genieten van de zon. De woning heeft 4 slaapkamers en een ruime badkamer. Daarnaast heeft de woning een grote zolder en berging. Parkeren kan voor de deur. Daarnaast heeft u de mogelijkheid om aan de linkerzijde van de woning de tuin te bereiken. De tuin heeft een fijn uitzicht en u kunt er van de ochtend tot de avond genieten van de zon.",
  address,
  favourite: false,
  price: "In overleg",
  status: "NIEUW"
};

export const availableProperties: TProperty[] = [1, 2, 3, 4, 5, 6].map(
  index => ({
    ...property,
    favourite: index % 3 === 0,
    key: index.toString()
  })
);

export const futureVisits = [availableProperties[0]];
export const pastVisits = [availableProperties[1], availableProperties[2]];
