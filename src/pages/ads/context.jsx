import PropTypes from 'prop-types'; 
import { createContext, useContext, useState } from "react";

const AdsContext = createContext();

export const AdsContextProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [ads, setAds] = useState([])
  const handleIsLoaded = setIsLoaded(!isLoaded)
  const handleAds = setAds(changeAds) //Paso por parametro los anuncios
  
  const adsValue = {
    isLoaded,
    ads,
    isLoaded: handleIsLoaded,
    changeAds: handleAds
  };

  return (
    <AdsContext.Provider value={adsValue}>{children}</AdsContext.Provider>
  );
};

export const useAds = () => {
  const ads = useContext(AdsContext);
  return ads;
};

AdsContextProvider.propTypes = {
  isDefaultLogged: PropTypes.bool,
  children: PropTypes.element
}