import React from 'react'
import styled from 'styled-components'
import { doctor } from '../tourData';
import { MainContent } from '../styled';

export default function TopMenu() {
    return (
        <Menu>
            <MainContent>
                <MenuContent>
                    <h4>Logo Health Anywhere</h4>
                    <span>Dr. {doctor.name}</span>
                </MenuContent>
            </MainContent>
        </Menu>
    )
}

const Menu = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    position: absolute;
    top: 0;
`;

const MenuContent = styled.div`
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    border-radius: 0 0 .5rem .5rem;
    box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.1);
`;
