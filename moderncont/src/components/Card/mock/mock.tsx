import {
    AccountBalance,
    Receipt,
    Home,
    Business,
    AddBusiness,
    AccountBalanceWallet,
    GroupWork,
    Sync,
    Gavel,
    LocalHospital,
    CleaningServices,
    Build,
    Store,
    Apartment,
    LocalParking,
    Construction,
} from '@mui/icons-material'

export const services = [
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

export const specializedServices = [
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
