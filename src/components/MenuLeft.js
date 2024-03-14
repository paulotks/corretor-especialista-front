import { Button, ButtonGroup, Typography, Box, Divider } from "@mui/material";
import React from "react";

const MenuLeft = () => {
  return (
    <>
      
      <Box sx={styles.containerMenu}>
        <Typography sx={styles.title} variant="p">Ações rápidas</Typography>
        <Divider sx={styles.divider} />

        <ButtonGroup
          orientation="vertical"
          size="small"
          color="primary"
          variant="text"
          aria-label="text button group"
        >
          <Button sx={styles.button}>
            <Typography variant="p" sx={styles.Textbutton}>Atualizar Cadastro</Typography>
          </Button>
          <Button sx={styles.button}>
            <Typography variant="p" sx={styles.Textbutton}>Alterar senha</Typography>
          </Button>
          <Button sx={styles.button}>
            <Typography variant="p" sx={styles.Textbutton}>Dúvidas frequentes</Typography>
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

const styles = {
  containerMenu: {
     display: 'flex',
    flexDirection: 'column',
    maxWidth: '170px'
  },
  title: {
    margin: '10px 5px',
    textTransform: 'uppercase',
  },
  divider: {
    backgroundColor: '#AF1917',
    opacity: '0.4',
  },
  Textbutton: {
    margin: "5px 0",
  },
  button: {
    justifyContent: 'flex-start',
  }
};

export default MenuLeft;
