import styled from 'styled-components';
import { ShadowOut } from '../../styled';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
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

export const Credit = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0;
`;