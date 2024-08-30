import type { ICardsProps } from "@/interfaces/interfaces";

let card: ICardsProps;

const setCard = (data: ICardsProps) => {
  card = data;
};

const getCard = () => {
  return card;
};

export { setCard, getCard };
