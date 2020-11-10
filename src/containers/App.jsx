import React, {useState, useEffect} from 'react';
import axios from 'axios';
import image from '../assets/images/cryptomonedas.png';
import {Container, Image, Title} from '../assets/styles/StyleComponents';
import Form from '../components/Form';
import Price from '../components/Price';
import Spinner from '../components/Spinner';

const App = () => {

    const [coin, setCoin] = useState('');
    const [crypto, setCrypto] = useState('');
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const priceCrypto = async () => {
            if(coin === '') return;

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
            const result = await axios.get(url);
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setResult(result.data.DISPLAY[crypto][coin] );
            }, 3000);
        }
        priceCrypto();
    }, [coin, crypto]);

    return ( 
        <Container>
            <div>
                <Image src={image} alt='cryto ' />
            </div>
            <div>
                <Title> Crypto Quotation</Title>
                <Form setCoin={setCoin} setCrypto={setCrypto} />
                {
                    loading ? <Spinner /> : <Price result={result} />
                }
            </div>
        </Container>
     );
}
 
export default App;