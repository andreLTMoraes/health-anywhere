import styled from 'styled-components'

export const primaryColor = `#d37f05`;

export const ShadowOut = `box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.1), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)`;

export const FeaturedText = styled.span`
    color: #aaa;
    font-weight: 900;
    font-size: 14px;
    text-transform: uppercase;
    margin: 1rem;
`;

export const MainContent = styled.div`
    width: 90%;
    max-width: 991px;
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