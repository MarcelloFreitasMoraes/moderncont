import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { LocationOn, AccessTime, Phone } from '@mui/icons-material';
import Image from 'next/image';
import bannerModerncont from '../../../public/bannerModerncont.png';
import Banner from '@/components/Banner/Banner';
import { Container } from './styles';

const Contato: React.FC = () => {
  return (
    <Container>
      <Banner image="fale-conosco.jpg" titleOne='Fale Conosco' />
      <Grid container justifyContent="center" sx={{ padding: 4, backgroundColor: '#2E3B4E' }}>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center', color: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}>
            <Image src={bannerModerncont} alt={'logo'} width={220} height={105} />
            <Typography variant="h6" gutterBottom>Assessoria Contábil</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}>
            <LocationOn sx={{ fontSize: 40, marginBottom: 1 }} />
            <Typography variant="body1" gutterBottom>
              Av. Dr. Arnaldo Godoy de Souza, 1685<br />
              Tubalina - Uberlândia - MG
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}>
            <AccessTime sx={{ fontSize: 40, marginBottom: 1 }} />
            <Typography variant="body1" gutterBottom>
              Seg-Sex 09:00h - 18:00h<br />
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Phone sx={{ fontSize: 40, marginBottom: 1 }} />
            <Typography variant="body1" gutterBottom>Ligue-nos</Typography>
            <Typography variant="h6">(34) 3210-5992</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5237007943174!2d-46.5270764!3d-23.6572227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6bd53735eeb5%3A0xc4d9f318f6181981!2sModernCont%20Intelig%C3%AAncia%20Contabil!5e0!3m2!1spt-BR!2sbr!4v1720668732672!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contato;