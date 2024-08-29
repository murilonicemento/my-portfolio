export interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ISendForm {
  isLoading: boolean;
  isSend: boolean;
  error: boolean;
}

export interface ILinkRef {
  id: number;
  name: string;
  hash: string;
}

export interface ICardsProps {
  type: string;
  heading: string;
  description: string;
  categories: string[];
  route: string;
}
