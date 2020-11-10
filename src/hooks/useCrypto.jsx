import React, {Fragment, useState} from 'react';
import { Label, Select } from '../assets/styles/StyleComponents';

const useCrypto = (label, initialState, options) => {

    const [state, setState] = useState(initialState);

    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select onChange={e =>  setState(e.target.value)} value={state}>
            <option value="">- Choose one -</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );
    
    return [state, SelectCrypto, setState]
}

export default useCrypto;