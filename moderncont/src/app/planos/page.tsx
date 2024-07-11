import Banner from '@/components/Banner/Banner'
import Card from '@/components/Card/Card'
import React from 'react'
import { Container } from './styles'
import { specializedServices } from '@/components/Card/mock/mock'

const Planos: React.FC = () => {
    return (
        <Container>
            <Banner image="servicos.jpeg" titleOne='Nossa missão é facilitar a gestão da sua empresa.' />
            <Card data={specializedServices} title={'Nossos serviços'} />
        </Container>
    )
}

export default Planos
