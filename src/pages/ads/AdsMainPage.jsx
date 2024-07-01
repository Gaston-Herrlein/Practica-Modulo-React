import { AdCard } from "./components/AdCard";

export const AdsMainPage = () => {
  const dummyAd = {
    imgSRC: "../src/assets/not-found.jpg",
    title: "Nombre del articulo",
    decription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus iaculis nisi nec maximus. Aliquam eu justo lacus. Donec mauris magna, condimentum non elementum sit amet, faucibus vel nisl. Nulla magna ex, scelerisque eu luctus ac, mattis quis eros.",
    price: "$100",
    sale: true
  }
  
  return (
    <>
      <AdCard imgSRC={dummyAd.imgSRC} title={dummyAd.title} description={dummyAd.decription} price={dummyAd.price} sale={dummyAd.sale} />
    </>
  );
};
