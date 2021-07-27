import React from 'react'
import * as S from './styled'
import { MainContent } from '../../styled'

import { doctor } from '../../tourData'

import TopMenu from '../../components/topMenu'
import PointCard from '../../components/pointCard'

export default function Home() {
    return (
        <>
            <TopMenu/>
            <S.Container>
                <MainContent>
                    {doctor.points.map(point => (
                        <PointCard point={point} />
                    ))}
                </MainContent>
            </S.Container>
        </>
    )
}
