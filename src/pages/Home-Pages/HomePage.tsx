import { Container } from '@mui/material'
import React from 'react'
import CardsContainer from '../../components/CardsCollection/CardsContainer'
import CategoryCard from '../../components/CardsCollection/CategoryCard'
import DealsSlider from './Main/DealsSlider'

function HomePage() {
  return (
    <Container>
    <header>
        <h1>Afou eixa</h1>
    </header>
    <DealsSlider />
    <CardsContainer>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </CardsContainer>
    </Container>
  )
}

export default HomePage
