import React, {Fragment, useState} from 'react';
import { Label, Select } from '../assets/styles/StyleComponents'; 

const useCoin = (label, initialState, options) => {
    
    const[state, setState] = useState(initialState);

    const SelectCoin = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select onChange={e => setState(e.target.value)} value={state}>
                <option value="">- Choose one -</option>
                {options.map(option => (
                    <option key={option.codigo} value={option.codigo}>{option.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

    return [state, SelectCoin, setState];
}
 
export default useCoin;