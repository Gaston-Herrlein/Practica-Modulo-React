import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import { AdCard } from "./components/AdCard";
import { getAdverts } from "./service";

const defaultFilters = {
  name: "",
  price: [],
  sale: "",
  tags: [],
}

// const getFilters = () => storage.get('filters') || defaultFilters;
const getFilters = () => defaultFilters;

export const AdsMainPage = () => {
  const navigate = useNavigate
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState(getFilters);
  
  const dummyAd = {
    imgSRC: "../src/assets/not-found.jpg",
    title: "Nombre del articulo",
    decription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus iaculis nisi nec maximus. Aliquam eu justo lacus. Donec mauris magna, condimentum non elementum sit amet, faucibus vel nisl. Nulla magna ex, scelerisque eu luctus ac, mattis quis eros.",
    price: "$100",
    sale: true
  }

  useEffect(() => {
    getAdverts()
      .then(adverts => {
        console.log(adverts)
        setAdverts(adverts);
      })
      .catch(error => {
        console.log(error)
      }); 
  }, [navigate])
  
  return (
    <Container className="center">
      <AdCard imgSRC={dummyAd.imgSRC} title={dummyAd.title} description={dummyAd.decription} price={dummyAd.price} sale={dummyAd.sale} />
    </Container>
  );
};
