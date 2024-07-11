import React from 'react'
import { Container, Grid, Paper, Typography, Box } from '@mui/material'
import {
    AccountBalance,
    Receipt,
    Home,
    Business,
    AddBusiness,
    AccountBalanceWallet,
    GroupWork,
    Sync,
} from '@mui/icons-material'

const services = [
    {
        icon: <AccountBalance sx={{ color: '#E4B237' }} />,
        title: 'Contabilidade',
        description:
            'Estamos prontos para esclarecer suas dúvidas e atender às suas necessidades.',
    },
    {
        icon: <Receipt sx={{ color: '#E4B237' }} />,
        title: 'Fiscal',
        description:
            'Assessoria completa para a sua empresa ficar em dia com todas as obrigações fiscais.',
    },
    {
        icon: <Home sx={{ color: '#E4B237' }} />,
        title: 'Condomínios',
        description:
            'Suporte na administração de condomínios, emissão de boletos e outros serviços.',
    },
    {
        icon: <Business sx={{ color: '#E4B237' }} />,
        title: 'Societário',
        description:
            'Assessoria para uma gestão empresarial eficiente e responsável.',
    },
    {
        icon: <AddBusiness sx={{ color: '#E4B237' }} />,
        title: 'Abertura de empresa',
        description:
            'Abra sua empresa com a estrutura societária mais adequada à sua realidade e metas.',
    },
    {
        icon: <AccountBalanceWallet sx={{ color: '#E4B237' }} />,
        title: 'Financeiro',
        description:
            'Assumimos a gestão financeira e tributária para que você possa focar na gestão dos seus negócios.',
    },
    {
        icon: <GroupWork sx={{ color: '#E4B237' }} />,
        title: 'Outsourcing',
        description:
            'Soluções personalizadas para a sua empresa. Desenvolvemos planos de trabalho específicos para o seu negócio.',
    },
    {
        icon: <Sync sx={{ color: '#E4B237' }} />,
        title: 'Integração contábil',
        description:
            'Agilidade e competência. Mais modernidade e eficiência para a contabilidade da sua empresa.',
    },
]

const ServiceCard = ({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) => (
    <Grid item xs={12} sm={6} md={3} mb={3}>
        <Paper
            elevation={3}
            sx={{ padding: 2, height: '100%', textAlign: 'center' }}
        >
            <Box sx={{ fontSize: 40, color: 'primary.main' }}>{icon}</Box>
            <Typography
                variant="h6"
                component="h3"
                sx={{ marginTop: 1, fontWeight: 'bold' }}
            >
                {title}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
                {description}
            </Typography>
        </Paper>
    </Grid>
)

const Services = () => (
    <Container sx={{ marginTop: 4 }}>
        <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: 'center', marginBottom: 4, fontWeight: 900 }}
        >
            Nossos serviços
        </Typography>
        <Grid container spacing={3}>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </Grid>
    </Container>
)

export default Services
