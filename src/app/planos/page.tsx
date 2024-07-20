import Banner from '@/components/Banner/Banner'
import Card from '@/components/Card/Card'
import React from 'react'
import { Container } from './styles'
import { specializedServices } from '@/components/Card/mock/mock'
import { Back } from '@/styles/styles'

const Planos: React.FC = () => {
    return (
        <Container>
            <Banner
                image="servicos.jpeg"
                titleOne="Nossa missão é facilitar a gestão da sua empresa."
            />
            <Back>
                <Card data={specializedServices} title={'Nossos serviços'} />
            </Back>
        </Container>
    )
}

export default Planos
