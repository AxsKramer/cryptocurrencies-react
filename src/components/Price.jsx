import React from 'react'
import { Result, Info, PriceInfo } from '../assets/styles/StyleComponents';

const Price = ({result}) => {

    if(Object.keys(result).length === 0)  return null;

    return (
        <Result>
            <PriceInfo>Price: <span>{result.PRICE}</span> </PriceInfo>
            <Info>Price High Day: <span>{result.HIGHDAY}</span> </Info>
            <Info>Price Low Day: <span>{result.LOWDAY}</span> </Info>
            <Info>Last 24 Hours: <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info>Last Update: <span>{result.LASTUPDATE}</span> </Info>
        </Result>
      );
}
 
export default Price;