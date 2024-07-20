import {  Container } from '@/styles/styles'
import Banner from '@/components/Banner/Banner'
import Card from '@/components/Card/Card'
import { services } from '@/components/Card/mock/mock'

export default function Home() {
    return (
        <Container>
          <Banner 
          titleOne='Oferecemos serviços'
          titleTwo='de contabilidade sem'
          titleThree='burocracia'
          textOne='Somos um escritório de contabilidade moderno e competente,
                    unindo forças'
          textTwo='sua empresa crescer.'
          />
        <Card data={services} title={'Somos especializados em'} />
        </Container>
    )
}
