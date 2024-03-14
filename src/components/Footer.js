import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={styles.container}>
        <Typography>Precisa de mais ajuda? Entre no WhatsApp ou ligue para 62 3282-8855</Typography>
        <Typography >© 2023 | FGR Incorporações. Todos os direitos reservados. Termos de uso | Política de privacidade</Typography>
    </Box>
  )
}

export default Footer

const styles = {
    container: {
        width: '100vw',
        backgroundColor: "#DCE3E6",
        height: '150px',
        padding: "20px 40px",
        marginTop: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',        
    },    
}