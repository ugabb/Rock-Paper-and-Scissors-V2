import { ScoreContainer,Score,HeaderContainer,Logo } from '@/styles/styles'
import React from 'react'

import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";


type Props = {}

const Header = (props: Props) => {
  const score = useSelector((state:RootState) => state.score.value);

  return (
    <HeaderContainer>
        <Logo src="./logo.svg" alt="" />
        <ScoreContainer>
            <p>Score</p>
            <Score>{score}</Score>
        </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header