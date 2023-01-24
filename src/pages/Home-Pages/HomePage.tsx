import {Container} from '@mui/material'
import React from 'react'
import CardsContainer from '../../components/CardsCollection/CardsContainer'
import DealsSlider from './Main/DealsSlider'
import SearchBar from "../../components/NavbarComponents/SearchBar";
import CategoriesSlider from './Main/CategoriesSlider'

function HomePage() {
    return (
        <Container>
            <SearchBar />
            <DealsSlider/>
            <CardsContainer heading={"Κατηγορίες προϊόντων"}>
                <CategoriesSlider />
            </CardsContainer>
        </Container>
    )
}

export default HomePage
