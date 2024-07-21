import React from 'react'
import { Container, Grid, Paper, Box } from '@mui/material'
import TypographyComponent from '../Typography/Typography'

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
            sx={{
                padding: 2,
                height: '100%',
                textAlign: 'center',
                boxShadow:
                    '0px 3px 3px -2px #d19c47, 0px 3px 4px 0px #d19c47, 0px 1px 8px 0px #d19c47',
            }}
        >
            <Box sx={{ fontSize: 40, color: 'primary.main' }}>{icon}</Box>
            <TypographyComponent
                variant="h6"
                component="h3"
                sx={{ marginTop: 1, fontWeight: 'bold' }}
            >
                {title}
            </TypographyComponent>
            <TypographyComponent variant="body1" sx={{ marginTop: 1 }}>
                {description}
            </TypographyComponent>
        </Paper>
    </Grid>
)

const Card = ({data ,title}: {data: any[], title: string}) => (
    <Container sx={{ marginTop: 4, position: 'relative', zIndex: 1 }}>
        <TypographyComponent
            variant="h2"
            component="h2"
            fontWeight={900}
            sx={{ textAlign: 'center', marginBottom: 4, fontSize:{ xs: '1.5rem', sm: '3.75rem'}}}
        >
            {title}
        </TypographyComponent>
        <Grid container spacing={3}>
            {data?.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </Grid>
    </Container>
)

export default Card
