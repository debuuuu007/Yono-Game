import winzo from "./winzo.png";
import gift from "./gift.png";
import dollar from "./dollar.png";

export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  bonus: string;
  minWithdraw: string;
  image: string;
  giftImage: string;
  dollarImage: string;
  downloadLink: string;
}

export const cardsData: CardData[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: "WINZO",
  subtitle: "PLAY MORE WIN MORE",
  bonus: "Sign Up Bonus $550",
  minWithdraw: "Min.Withdraw $110",
  image: winzo,
  giftImage: gift,
  dollarImage: dollar,
  downloadLink: "#"
}));

export const downloadButton = {
  text: "DOWNLOAD",
  link: "#" // Replace with your actual download link
};
