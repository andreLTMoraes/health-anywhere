import React, { useState } from 'react'
import { ShadowOut, Button } from '../styled';
import styled from 'styled-components'

export default function PointCard({point}) {
    const [viewList, setViewList] = useState(false);
    const [patients, setPatients] = useState(point?.patientes || [])

    const handleViewList = () => {
        patients.length > 0 && setViewList(!viewList);
    }

    return (
        <Card>
            <div onClick={handleViewList}>
                <Row>
                    <Title>{point.name}</Title>
                    <Span>Pacientes: {patients.length}</Span>
                </Row>
                <Row>
                    <Span>
                        {point.address}, {point.municipe}, {point.city}
                    </Span>
                    <Button style={{height: '2rem', width: '5rem'}} onClick={()=>{}}>Novo</Button>
                </Row>
            </div>
            <PatientsContainer view={viewList}>
                <Line weight='3'/>
                {patients.map(patient => (
                    <>
                        <Row>
                            <Span>
                                {patient.name}
                            </Span>
                            <Button style={{height: '2rem', width: '5rem'}}>Ver</Button>
                        </Row>
                        <Line/>
                    </>
                ))}
            </PatientsContainer>
        </Card>
    )
}

const Card = styled.div`
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    margin-bottom: 2rem;
    ${ShadowOut};
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem;
`;

const Title = styled.h2`
    margin: 0;
    color: #444;
`;

const Span = styled.span`
    font-size: 18px;
    color: #888;
    font-weight: 500;
`;

const PatientsContainer = styled.div`
    display: ${props => props.view ? 'block' : 'none'};
    
`;

const Line = styled.hr`
    border-top: ${props => props.weight || '1'}px solid #ccc;
`;
