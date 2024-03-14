import { Box, Typography } from "@mui/material";
import React from "react";

const ICON_CONQUISTAS = 'https://res.cloudinary.com/fgrinc/image/upload/v1707251650/corretor-especialista/icons/rbgpjme9gohme8jipguc.svg';

const CardsHeader = () => {
  return (
    <>
      <Box sx={styles.containerCard}>
        <Typography color="text.secondary">Casas</Typography>
        <Box sx={styles.footerCard}>
            <Typography variant="h4" color="text.secondary">38</Typography>
            <img alt="Conquistas" src={ICON_CONQUISTAS}></img>
        </Box>
      </Box>
    </>
  );
};

export default CardsHeader;

const styles = {
  containerCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: '1',
    padding: '20px',
    backgroundColor: '#F5F5F5',
    borderRadius: '18px',
    margin: '0 15px 0 0',
    minWidth: '175px',
  },
  footerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px'
  },
};
