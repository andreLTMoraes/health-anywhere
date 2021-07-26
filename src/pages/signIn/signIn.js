import React from 'react'
import * as S from './styled'
import { FeaturedText } from '../../styled'

export default function SignIn() {
    return (
        <S.Container>
            <S.LoginBox>
                <h3>Logo HealthAnywhere</h3>
                <S.Input placeholder='Email'/>
                <S.Input placeholder='Senha'/>
                <S.Button>Entrar</S.Button>
                <FeaturedText>esqueci a senha</FeaturedText>
            </S.LoginBox>
            <S.Credit>
                <FeaturedText>tour pelo sistema</FeaturedText>
            </S.Credit>
        </S.Container>
    )
}
