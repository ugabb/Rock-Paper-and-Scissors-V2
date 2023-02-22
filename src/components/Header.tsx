import { ScoreContainer,Score,HeaderContainer,Logo } from '@/styles/styles'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderContainer>
        <Logo src="./logo.svg" alt="" />
        <ScoreContainer>
            <p>Score</p>
            <Score>12</Score>
        </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header