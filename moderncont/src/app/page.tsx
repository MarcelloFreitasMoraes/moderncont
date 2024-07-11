import {  Container } from '@/styles/styles'
import SpecializedServices from '@/components/Especialidades/Especialidades'
import Banner from '@/components/Banner/Banner'

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
          <SpecializedServices />
        </Container>
    )
}
