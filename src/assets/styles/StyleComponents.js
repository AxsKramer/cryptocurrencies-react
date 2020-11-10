import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto 5rem auto;
    @media (min-width:992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        margin: 0 auto;
  }
`;

export const Image = styled.img`
  max-width: 60%;
  margin: 0 25%;
  @media (min-width:992px) {
    max-width: 90%;
    margin: 5rem 0;
    padding: 0;
  }
`;

export const Title = styled.h3`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-align: center;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;
`;

export const MessageError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

export const Result = styled.div`
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    box-shadow: 5px 5px 10px #333, -5px -5px 10px #333;
    padding: .5rem;
    margin: .6rem 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.p`
    font-size: 18px;
    font-weight: bold;
    span {
        font-weight: normal;
    }
`;
export const PriceInfo = styled.p`
    font-size: 30px;
    font-weight: bold;
    span {
        font-weight: normal;
    }
`;

export const Button = styled.input`
    margin: 2rem 25%;
    font-weight: bold;
    font-size: 20px;
    padding: 1rem;
    background-color: #66a2fe;
    border: none;
    width: 50%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }

    @media (min-width:992px) {
        margin: 2rem 0 0 0;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        background-color: #66a2fe;
        border: none;
        width: 100%;
        border-radius: 10px;
        color: #FFF;
        transition: background-color .3s ease;
    }

    
`;

export const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0 0 0;
    display: block;
    text-align: center;
    @media (min-width:992px) {
        text-align: left;
    }

`;

export const Select = styled.select`
    width: 50%;
    display: block;
    padding: .5rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    margin: 0 25%;
    @media (min-width:992px) {
        width: 100%;
        display: block;
        padding: .5rem;
        border-radius: 10px;
        border: none;
        font-size: 1rem;
        margin: 0;

    }
`;

