import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const FOTO_PERFIL =
  "https://res.cloudinary.com/fgrinc/image/upload/v1645650130/samples/animals/cat.jpg";

const HeaderProfile = () => {
  return (
    <>
    <Avatar sx={styles.userPhoto} src={FOTO_PERFIL} />
      <Box sx={styles.boxNamePerson}>
        <Typography sx={styles.nameUser} variant="h6">
          Olá, Paulo Lopes
        </Typography>
        <Typography variant="p">
          Bem vindo ao corretor FGR: sua chave para
          <br />
          negócios imobiliários de sucesso.
        </Typography>
      </Box>
    </>
  );
};

const styles = {
  userPhoto: {
    width: "85px",
    height: "85px",
  },
  boxNamePerson: {
    marginLeft: "20px",
  },
  nameUser: {
    fontWeight: "bold",
  },
};

export default HeaderProfile;
