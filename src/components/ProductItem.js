import { Avatar, Box, Typography } from "@mui/material";
import React from "react";


const ProductItem = (props) => {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.empreendimento}>
          <Avatar />
          <Typography sx={styles.nomeEmpreendimento}>
            {props.nomeEmpreendimento}
          </Typography>
        </Box>
        <Box sx={styles.tipoQuantidade}>
          <Typography>{props.quantidadeUnidades}</Typography>
          <Typography sx={styles.tipoUnidade}>{props.tipoUnidade}</Typography>
        </Box>
        <Typography>{props.valorUnidade}</Typography>
      </Box>
    </>
  );
};

export default ProductItem;

const styles = {
  container: {
    display: "flex",
    borderRadius: "15px",
    backgroundColor: "#F0F8FF",
    width: "100%",
    justifyContent: "space-between",
    padding: "10px 40px",
    alignItems: "center",
    margin: '15px 0'
  },

  empreendimento: {
    display: "flex",
    alignItems: "center",
  },
  nomeEmpreendimento: {
    marginLeft: "20px",
  },

  tipoQuantidade: {
    display: 'flex',
  },

  tipoUnidade: {
    marginLeft: '40px'
  }
};
