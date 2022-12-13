import {Container} from '@mui/material'
import React from 'react'
import CardsContainer from '../../components/CardsCollection/CardsContainer'
import CategoryCard from '../../components/CardsCollection/CategoryCard'
import DealsSlider from './Main/DealsSlider'
import SearchBar from "../../components/NavbarComponents/SearchBar";

function HomePage() {
    return (
        <Container>
            <SearchBar />
            <DealsSlider/>
            <CardsContainer heading={"Κατηγορίες προϊόντων"}>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
            </CardsContainer>
        </Container>
    )
}

export default HomePage
