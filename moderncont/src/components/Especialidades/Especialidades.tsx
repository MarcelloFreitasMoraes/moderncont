import React from 'react'
import { Container, Grid, Paper, Typography, Box } from '@mui/material'
import {
    Gavel,
    LocalHospital,
    CleaningServices,
    Build,
    Store,
    Apartment,
    LocalParking,
    Construction,
} from '@mui/icons-material'

const specializedServices = [
    {
        icon: <Gavel fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Advogados',
        description: 'Contabilidade especializada para advogados',
    },
    {
        icon: <LocalHospital fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Médicos',
        description: 'Contabilidade Especializada para Médicos',
    },
    {
        icon: <CleaningServices fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Folha de Domésticas',
        description: 'Terceirização de Folha de Domésticas',
    },
    {
        icon: <Build fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Prestadores de serviço',
        description: 'Contabilidade especializada para prestadores',
    },
    {
        icon: <Store fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Comércio',
        description: 'Contabilidade eficiente para comércios em geral',
    },
    {
        icon: <Apartment fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Imobiliárias',
        description: 'Contabilidade para auxiliar imobiliárias',
    },
    {
        icon: <LocalParking fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Estacionamentos',
        description: 'Contabilidade voltada para gestão de estacionamentos',
    },
    {
        icon: <Construction fontSize="large" sx={{ color: '#E4B237' }} />,
        title: 'Construtoras',
        description:
            'Contabilidade para simplificar as demandas da construção civil',
    },
]

const SpecializedServiceCard = ({
    icon,
    title,
    description,
}: {
    icon: JSX.Element
    title: string
    description: string
}) => (
    <Grid item xs={12} sm={6} md={3} mb={3}>
        <Paper
            elevation={3}
            sx={{ padding: 3, textAlign: 'center', height: '100%' }}
        >
            <Box sx={{ fontSize: 60, color: 'primary.main' }}>{icon}</Box>
            <Typography
                variant="h6"
                component="h3"
                sx={{ marginTop: 2, fontWeight: 'bold' }}
            >
                {title}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
                {description}
            </Typography>
        </Paper>
    </Grid>
)

const SpecializedServices = () => (
    <Container sx={{ marginTop: 4 }}>
        <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: 'center', marginBottom: 4, fontWeight: 900 }}
        >
            Somos especializados em
        </Typography>
        <Grid container spacing={4}>
            {specializedServices.map((service, index) => (
                <SpecializedServiceCard key={index} {...service} />
            ))}
        </Grid>
    </Container>
)

export default SpecializedServices
