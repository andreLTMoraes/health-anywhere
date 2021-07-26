import styled from 'styled-components';
import { ShadowOut, primaryColor } from '../../styled';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 28rem;
    ${ShadowOut};
`;

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    padding: 0 .5rem;
    border: none;
    border-radius: .25rem;
    box-shadow: -2px -2px 6px 0 rgba(255,255,255, 0.4) inset, 2px 2px 9px 0 rgba(0,0,0,0.3) inset;

    &:focus,
    &:active {
        outline: none;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 3rem;
    color: #fff;
    margin: 1rem;
    font-weight: bold;
    background-color: ${primaryColor};
    border: none;
    border-radius: .25rem;
    box-shadow: 4px 6px 9px 0 rgba(0,0,0,0.4), -5px -5px 6px 0 rgba(255,255,255,0.4);

    &:hover {
        box-shadow: 4px 6px 9px 0 rgba(0,0,0,0.6), -5px -5px 6px 0 rgba(255,255,255,0.6);
    }

    &:focus {
        outline: none;
    }

    &:active {
        
        box-shadow: -3px -3px 6px 0 rgba(255,255,255, 0.4) inset, 3px 3px 9px 0 rgba(0,0,0,0.3) inset;
    }
`;

export const Credit = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0;
`;