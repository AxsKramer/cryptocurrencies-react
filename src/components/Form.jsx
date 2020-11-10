import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {coins} from '../dataConfig/index';
import { Button } from '../assets/styles/StyleComponents';
import useCoin from '../hooks/useCoin';
import useCrypto from '../hooks/useCrypto';
import Error from './Error';

const Form = ({setCoin, setCrypto }) => {

    const [listCrypto, setListCrypto] = useState([]);
    const [error, setError] = useState(false);
    const [coin, SelectCoin] = useCoin('Choose your coin', '', coins);
    const [crypto, SelectCrypto] = useCrypto('Choose your crypto', '', listCrypto );

    useEffect(() =>{
        const getDataFromAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const data = await axios.get(url);
            setListCrypto(data.data.Data);
        }
        getDataFromAPI();
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        if(coin === '' || crypto === '') {
            setError(true);
            return;
        }
        setError(false);
        setCoin(coin);
        setCrypto(crypto);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error message='All fields are requiered' /> : null}
            <SelectCoin />
            <SelectCrypto />
            <Button type='submit' value="SHOW PRICE" />
        </form>
      );
}
 
export default Form;